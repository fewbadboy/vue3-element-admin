import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'
import VueI18n, { getLanguage } from './lang'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale: getLanguage() === 'zh' ? elementZhLocale : elementEnLocale })
  .use(VueI18n)
  .mount('#app')
