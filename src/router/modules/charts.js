import Layout from '@/layout'

const chartRouter = [
  {
    path: '/charts',
    name: 'Charts',
    component: Layout,
    meta: {
      icon: 'chart',
      title: 'Charts'
    },
    children: [
      {
        path: 'index',
        name: 'Chart',
        meta: {
          title: 'Chart'
        },
        component: () => import('@/views/components/HelloChart.vue')
      }
    ]
  }
]

export default chartRouter
