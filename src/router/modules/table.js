import Layout from '@/layout'

const tableRouter = [
  {
    path: '/tables',
    name: 'Tables',
    component: Layout,
    meta: {
      title: 'tables',
      icon: 'table'
    },
    children: [
      {
        path: 'index',
        name: 'Table',
        meta: {
          title: 'table'
        },
        component: () => import('@/views/components/HelloTable.vue')
      }
    ]
  }
]

export default tableRouter
