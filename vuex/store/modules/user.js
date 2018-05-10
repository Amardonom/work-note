import http from '../../config/http'
import API from '../../config/api'
import * as type from '../mutations-store'
import EncryPwd from '../../config/encryPwd'
const state = {
  // 是否登陆
  isAuth: false,
  userInfo: {
    name: 'yyf',
    age: 18,
    job: 'web'
  }
}
const mutations = {
  // 改变登陆状态
  [type.USER_LOGIN] (state) {
    state.isAuth = true
  }
}
const actions = {
  // 登陆事件
  [type.USER_LOGIN] ({commit}, data) {
    // 登陆信息
    let userInfo = {
      user: data.user,
      password: EncryPwd(data.password),
      vsf: 'web'
    }
    let url = API.user.login
    return new Promise((resolve, reject) => {
      http.post(url, userInfo).then(res => {
        if (res.data && res.data.code === 200) {
          commit(type.USER_LOGIN)
          window.localStorage.setItem('userToken', res.data.data.token)
          resolve(res.data)
        }
      })
    })
  }
}
export default {state, mutations, actions}
