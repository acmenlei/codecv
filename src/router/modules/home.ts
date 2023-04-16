import Layout from '@/layout/main.vue'

export default {
  name: 'home',
  path: '/home',
  component: Layout,
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue')
    }
  ]
}
