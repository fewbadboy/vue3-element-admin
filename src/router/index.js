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
    path: '/401',
    hidden: true,
    component: () => import('@/views/error-page/401')
  },
  {
    path: '/404',
    hidden: true,
    component: () => import('@/views/error-page/404')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          icon: 'dashboard'
        },
        component: () => import('@/views/dashboard')
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    // redirect: '/home/view',
    meta: {
      title: 'Home',
      icon: 'component'
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
    name: 'About',
    component: Layout,
    redirect: '/about/index',
    meta: {
      title: 'About',
      icon: 'component'
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
    path: '/error',
    name: 'ErrorPages',
    component: Layout,
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401' }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404' }
      }
    ]
  },
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
  { path: '/:pathMatch(.*)*', hidden: true, redirect: '/404' }
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
