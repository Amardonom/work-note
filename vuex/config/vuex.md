vuex的安装配置并且测试：
  1 安装vue调试工具
    下载谷歌助手并且搜索安装
  在src目录下新建store文件夹。作为vuex的集中管理仓库
  2 通过Vuex.Store()生成
    简单用法:
      export default new Vuex.Store({
        state: {
          count: 0
        },
        mutations: {

        }
      })
  3 在vue项目中的使用
    1 新建test文件夹作为测试文件夹，并且新建文件test.js,以下为test.js参考代码
        const state = {
          count: 1
        }
        export default {state}
    2 在store文件夹下新建index.js作为模块集中管理,以下问index.js参考代码
        import Vue from 'vue'
        import Vuex from 'vuex'
        import test from './test/test.js'

        Vue.use(Vuex)

        export default new Vuex.Store({
          modules: {
            test
          }
        })
    3 在main.js里引用，参考代码如下
        import Vue from 'vue'
        import App from './App'
        import router from './router'
        import iview from 'iview'
        import store from './store'

        Vue.use(iview)

        Vue.config.productionTip = false

        /* eslint-disable no-new */
        new Vue({
          el: '#app',
          router,
          store,
          components: { App },
          template: '<App/>'
        })