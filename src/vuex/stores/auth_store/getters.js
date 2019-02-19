const getters = {
  authToken: state => state.authToken,
  isAuthenticated: state => state.authToken !== null,
  username: state => state.username,
  userAuthUid: state => state.userAuthUid,
  brokerageTemplate: state => state.brokerageTemplate,
  intermodalTemplate: state => state.intermodalTemplate
}

export default getters
