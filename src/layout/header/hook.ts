import { successMessage } from '@/common/message';
import { Router } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';

import useUserStore, { TOKEN, USERNAME } from '@/store/modules/user'
import { getLocalStorage } from '@/common/hooks/useLcoaStoage';
import { errorMessage } from '@/common/message';
import { updateUserInfo } from '@/services/modules/user';

export function useUpdateModel() {
  const flag = ref(false);
  function toggle() {
    flag.value = !flag.value;
  }
  return {
    flag, toggle
  }
}

export const userForm = reactive({
  uid: 0,
  nickName: '',
  username: '',
  sex: '',
  professional: '',
  graduation: '',
  school: '',
  avatar: '',
  origin: ''
});
export function useUpdate(toggle: Function) {
  async function update() {
    const { userInfo, setUserInfo } = useUserStore()
    // 格式化时间 只需要年份
    userForm.graduation = String(new Date(userForm.graduation).getFullYear());
    const data = await updateUserInfo(userForm) as IResponse<unknown>;
    if (data.code == 200) {
      toggle();
      successMessage(data.msg);
      setUserInfo(userInfo, userForm);
    } else {
      errorMessage(data.msg);
    }
  }
  return {
    update
  }
}

export function useUserLogin() {
  const user = reactive({ username: '', password: '', verify: '' });
  const { login, logout, verifyLoginState } = useUserStore();

  onMounted(() => {
    const token = getLocalStorage(TOKEN), username = getLocalStorage(USERNAME);
    token && username && verifyLoginState(token as string, username as string);
  })

  return {
    user, login, logout
  }
}

export function useNavigator(router: Router, path: string) {
  const { loginState, loginModelToggle } = useUserStore();
  if (!loginState.logined) {
    loginModelToggle();
    return;
  }
  router.push(path)
}

export function useRegister() {
  const model = ref(false), registerUser = reactive({ username: '', password: '', verify: '' });
  const { genVerify } = useUserStore();

  function toggleModel() {
    model.value = !model.value;
    genVerify();
  }
  return {
    model,
    registerUser,
    toggleModel
  }
}

export function useMessage() {
  const messageModal = ref(false), tab = ref(0);

  function toggleMessageModal() {
    messageModal.value = !messageModal.value;
  }

  function msgTabChange(idx: number) {
    tab.value = idx;
  }

  return {
    tab,
    messageModal,
    msgTabChange,
    toggleMessageModal
  }
}