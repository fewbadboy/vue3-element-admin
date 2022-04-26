import Layout from '@/layout'

const tableRouter = [
  {
    path: '/tables',
    name: 'tables',
    component: Layout,
    meta: {
      icon: 'table'
    },
    children: [
      {
        path: 'index',
        name: 'Table',
        component: () => import('@/views/components/HelloTable.vue')
      }
    ]
  }
]

export default tableRouter
