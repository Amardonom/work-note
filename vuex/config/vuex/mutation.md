// 写法为modules的模块写法
  1 概念
      更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
      Vuex 中的 mutation 非常类似于事件：
        每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
        这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
        下面示例中的type为[type.USER_LOGIN]，要对这个type提交需要回调函数
      示例代码
        const state = {
          .......
          // 是否登陆
          isAuth: false,
          userInfo: {
            name: 'yyf',
            age: 18,
            job: 'web'
          }
        }
        const mutation = {
          // 改变登陆状态
          [type.USER_LOGIN] (state) {
            state.isAuth = true
          }
        }
        const action = {

        }
        export default {state, mutation, action}

      这样在vue调试工具里就可以看到state的数据
  2 访问
    1  通过this.$store.commit(type,data)
      其实是下面写法的简写
        this.$store.commit({
          type: type,
          Payload: data
        })
        store.commit(type, data)接受参数
        store.commit({type: type, Payload: data})接受对象
    2 辅助函数 import { mapMutations } from 'vuex'(一般不用)
      methods: {
        ...mapMutations([
          'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

          // `mapMutations` 也支持载荷：
          'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
        ]),
        ...mapMutations({
          add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
        })
      }
    3 命名通常为常量