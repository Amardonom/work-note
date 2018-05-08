axios是的本质是一个基于promise实现的封装额度ajax库，其返回的是一个promise对象,面向浏览器跟node.js
    浏览器端发起XMLHttpRequests请求
    node端发起http请求
    支持Promise API
    拦截请求和返回
    转化请求和返回（数据）
    取消请求
    自动转化json数据
    客户端支持抵御XSRF（跨站请求伪造）

  安装
    yarn add axios
    npm i axios -s  生产依赖
  简单示例
    axios.get(url).then
    axios.post(url,{req}).then
    axios.request(config)
    axios.get(url[,config])
    axios.delete(url[,config])
    axios.head(url[,config])
    axios.options(url[,config])
    axios.post(url[,data[,config]])
    axios.put(url[,data[,config]])
axios.patch(url[,data[,config]])
    由于axios基于promise，所以支持promise的所有方法，包括all
      axios.all(iterable)
      axios.spread(callback)
  在vue中的使用
    在src目录的config目录下新建http.js作为axios的配置文件,然后在main.js里引用，添加到原型
      个人做法，一般来说会新建一个axios。
        以下为http.js的参考代码
          //引入axios
          import axios from 'axios'
          //创建一个自定义的
          const http = axios.create({
            //some config 具体配置可参考./config/config.md
            baseUrl: ``,
            timeouf: 30000,
          })
          //这里可以设置请求拦截器跟响应拦截器
          //添加一个请求拦截器
            axios.interceptors.request.use(function(config){
                //在请求发送之前做一些事
                return config;
            },function(error){
                //当出现请求错误是做一些事
                return Promise.reject(error);
            });

            //添加一个返回拦截器
            axios.interceptors.response.use(function(response){
                //对返回的数据进行一些处理
                return response;
            },function(error){
                //对返回的错误进行一些处理
                return Promise.reject(error);
            });
    修改默认配置的方法
      //全局
        axios.defaults.baseURL = 'https://api.example.com';
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
      //自定义
        //当创建一个实例时进行默认设置
        var instance = axios.create({
            baseURL:'https://api.example.com'
        });

        //在实例创建之后改变默认值
        instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    配置项的优先级 默认< default< 请求内
    移除拦截器
      var myInterceptor = axios.interceptors.request.use(function(){/*...*/});
      axios.interceptors.rquest.eject(myInterceptor);
    自定义错误状态码
      validateStatus:function(status){
          return status < 500;//当返回码小于等于500时视为错误
      }