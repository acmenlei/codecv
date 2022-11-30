import useUserStore from '@/store/modules/user';

export function isLogin() {
  const { loginState } = useUserStore();
  return loginState.logined;
}