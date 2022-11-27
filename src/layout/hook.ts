import { reactive, ref } from 'vue';
import VerificationCode, { createCode } from 'picture-verification-code';
import useUserStore from '@/store/modules/user'

export function useUpdate() {
  const { userInfo } = useUserStore();
  const _userInfo = reactive({ ...userInfo }), flag = ref(false);

  function toggle() {
    flag.value = !flag.value;
  }

  function update() {
    toggle();
    console.log('更新', _userInfo)
  }

  function updateAvatar(event: Event) {
    const file: File = (event.target as any).files[0];
  }
  return {
    flag, toggle, update,
    updateAvatar,
    userInfo: _userInfo,
    initUserInfo: userInfo
  }
}

export function useUserLogin() {
  const user = reactive({ name: '', password: '', verify: '' });
  const loginModel = ref(false);
  const verifyImgSrc = ref(''), code = new VerificationCode();

  let verifyCode: number | string;

  function loginModelToogle() {
    loginModel.value = !loginModel.value;
    loginModel.value && switchVerifyImg();
  }

  function login() {
    // 发请求
    console.log(user.verify, verifyCode)
  }

  function switchVerifyImg() {
    // 生成随机验证码
    verifyCode = createCode();
    // 生成验证码图片 DataURL
    verifyImgSrc.value = code.render(verifyCode);
  }
  return {
    verifyImgSrc, switchVerifyImg, loginModel, user, loginModelToogle, login

  }
}