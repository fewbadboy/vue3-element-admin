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
 * name: 'route-name'                  the name is used by <keep-alive>
 * redirect: 'redirect-path'
 * hidden: false                       if set true, item will not show in the sidebar
 * meta: {
 *   roles: ['admin', 'user']          control the page roles, you can set multiple roles
 *   title: 'title'                    the name show in sidebar and breadcrumb
 *   icon: 'svg-name'                  https://element-plus.org/en-US/component/icon.html#icon-collection get SVG content
 *   affix: false                      if set true, the tag will affix in the tags-view
 *   noCache: false                    if set true, the page will no be cached in <keep-alive>
 *   external: false                   if set true, the route will hidden in <header-search> component
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
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: ':path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
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
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        },
        component: () => import('@/views/dashboard')
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    redirect: '/home/view',
    meta: {
      title: 'home',
      icon: 'component'
    },
    children: [
      {
        path: 'view',
        name: 'View',
        meta: {
          title: 'view'
        },
        component: () => import('@/views/HomeView.vue'),
        redirect: '/home/view/wrap',
        children: [
          {
            path: 'wrap',
            name: 'Wrap',
            meta: {
              title: 'wrap'
            },
            component: () => import('@/views/HomeWrap.vue'),
            redirect: '/home/view/wrap/main',
            children: [
              {
                path: 'main',
                name: 'Main',
                meta: {
                  title: 'main'
                },
                component: () => import('@/views/HomeMain.vue')
              }
            ]
          },
          {
            path: 'menu2',
            name: 'Menu2',
            meta: {
              title: 'menu2'
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
      title: 'about',
      icon: 'component'
    },
    children: [
      {
        path: 'index',
        name: 'About',
        meta: {
          title: 'about'
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
    redirect: '/error/401',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: 'page401' }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: 'page404' }
      }
    ]
  },
  {
    path: '/google-link',
    component: Layout,
    meta: {
      external: true
    },
    children: [
      {
        path: 'https://google.com',
        meta: { title: 'externalLink', icon: 'link' }
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
