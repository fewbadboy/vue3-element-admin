import { createApp, nextTick } from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'
import VueI18n, { getLanguage } from './lang'
import App from './App.vue'
import router from './router'
import store from './store'

import SvgIcon from '@/components/SvgIcon'

import './icons'
import './permission'
// import { errorLogHandler } from '@/utils/errorLog'

const app = createApp(App)
app.config.errorHandler = (err, instance, info) => {
  console.log(err)
  nextTick(() => {
    store.dispatch('errorLog/addErrorLog', {
      err,
      instance,
      info,
      url: window.location.href
    })
  })
}
// if (enableErrorLog()) {
//   app.config.errorHandler = errorLogHandler
// }

app
  .use(router)
  .use(store)
  .use(ElementPlus, {
    size: Cookies.get('size') || 'default',
    locale: getLanguage() === 'zh' ? elementZhLocale : elementEnLocale
  })
  .use(VueI18n)
  .component('svg-icon', SvgIcon)
  .mount('#app')
