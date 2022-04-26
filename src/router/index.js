import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout'

/**
 * path: ''                            each root node must start with '/'
 * name: 'route-name'
 * redirect: 'redirect-path'
 * meta: {
 *   roles: ['admin', 'user']          control the page roles, you can set multiple roles
 *   icon: 'svg-name'                  https://element-plus.org/en-US/component/icon.html#icon-collection get SVG content
 *   affix: false                      if set true, the tag will affix in the tags-view
 * }
 * children: [
 *  {
 *    path: ''                         relative path
 *    ...
 *  }
 * ]
 */

/**
 * constantRoutes
 * base page that not need permission
 * all roles can be access
 */
export const constantRoutes = [
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
    // redirect: '/home/view',
    children: [
      {
        path: 'view',
        component: () => import('@/views/HomeView.vue'),
        // redirect: '/home/view/wrap',
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
  }
]

export const asyncRouters = [

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/not-found') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  },
  constantRoutes
})

export default router
