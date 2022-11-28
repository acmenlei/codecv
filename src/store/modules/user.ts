import { defineStore } from "pinia";
import pinia from "@/store"
import VerificationCode, { createCode } from 'picture-verification-code';
import { setLocalStorage, getLocalStorage } from "@/common/hooks/useLcoaStoage"

const codeInstance = new VerificationCode();
export const TOKEN = 'TOKEN', USERINFO = 'USERINFO', SET_TOKEN = 'SET_TOKEN', SET_USERINFO = 'SET_USERINFO';

const userInfo = {
  userId: 0,
  nick: '',
  professional: '',
  graduation: '',
  school: '',
  avatar: '',
  origin: ''
};

export type UserInfo = typeof userInfo;

const useUserStore = defineStore('userStore', {
  state: () => ({
    userInfo: getLocalStorage(USERINFO) ? JSON.parse(getLocalStorage(USERINFO) as string) : userInfo,
    loginState: {
      logined: false, // 登录态
      loginModel: false,
      verify: '', // 验证码
      verifyImg: '' // 验证码图片
    },
    token: getLocalStorage(TOKEN) || ''
  }),
  actions: {
    login(user: IUser) {
      console.log('登录：', user.verify, this.loginState.verify);
    },
    loginModelToggle() {
      this.loginState.loginModel = !this.loginState.loginModel;
      this.genVerify();
    },
    genVerify() {
      // 生成随机验证码
      this.loginState.verify = createCode();
      // 生成验证码图片url
      this.loginState.verifyImg = codeInstance.render(this.loginState.verify);
    },
    [SET_TOKEN](token: string) {
      setLocalStorage(TOKEN, token);
    },
    [SET_USERINFO](userInfo: UserInfo) {
      setLocalStorage(USERINFO, JSON.stringify(userInfo));
      this.userInfo = { ...userInfo };
    }
  },
})

export default () => useUserStore(pinia);