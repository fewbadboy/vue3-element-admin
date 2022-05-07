import Layout from '@/layout'

const chartRouter = [
  {
    path: '/charts',
    name: 'Charts',
    component: Layout,
    meta: {
      title: 'charts',
      icon: 'chart'
    },
    children: [
      {
        path: 'index',
        name: 'Chart',
        meta: {
          title: 'chart'
        },
        component: () => import('@/views/components/HelloChart.vue')
      }
    ]
  }
]

export default chartRouter
