import router from './router'
import store from './store'
// import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

// NProgress.configure({ showSpinner: false }) // loading

const WhiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // determine whether user has logged in
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // determine whether the user has obtained permission roles
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // get user roles
          const { roles } = await store.dispatch('user/getInfo')

          // genarate accessible routes based on roles
          const generateRoutes = await store.dispatch('permission/generateRoutes', roles)
          console.log(generateRoutes)
          generateRoutes.forEach(route => {
            router.addRoute(route)
          })

          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          // ElMessage.error('Oops, token expired!')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    // has no token
    if (WhiteList.includes(to.path)) {
      // go directly
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path }})
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
