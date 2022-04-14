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
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/HomeView.vue')
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
