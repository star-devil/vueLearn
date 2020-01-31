import Vue from 'vue'
import App from './App.vue'
import config from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false
let store = new Vuex.Store(config)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
