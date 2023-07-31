import useUserStore from '@/store/modules/user'
import { useDark, useToggle } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

export function isLogin() {
  const { loginState } = useUserStore()
  return loginState.logined
}

export function useThemeConfig() {
  const isDark = useDark()
  const toggleTheme = useToggle(isDark)
  // #3f9eff
  watchEffect(() => {
    const theme = isDark.value ? '#5745c8' : '#ff7449',
      background = isDark.value ? '#282c34' : '#ffffff',
      fontColor = isDark.value ? '#eeeeee' : '#1e293b',
      strongColor = isDark.value ? '#ab3fb2' : '#f24672',
      toolbarBg = isDark.value ? '#282c34' : '#222222',
      bodyBackground = isDark.value ? '#1e2633' : '#f3f5f7',
      writableFontColor = isDark.value ? '#d1d1d1' : '#545a69',
      linearBGC = isDark.value ? background : '#fbe9db'

    document.body.style.setProperty('--theme', theme)
    document.body.style.setProperty('--background', background)
    document.body.style.setProperty('--font-color', fontColor)
    document.body.style.setProperty('--strong-color', strongColor)
    document.body.style.setProperty('--toolbar-bg', toolbarBg)
    document.body.style.setProperty('--body-background', bodyBackground)
    document.body.style.setProperty('--el-color-primary', theme)
    document.body.style.setProperty('--writable-font-color', writableFontColor)
    document.body.style.setProperty('--linear-background', linearBGC)
  })

  return {
    toggleTheme,
    isDark
  }
}

export function useSwitch(initState?: boolean) {
  const open = ref(initState ?? false)

  function toggle() {
    open.value = !open.value
  }
  function setTure() {
    open.value = true
  }
  function setFalse() {
    open.value = false
  }
  return {
    open,
    toggle,
    setTure,
    setFalse
  }
}
