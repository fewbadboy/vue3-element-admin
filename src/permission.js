import router from './router'
// import store from './store'
// import { Message } from 'element-plus'
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
      next()
    }
  } else {
    // has no token
    if (WhiteList.includes(to.path)) {
      // go directly
      next()
    } else {
      next({ path: '/login' })
    }
  }
  next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
