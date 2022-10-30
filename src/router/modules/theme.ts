import Layout from "@/layout/main.vue"

export default {
  name: 'theme',
  path: '/theme',
  component: Layout,
  children: [
    {
      path: "/theme",
      name: 'theme',
      component: () => import("@/views/theme/index.vue")
    }
  ]
}