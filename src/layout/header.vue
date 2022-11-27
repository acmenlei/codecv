<script setup lang='ts'>
import outNav from "@/common/nav/outNav"
import RenderDialog from "@/components/renderDialog.vue";
import { useRouter } from "vue-router";

import { useUserLogin, useUpdate } from "./hook"
const { verifyImgSrc, switchVerifyImg, user, loginModel, login, loginModelToogle } = useUserLogin();
const { flag, toggle, update, userInfo, initUserInfo, updateAvatar } = useUpdate();
const router = useRouter();

function toCommunityEditor() {
  if (initUserInfo.userId) {
    router.push('/community/editor')
    return;
  }
  loginModelToogle();
}

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
        <div class="user-creative mr-20 pointer primary" @click="toCommunityEditor">
          写面经 <i class="iconfont icon-practice "></i>
        </div>
        <template v-if="initUserInfo.userId">
          <span class="user-nick  mr-10">{{ initUserInfo.nick }}</span>
          <img @click="toggle" class="pointer mr-10" :src="initUserInfo.avatar" />
        </template>
        <span v-else class="pointer login" @click="loginModelToogle">登录</span>
      </div>

    </div>
  </div>
  <!-- 个人信息修改 -->
  <render-dialog width="400px" :flag="flag" @cancel="toggle" @confirm="update" title="个人信息" reset-text="取消"
    confirm-text="提交修改">
    <div class="user-preview">
      <label for="user_avatar_upload">
        <img class="pointer" :src="userInfo.avatar" alt="头像" />
      </label>
      <input type="file" id="user_avatar_upload" accept=".png,.jpg,.jpeg" @change="updateAvatar">
      <label>昵称：<input v-model='userInfo.nick'></label>
      <label>毕业学校：<input v-model='userInfo.school'></label>
      <label>毕业时间：<p>
          <el-date-picker v-model="userInfo.graduation" type="year" placeholder="毕业时间" />
        </p></label>
      <label>求职意向：<input v-model='userInfo.professional'></label>
      <label>所在地区：<input v-model='userInfo.origin'></label>
    </div>
  </render-dialog>
  <!-- 登录 -->
  <render-dialog :flag="loginModel" width="400px" title="用户登录" :footer="false">
    <el-form :model="user" class="login">
      <el-form-item label="用户名" label-width="70px">
        <el-input v-model="user.name" placeholder="username" />
      </el-form-item>
      <el-form-item label="密码" label-width="70px">
        <el-input v-model="user.password" type="password" placeholder="password" />
      </el-form-item>
      <el-form-item label="验证码" label-width="70px">
        <el-input v-model="user.verify" placeholder="verify code" />
      </el-form-item>
      <el-form-item align="center">
        <img @click="switchVerifyImg" class="verify-code pointer" :src="verifyImgSrc" />
      </el-form-item>
      <el-form-item label="" label-width="70px">
        <button class="btn primary" @click="login">登录</button>
        <span class="tip">未注册的用户将默认注册登录</span>
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

.login {
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