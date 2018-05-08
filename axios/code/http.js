import axios from 'axios'

const http = axios.create({
  baseURL: `http://test.czbapp.com/crmdev/docs`,
  timeout: 30000
})

// 设置请求拦截器
http.interceptors.response.use(res => {
  console.log('before request')
})

export default http
