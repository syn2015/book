import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
//mock生效
import './mock/'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http=axios

new Vue({
  render: h => h(App)
}).$mount('#app')
