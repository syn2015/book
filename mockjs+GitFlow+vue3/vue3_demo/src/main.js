import Vue from 'vue'
import App from './App.vue'
import { plugin } from 'vue-function-api'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './mock/'
import  * as filters from './filters/index.js'
Vue.config.productionTip = false

Vue.use(plugin)
Vue.use(Element)
//循环注册过滤器
Object.keys(filters).forEach(key=>{
  
  Vue.filter(key,filters[key])
})
new Vue({
  render: h => h(App)
}).$mount('#app')
