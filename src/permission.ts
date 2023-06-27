import router from './router'
import { getLocalStorage } from '@/common/localstorage'
import { TOKEN } from '@/store/modules/user'
import useUserStore from '@/store/modules/user'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

nprogress.configure({ easing: 'ease', speed: 300 })

const whiteList = ['/download']

router.beforeEach((to, from, next) => {
  if (!whiteList.includes(to.path)) {
    nprogress.start()
  }
  const token = getLocalStorage(TOKEN)
  if (['/community/editor'].includes(to.path)) {
    if (!token) {
      const { loginModelToggle } = useUserStore()
      next({ ...from })
      loginModelToggle() // 需要登录
      return
    }
  }
  next()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
