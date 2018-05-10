// 写法为modules的模块写法
  1 概念
      在很多项目中需要共同维护使用一组数据，可以把这组数据放在vuex的state下
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

        }
        const action = {

        }
        export default {state, mutation, action}

      这样在vue调试工具里就可以看到state的数据
  2 访问
    1  通过this.$store.state.count
    2 辅助函数 import { mapState } from 'vuex'(一般不用)