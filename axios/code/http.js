import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

const http = axios.create({
  baseURL: `http://test.czbapp.com/crmdev/gm/user`,
  timeout: 30000
})
// 设置请求拦截器
http.interceptors.request.use(config => {
  // 判断请求方法，如果是post，delete，put的话序列化请求参数
  const reqMethod = config.method
  if (reqMethod === 'post' || reqMethod === 'put' || reqMethod === 'delete') {
    config.data = qs.stringify(config.data)
  }
  // 如果检测到本地存储有token，那就在请求头上加token
  if (window.localStorage.userToken) {
    http.defaults.headers.common['f'] = window.localStorage.userToken
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 设置响应拦截器
http.interceptors.response.use(res => {
  // 当请求成功但是没有返回参数的时候
  if (res.data && res.data.code !== 200) {
    return Promise.reject(res.data.code)
  }
  return res
}, error => {
  Vue.prototype.$Message.error(error.response.data.msg)
  return Promise.reject(error)
})

export default http
