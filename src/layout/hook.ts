import { successMessage } from '@/common/message';
import { Router } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';

import useUserStore, { TOKEN, USERNAME } from '@/store/modules/user'
import { getLocalStorage } from '@/common/hooks/useLcoaStoage';
import { fileMerge, fileUpload } from '@/services/modules/upload';
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
  const uploadInput = ref(), chunkSize = 1024 * 1024;

  async function upload(index: number) {
    const start = index * chunkSize, file = uploadInput.value.files[0];
    const [filename, ext] = file.name.split('.');

    // 进行切片
    if (start > file.size) {
      // 上传完毕了之后进行切片合并
      return merge(file.name, index);
    }
    // 切片为blob
    const blob = file.slice(start, start + chunkSize)
    const blobName = `${filename}.${index}.${ext}`;
    const blobFile = new File([blob], blobName);

    const form = new FormData();
    form.append("file", blobFile)

    try {
      await fileUpload(form);
      upload(++index);
    } catch (err) {
      errorMessage('上传失败了，待会再试试吧～')
    }
  }

  async function merge(name: string, length: number) {
    const data: any = await fileMerge({ name, length });
    userForm.avatar = data.url;
  }

  async function update() {
    const { userInfo, setUserInfo } = useUserStore()
    // 格式化时间 只需要年份
    userForm.graduation = String(new Date(userForm.graduation).getFullYear());
    const data = await updateUserInfo(userForm) as IResponse;
    if (data.code == 200) {
      toggle();
      successMessage(data.msg);
      setUserInfo(userInfo, userForm);
    } else {
      errorMessage(data.msg);
    }
  }
  return {
    uploadInput,
    update,
    upload
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