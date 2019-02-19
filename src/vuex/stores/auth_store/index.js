import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

const AuthStore = {
  namespaced: true,
  state: {
    authorization: null,
    username: '',
    userAuthUid: null
  },
  getters,
  mutations,
  actions
}

export default AuthStore
