import axios from 'axios'
import store from '@/store'
import { ElMessageBox, ElMessage } from 'element-plus'
import { getToken } from '@/utils/auth'

const server = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000
})

// request interceptor
server.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      config.headers['User-Token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
server.interceptors.response.use(
  /**
   * {
   *    // is the response that was provided by the server
   *    data: {},
   *    // is the HTTP status code from the server response
   *    status: 200,
   *    // is the HTTP status message from the server response
   *    statusText: 'OK'
   *    // is the HTTP headers that the server responded with All header names are lower cased and can be accessed using the bracket notation
   *    headers: {},
   *    // is the config that was provided to `axios` for the request
   *    config: {},
   *    // is the request that generated this response
   *    request: {},
   * }
   */
  response => {
    const { data, data: { code, message }} = response
    if (code !== 200) {
      ElMessage({
        type: 'error',
        message
      })
      // Token expired
      if (code === '512') {
        ElMessageBox.confirm({
          title: 'Confirm logout',
          message: 'You have been logged out, you can cancel to stay on this page',
          type: 'warning',
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(message || 'Error'))
    } else {
      return data
    }
  },
  error => {
    ElMessage({
      type: 'error',
      message: error.message
    })
    return Promise.reject(error)
  }
)

export default server
