import Layout from '@/layout'

const componentsRouter = [
  {
    path: '/components',
    name: 'components',
    component: Layout,
    meta: {
      icon: 'component',
      title: 'Components'
    },
    children: [
      {
        path: 'index',
        name: 'component',
        meta: {
          title: 'Component'
        },
        component: () => import('@/views/components/HelloComponent.vue')
      }
    ]
  }
]

export default componentsRouter
