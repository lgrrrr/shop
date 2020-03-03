import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import "@/assets/css/style.css"

Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
