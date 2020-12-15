import Vue from 'vue'
import axios from 'axios'
import store from '../store'
const config = {
  baseURL: 'https://api.hiifire.com/v1' //'https://api.hiifire.com/v1'
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}
const _axios = axios.create(config)

_axios.interceptors.request.use(
  config => {
    // Do something before request is sent

    return config
  },
  error =>
  // Do something with request error

    Promise.reject(error)
)
// Add a response interceptor
_axios.interceptors.response.use(
  response => {
    // Do something with response data
    console.log('response.data', response.data)
    return response.data
  },
  error => {
    // Do something with response error
    if (!error.response) {
      Vue.prototype.$message('网络错误！')
      return
    }
    const status = error?.response?.status
    if (status === 400) {
      Vue.prototype.$message('客户端错误！')
    }
    if (status === 401) {
      store.commit('login/setShowLoginDiaolog', true)
    }
    if (status === 500) {
      Vue.prototype.$message('服务器异常，请稍后重试！')
    }
    return Promise.resolve(error)
  }
)
Plugin.install = (Vue, options) => {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios
      }
    },
    $axios: {
      get() {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)
export default Plugin
