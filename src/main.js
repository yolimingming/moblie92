import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// rem 基准值适配
import 'amfe-flexible/index.min.js'

// 导入vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 导入全局css样式控制文件 (在vant的养殖文件之后做引入  ----> 第10行之后)
import '@/assets/css/global.less' // 引入全局的自定义样式  因为要覆盖vant的样式

// 一次性把所以的组件注册好
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
