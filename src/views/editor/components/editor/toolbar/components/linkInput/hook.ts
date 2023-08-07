import { warningMessage } from '@/common/message'
// import { clickedTarget } from '@/views/editor/hook'
import { ref } from 'vue'

export const link = ref('')
export const linkText = ref('')

export function reset() {
  link.value = ''
  linkText.value = ''
  // clickedTarget.value = null
}

// 内容模式：点击超链接的时候设置弹出框的链接信息
export function setClickedLinkURL(target: HTMLElement) {
  link.value = target.getAttribute('href') || ''
}
export function setClickedLinkText(target: HTMLElement) {
  linkText.value = target.textContent || ''
}

export function useLinkInput(emit: any) {
  function confirm() {
    if (!link.value || !linkText.value) {
      warningMessage('请填写完整!')
      return
    }
    emit('confirm', link.value, linkText.value)
    reset()
  }

  return {
    confirm,
    link,
    linkText
  }
}
