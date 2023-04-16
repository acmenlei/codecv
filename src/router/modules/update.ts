import Layout from '@/layout/main.vue'

export default {
  name: 'update',
  path: '/update',
  component: Layout,
  children: [
    {
      path: '/update/line',
      name: 'updateLine',
      component: () => import('@/views/update/update.vue')
    }
  ]
}
