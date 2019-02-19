import Vue from 'vue'
import Vuex from 'vuex'
import AuthStore from './stores/auth_store'
import TabStore from './stores/tab_store'

Vue.use(Vuex)

const store = new Vuex.Store({
  // add store modules here
  modules: {
    AuthStore,
    TabStore
  }
})

export default store
