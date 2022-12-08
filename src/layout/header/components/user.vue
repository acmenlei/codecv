<script setup lang='ts'>
import ToastModal from "@/components/toast-modal/toastModal.vue";
import useUserStore from "@/store/modules/user"
import Profile from "@/components/profile.vue";
import NavBar from "@/components/navBar.vue";
import CRM from "@/components/comment-reply-msg/crm.vue";
import ChatRoom from "@/components/chat-room/chat.vue";

import { useRouter } from "vue-router";
import { useUserLogin, useUpdateModel, useNavigator, useUpdate, useRegister, useMessage } from "../hook"

const router = useRouter();
const { user, login, logout } = useUserLogin();
const { flag, toggle } = useUpdateModel();
const { update } = useUpdate(toggle);
const { loginModelToggle, userInfo, genVerify, loginState } = useUserStore();
const { model, registerUser, toggleModel } = useRegister();
const { messageModal, toggleMessageModal, tab, msgTabChange } = useMessage();
</script>

<template>
  <div class="user">
    <div class="user-creative mr-20 pointer primary" @click="useNavigator(router, '/community/editor')">
      写面经 <i class="iconfont icon-edit font-20"></i>
    </div>
    <template v-if="loginState.logined">
      <el-badge :value="1" class="mr-20">
        <i class="iconfont icon-message1 message hover pointer font-25" @click="toggleMessageModal"></i>
      </el-badge>
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
  <!-- 个人信息修改 -->
  <toast-modal width="400" :flag="flag" @close="toggle">
    <Profile @cancel="toggle" @submit="update" />
  </toast-modal>
  <!-- 登录 -->
  <toast-modal @close="loginModelToggle" :flag="loginState.loginModel" width="300">
    <div class="login" v-if="!model" data-aos="zoom-in">
      <h3>用户登录</h3>
      <input v-model="user.username" placeholder="用户名" />
      <input v-model="user.password" type="password" placeholder="密码" />
      <input v-model="user.verify" placeholder="验证码" />
      <img @click="genVerify" class="verify-code pointer" :src="loginState.verifyImg" />
      <button class="btn primary" @click.prevent="login(user, true)">马上登录</button>
      <button class="btn plain" @click.prevent="toggleModel">我要注册</button>
    </div>
    <!-- 注册 -->
    <div class="register" v-if="model" data-aos="zoom-in">
      <h3>用户注册</h3>
      <input v-model="registerUser.username" placeholder="用户名" />
      <input v-model="registerUser.password" type="password" placeholder="密码" />
      <input v-model="registerUser.verify" placeholder="验证码" />
      <img @click="genVerify" class="verify-code pointer" :src="loginState.verifyImg" />
      <button class="btn primary" @click.prevent="login(registerUser, false)">注册</button>
      <button class="btn plain" @click.prevent="toggleModel">去登录</button>
    </div>
  </toast-modal>
  <!-- 消息内容 -->
  <toast-modal @close="toggleMessageModal" :flag="messageModal" width="800">
    <NavBar :tabs="['评论/回复', '联系人']" @tab-click="msgTabChange" />
    <CRM v-if="tab == 0" />
    <chat-room v-if="tab == 1" />
  </toast-modal>
</template>

<style lang='scss' scoped>
.user {
  flex-basis: 250px;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .message {
    color: #555;
  }

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

.login,
.register {
  position: relative;
  display: flex;
  flex-direction: column;

  input {
    border: none;
    outline: none;
    background: #eee;
    border-radius: 8px;
    padding: 10px;
  }

  input,
  img,
  .btn-group,
  h3,
  button {
    margin-bottom: 10px;
  }

  .verify-code {
    width: 120px;
  }

  .tip {
    font-size: 10px;
    position: absolute;
    right: 10px;
    bottom: -10px;
  }
}
</style>