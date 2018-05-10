// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import http from '@/config/http'
Vue.prototype.$http = http

// 把输出的方法添加到vue的原型上，可以直接引入调用
// 在组件内可以通过this.$http来调用

