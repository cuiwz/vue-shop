import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入字体图标
import './assets/fonts/iconfont.css'

// 导入全局样式表
import './assets/css/global.css'

// Vue原型挂载axios
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/' // 配置请求根路径
axios.interceptors.request.use(config => {
  // 为请求头对象，添加 Token 验证的 Authorization 字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 最后必须返回config
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
