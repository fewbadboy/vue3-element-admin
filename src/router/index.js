import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    redirect: '/home/view',
    children: [
      {
        path: 'view',
        component: () => import('@/views/HomeView.vue'),
        redirect: '/home/view/wrap',
        children: [
          {
            path: 'wrap',
            component: () => import('@/views/HomeWrap.vue'),
            children: [
              {
                path: 'main',
                component: () => import('@/views/HomeMain.vue')
              }
            ]
          },
          {
            path: '1-4-2',
            component: () => import('@/views/HomeWrap.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/AboutView.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/not-found') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
