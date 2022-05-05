import Layout from '@/layout'

const chartRouter = [
  {
    path: '/charts',
    name: 'charts',
    component: Layout,
    meta: {
      icon: 'chart',
      title: 'Charts'
    },
    children: [
      {
        path: 'index',
        name: 'chart',
        meta: {
          title: 'Chart'
        },
        component: () => import('@/views/components/HelloChart.vue')
      }
    ]
  }
]

export default chartRouter
