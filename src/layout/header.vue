<script setup lang='ts'>
import outNav from "@/common/nav/outNav"
import Profile from "@/components/profile.vue";
import RenderDialog from "@/components/renderDialog.vue";
import useUserStore from "@/store/modules/user"
import { useRouter } from "vue-router";
import { useUserLogin, useUpdateModel, useNavigator, useUpdate, userForm, useRegister } from "./hook"

const router = useRouter();
const { user, login, logout } = useUserLogin();
const { flag, toggle } = useUpdateModel();
const { update } = useUpdate(toggle);
const { loginModelToggle, userInfo, genVerify, loginState } = useUserStore();
const { model, registerUser, toggleModel } = useRegister();

</script>

<template>
  <div class="header-out">
    <div class="header">
      <div class="logo" @click="$router.replace('/home')">
        <img src="/vite.svg" alt="">
      </div>
      <ul class="nav">
        <li v-for="navItem in outNav" :class="{ 'checked': $route.path.startsWith(navItem.path) }">
          <router-link v-if="!navItem.tooltip" :to="navItem.path">{{ navItem.name }}</router-link>
          <span v-else>{{ navItem.name }}</span>
        </li>
      </ul>

      <div class="user">
        <div class="user-creative mr-20 pointer primary" @click="useNavigator(router, '/community/editor')">
          写面经 <i class="iconfont icon-edit font-20"></i>
        </div>
        <template v-if="loginState.logined">
          <span class="user-nick  mr-10">{{ userInfo.nickName }}</span>
          <el-dropdown>
            <img @click="toggle" class="pointer mr-10" :src="userInfo.avatar" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
        <span v-else class="pointer login" @click="loginModelToggle">登录</span>
      </div>

    </div>
  </div>
  <!-- 个人信息修改 -->
  <render-dialog width="400px" :flag="flag" title="个人信息" :footer="false">
    <Profile @cancel="toggle" @submit="update" />
  </render-dialog>
  <!-- 登录 -->
  <render-dialog :flag="loginState.loginModel" width="400px" :title="model ? '用户注册' : '用户登录'" :footer="false">
    <el-form :model="user" class="login" v-if="!model">
      <el-form-item label="用户名" label-width="70px">
        <el-input v-model="user.username" placeholder="username" />
      </el-form-item>
      <el-form-item label="密码" label-width="70px">
        <el-input v-model="user.password" type="password" placeholder="password" />
      </el-form-item>
      <el-form-item label="验证码" label-width="70px">
        <el-input v-model="user.verify" placeholder="verify code" />
      </el-form-item>
      <el-form-item align="center">
        <img @click="genVerify" class="verify-code pointer" :src="loginState.verifyImg" />
      </el-form-item>
      <el-form-item label="" label-width="70px">
        <button class="btn primary" @click.prevent="login(user, true)">登录</button>
        <button class="btn plain" @click.prevent="toggleModel">去注册</button>
      </el-form-item>
    </el-form>
    <!-- 注册 -->
    <el-form :model="registerUser" class="register" v-if="model">
      <el-form-item label="用户名" label-width="70px">
        <el-input v-model="registerUser.username" placeholder="username" />
      </el-form-item>
      <el-form-item label="密码" label-width="70px">
        <el-input v-model="registerUser.password" type="password" placeholder="password" />
      </el-form-item>
      <el-form-item label="验证码" label-width="70px">
        <el-input v-model="registerUser.verify" placeholder="verify code" />
      </el-form-item>
      <el-form-item align="center">
        <img @click="genVerify" class="verify-code pointer" :src="loginState.verifyImg" />
      </el-form-item>
      <el-form-item label="" label-width="70px">
        <button class="btn primary" @click.prevent="login(registerUser, false)">注册</button>
        <button class="btn plain" @click.prevent="toggleModel">去登录</button>
      </el-form-item>
    </el-form>
  </render-dialog>
</template>

<style lang='scss' scoped>
#user_avatar_upload {
  display: none;
}

.header-out {
  width: 100%;
  background: white;
  box-shadow: 0 0 10px 0 #d0d3db;
  height: 60px;
  z-index: 3;
  position: sticky;
  top: 0;

  .header {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .user {
      flex-basis: 250px;
      white-space: nowrap;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .user-creative {
        margin-right: 40px;
      }

      .user-nick {
        display: inline-block;
        font-size: .9rem;
        margin-top: 10px;
        color: orange;
      }

      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }

      .login {
        &:hover {
          opacity: .6;
        }
      }
    }
  }
}

.user-preview {
  overflow: hidden;
  padding-left: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  label {
    display: block;
    margin-top: 20px;
    white-space: nowrap;
    overflow: auto;

    input,
    p {
      font-weight: bold;
      cursor: pointer;
      display: inline-block;
      padding: 2px 10px;
      border: none;
      outline: none;

      &:focus {
        border-bottom: 1px solid #ccc;
      }
    }
  }
}

.login,
.register {
  position: relative;

  .verify-code {
    margin-left: 70px;
  }

  .tip {
    font-size: 10px;
    position: absolute;
    right: 10px;
    bottom: -10px;
  }
}
</style>