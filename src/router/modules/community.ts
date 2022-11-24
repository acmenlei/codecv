import Layout from "@/layout/main.vue"

export default {
  name: 'community-root',
  path: '/community',
  component: Layout,
  children: [
    {
      path: "/community",
      name: 'community',
      component: () => import("@/views/community/community.vue")
    }
  ]
}