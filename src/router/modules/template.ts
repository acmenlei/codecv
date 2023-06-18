import Layout from '@/layout/main.vue'

export default {
  name: 'template',
  path: '/template',
  component: Layout,
  children: [
    {
      path: '/template',
      name: 'template',
      component: () => import('@/views/template/template.vue')
    }
  ]
}
