import useUserStore from '@/store/modules/user'
import { useDark, useToggle } from '@vueuse/core'
import { watchEffect } from 'vue'

export function isLogin() {
  const { loginState } = useUserStore()
  return loginState.logined
}

export function useThemeConfig() {
  const isDark = useDark()
  const toggleTheme = useToggle(isDark)

  watchEffect(() => {
    const theme = isDark.value ? '#5745c8' : '#ff7449',
      background = isDark.value ? '#282c34' : '#ffffff',
      fontColor = isDark.value ? '#fffff8' : '#555555',
      strongColor = isDark.value ? '#ab3fb2' : '#f24672',
      toolbarBg = isDark.value ? '#282c34' : '#222222',
      bodyBackground = isDark.value ? '#1e2633' : '#f3f5f7'
    document.body.style.setProperty('--theme', theme)
    document.body.style.setProperty('--background', background)
    document.body.style.setProperty('--font-color', fontColor)
    document.body.style.setProperty('--strong-color', strongColor)
    document.body.style.setProperty('--toolbar-bg', toolbarBg)
    document.body.style.setProperty('--body-background', bodyBackground)
  })

  return {
    toggleTheme,
    isDark
  }
}
