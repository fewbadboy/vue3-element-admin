import { createApp } from 'vue'
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

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, {
    size: Cookies.get('size') || 'medium',
    locale: getLanguage() === 'zh' ? elementZhLocale : elementEnLocale
  })
  .use(VueI18n)
  .component('svg-icon', SvgIcon)
  .mount('#app')
