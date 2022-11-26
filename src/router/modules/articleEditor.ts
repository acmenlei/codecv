import Layout from "@/layout/main.vue"

export default {
  name: 'article',
  path: '/articleEditor',
  component: Layout,
  children: [
    {
      path: "/articleEditor",
      name: 'articleEditor',
      component: () => import("@/views/articleEditor/articleEditor.vue")
    }
  ]
}