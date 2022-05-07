import Layout from '@/layout'

const componentsRouter = [
  {
    path: '/components',
    name: 'Components',
    component: Layout,
    meta: {
      title: 'components',
      icon: 'component'
    },
    children: [
      {
        path: 'index',
        name: 'Component',
        meta: {
          title: 'component'
        },
        component: () => import('@/views/components/HelloComponent.vue')
      }
    ]
  }
]

export default componentsRouter
