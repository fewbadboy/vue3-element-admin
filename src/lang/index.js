import { createI18n } from 'vue-i18n'
import Cookie from 'js-cookie'
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-CN'
import enLocale from './en'
import zhLocale from './zh'

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

export function getLanguage() {
  const chooseLanguage = Cookie.get('language')
  if (chooseLanguage) return chooseLanguage

  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh'
}

const i18n = createI18n({
  locale: getLanguage(),
  messages
})

export default i18n

