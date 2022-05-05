import Layout from '@/layout'

const componentsRouter = [
  {
    path: '/components',
    name: 'Components',
    component: Layout,
    meta: {
      icon: 'component',
      title: 'Components'
    },
    children: [
      {
        path: 'index',
        name: 'Component',
        meta: {
          title: 'Component'
        },
        component: () => import('@/views/components/HelloComponent.vue')
      }
    ]
  }
]

export default componentsRouter
