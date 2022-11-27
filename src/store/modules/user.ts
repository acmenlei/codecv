import { defineStore } from "pinia";
import pinia from "@/store"

const useUserStore = defineStore('userStore', {
  state: () => ({
    userInfo: {
      userId: 0,
      nick: '',
      professional: '',
      graduation: '',
      school: '',
      avatar: '',
      origin: ''
    }
  }),
  actions: {
    login() {
      // 发送登录服务
      // 返回消息 修改状态

    }
  },
})(pinia)

export default () => useUserStore