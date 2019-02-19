import Vue from 'vue'
import axios from 'axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './vuex'
import './registerServiceWorker'
import './plugins/vuelidate'
import './plugins/vue2-filters'
import { version } from '../package.json'
console.log(`App version: ${version}`)
console.log(store)
axios.defaults.headers.common['Accept'] = 'application/json'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
