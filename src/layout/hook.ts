import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';

import useUserStore from '@/store/modules/user'
import { errorMessage } from '@/common/message';

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
  const { loginState, login: loginService } = useUserStore();

  function login() {
    if (!user.name || !user.password) {
      errorMessage('请输入完整的账户信息!')
      return;
    }
    if (loginState.verify.toLowerCase() != user.verify.toLowerCase()) {
      errorMessage('验证码错误, 请重新尝试!');
      return;
    }
    loginService(user);
  }
  return {
    user, login
  }
}

export function useNavigator(path: string) {
  const router = useRouter();
  const { loginState, loginModelToggle } = useUserStore();
  if (!loginState.logined) {
    loginModelToggle();
    return;
  }
  router.push(path)
}