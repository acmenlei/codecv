import Layout from '@/layout/main.vue'

export default {
  name: 'syntax',
  path: '/syntax',
  component: Layout,
  children: [
    {
      path: '/syntax/helper',
      name: 'syntaxHelper',
      component: () => import('@/views/syntax/syntax.vue')
    }
  ]
}
