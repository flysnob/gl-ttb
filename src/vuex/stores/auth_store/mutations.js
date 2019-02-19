const mutations = {
  authUser (state, token) {
    state.authToken = token
  },
  clearAuthData (state) {
    state.authToken = null
  },
  setUsername (state, username) {
    state.username = username
  },
  setUserAuthUid (state, authUid) {
    state.userAuthUid = authUid
  },
  setBrokerageTemplate (state, brokerageTemplate) {
    state.brokerageTemplate = brokerageTemplate
  },
  setIntermodalTemplate (state, intermodalTemplate) {
    state.intermodalTemplate = intermodalTemplate
  }
}

export default mutations
