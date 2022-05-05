import Layout from '@/layout'

const tableRouter = [
  {
    path: '/tables',
    name: 'Tables',
    component: Layout,
    meta: {
      icon: 'table',
      title: 'Tables'
    },
    children: [
      {
        path: 'index',
        name: 'Table',
        meta: {
          title: 'Table'
        },
        component: () => import('@/views/components/HelloTable.vue')
      }
    ]
  }
]

export default tableRouter
