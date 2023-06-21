import Layout from '@/layout/main.vue'

export default {
  name: 'community-root',
  path: '/community',
  component: Layout,
  children: [
    {
      path: '/community',
      name: 'community',
      component: () => import('@/views/community/community.vue')
    },
    {
      path: '/community/editor',
      name: 'communityEditor',
      component: () => import('@/views/community/views/editor/communityEditor.vue')
    },
    {
      path: '/community/detail',
      name: 'communityDetail',
      component: () => import('@/views/community/views/detail/communityDetail.vue')
    }
  ]
}
