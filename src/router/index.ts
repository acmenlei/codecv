import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"

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
    redirect: '/community'
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



export default router;