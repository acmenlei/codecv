import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"
import nprogress from "nprogress";
import "nprogress/nprogress.css"

nprogress.configure({ easing: 'ease', speed: 300 });
const whiteList = ['/download']

/* 统一导入路由 */
const routeFiles = import.meta.globEager('./modules/*')
export const routeConfiguras: RouteRecordRaw[] = []

Object.keys(routeFiles).forEach(routeModule => {
  (routeFiles[routeModule] as any).default &&
    routeConfiguras.push((routeFiles[routeModule] as any).default)
})

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/download',
    name: 'download',
    component: () => import("@/views/download/index.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("@/views/404/index.vue")
  }
]

const router = createRouter({
  routes: routeConfiguras.concat(routes),
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (!whiteList.includes(to.path)) {
    nprogress.start()
  }
})
router.afterEach(() => {
  nprogress.done()
})

export default router;