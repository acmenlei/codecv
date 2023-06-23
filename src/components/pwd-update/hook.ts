import useUserStore from '@/store/modules/user'
import { errorMessage, warningMessage } from '@/common/message'
import VerificationCode, { createCode } from 'picture-verification-code'
import { onMounted, ref } from 'vue'
import { pwdUpdate } from '@/api/modules/user'
import { IResponse } from '@@types/type'

export function useSubmit(emits: any) {
  const form = ref({ nPassword: '', oPassword: '', verify: '' })
  const imgSrc = ref('')
  const codeInstance = new VerificationCode()
  let verifyCode = ''
  // 提交修改
  async function submit() {
    if (form.value.nPassword.trim() === '' || form.value.oPassword.trim() === '') {
      return errorMessage('信息请填写完整!')
    }
    if (form.value.verify.trim().toLowerCase() != verifyCode.toLowerCase()) {
      return errorMessage('验证码不正确，请重新尝试！')
    }
    const { userInfo } = useUserStore(),
      username = userInfo.username
    const { code, msg } = (await pwdUpdate({
      username,
      nPassword: form.value.nPassword,
      oPassword: form.value.oPassword
    })) as IResponse<unknown>
    if (code == 200) {
      warningMessage(msg)
      location.reload()
      return
    }
    errorMessage(msg)
  }
  function genCode() {
    verifyCode = createCode()
    imgSrc.value = codeInstance.render(verifyCode)
  }
  function cancel() {
    genCode()
    emits('cancel')
  }
  onMounted(genCode)
  return {
    form,
    imgSrc,
    genCode,
    cancel,
    submit
  }
}
