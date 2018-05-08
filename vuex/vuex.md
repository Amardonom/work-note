vuex的安装配置并且测试：
  在src目录下新建store文件夹。作为vuex的集中管理仓库
  新建test文件夹作为测试文件夹，并且新建文件test.js,以下为test.js参考代码
      const state = {
        count: 1
      }
      export default {state}
  在store文件夹下新建index.js作为模块集中管理,以下问index.js参考代码
      import Vue from 'vue'
      import Vuex from 'vuex'
      import test from './test/test.js'

      Vue.use(Vuex)

      export default new Vuex.Store({
        modules: {
          test
        }
      })
  在main.js里引用，参考代码如下
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
安装vue调试工具
  下载谷歌助手并且搜索安装