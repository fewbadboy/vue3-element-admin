import Layout from '@/layout'

const componentsRouter = [
  {
    path: '/components',
    name: 'components',
    component: Layout,
    meta: {
      icon: 'component'
    },
    children: [
      {
        path: 'index',
        name: 'Component',
        component: () => import('@/views/components/HelloComponent.vue')
      }
    ]
  }
]

export default componentsRouter
