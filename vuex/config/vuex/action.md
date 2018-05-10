// 写法为modules的模块写法
  1 概念
      mutations为同步改变状态，action为异步
        Action 提交的是 mutation，而不是直接变更状态。
        Action 可以包含任意异步操作。
        具体提交的实现
          Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
      示例代码
        const state = {

        }
        const mutation = {

        }
        const action = {
           // 登陆事件
          [type.USER_LOGIN] ({commit}, data) {
            // 这里是一个action函数
            // 第一个参数可以写context 意思是执行上下文，其代表了一个跟store实例有相同功能的对象
            // 通常情况下可以通过es6的解析购值，像示例这样{commit} 可以直接 commit(type, Payload)
          }
        }
        export default {state, mutation, action}

      这样在vue调试工具里就可以看到state的数据
  2 访问
    1 this.$store.dispatch(type, Payload)
    2 辅助函数
      import { mapActions } from 'vuex'
      methods: {
        ...mapActions([
          'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

          // `mapActions` 也支持载荷：
          'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
        ]),
        ...mapActions({
          add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
        })
      }

    