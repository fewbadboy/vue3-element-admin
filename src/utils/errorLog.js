import { nextTick } from 'vue'
import store from '@/store'
import { errorLog } from '@/settings'
import { isString, isArray } from '@/utils/validate'

export function enableErrorLog() {
  const env = process.env.NODE_ENV
  if (isString(errorLog)) {
    return env === errorLog
  }
  if (isArray(errorLog)) {
    return errorLog.includes(env)
  }
  return false
}

/**
 * acpture errors from following sources:
 * Component renders
 * Event handlers
 * Lifecycle hooks
 * setup() function
 * Watchers
 * Custom dorective hooks
 * Transition hooks
 */
export function errorLogHandler(err, instance, info) {
  nextTick(() => {
    store.dispatch('errorLog/addErrorLog', {
      err,
      instance,
      info
    })
  })
}
