import { onMounted, onUnmounted, ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'

export default function useScrollTop() {
  const scrollTop = ref(0)
  const cb = useDebounceFn(function () {
    scrollTop.value = (document.documentElement || document.body).scrollTop
  }, 50)

  onMounted(() => {
    document.addEventListener('scroll', cb)
  })

  onUnmounted(() => {
    document.removeEventListener('scroll', cb)
  })
  return scrollTop
}
