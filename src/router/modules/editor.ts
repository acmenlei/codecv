import Layout from '@/layout/main.vue'

export default {
  name: 'editor',
  path: '/editor',
  component: Layout,
  children: [
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/editor/editor.vue')
    }
  ]
}
