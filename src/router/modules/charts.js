import Layout from '@/layout'

const chartRouter = [
  {
    path: '/charts',
    name: 'charts',
    component: Layout,
    meta: {
      icon: 'chart'
    },
    children: [
      {
        path: 'index',
        name: 'Chart',
        component: () => import('@/views/components/HelloChart.vue')
      }
    ]
  }
]

export default chartRouter
