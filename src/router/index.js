import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout'

/**
 * Router Modules
 */
import chartRouter from './modules/charts'
import componentsRouter from './modules/components'
import tableRouter from './modules/table'
/**
 * path: ''                            each root node must start with '/'
 * name: 'route-name'                  the name is used by tagsView title
 * redirect: 'redirect-path'
 * hidden: false                       if set true, item will not show in the sidebar
 * meta: {
 *   roles: ['admin', 'user']          control the page roles, you can set multiple roles
 *   icon: 'svg-name'                  https://element-plus.org/en-US/component/icon.html#icon-collection get SVG content
 *   title: 'title'                    the name show in sidebar
 *   affix: false                      if set true, the tag will affix in the tags-view
 *   noCache: false                    if set true, the page will no be cached in <keep-alive>
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
    hidden: true,
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: Layout,
    hidden: true,
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    // redirect: '/home/view',
    meta: {
      title: 'Home'
    },
    children: [
      {
        path: 'view',
        meta: {
          title: 'View'
        },
        component: () => import('@/views/HomeView.vue'),
        // redirect: '/home/view/wrap',
        children: [
          {
            path: 'wrap',
            meta: {
              title: 'Wrap'
            },
            component: () => import('@/views/HomeWrap.vue'),
            children: [
              {
                path: 'main',
                meta: {
                  title: 'Main'
                },
                component: () => import('@/views/HomeMain.vue')
              }
            ]
          },
          {
            path: '1-4-2',
            meta: {
              title: '1-4-2'
            },
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
    meta: {
      title: 'About'
    },
    children: [
      {
        path: 'index',
        meta: {
          title: 'About'
        },
        component: () => import('@/views/AboutView.vue')
      }
    ]
  }
]

export const asyncRoutes = [
  ...chartRouter,
  ...componentsRouter,
  ...tableRouter,
  {
    path: '/google-link',
    component: Layout,
    children: [
      {
        path: 'https://google.com',
        meta: { title: 'Google Link', icon: 'link' }
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', hidden: true, component: () => import('@/views/not-found') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  },
  routes: constantRoutes
})

export default router
