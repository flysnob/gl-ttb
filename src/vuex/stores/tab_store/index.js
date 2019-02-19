import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

const TabStore = {
  namespaced: true,
  state: {
    tabs: [
      {
        type: 'ActiveShipmentsTab',
        title: 'Active Shipments',
        filters: {}
      }
    ],
    tabIndex: 0,
    history: [],
    tabsWidth: 0,
    startPoint: 0
  },
  mutations,
  getters,
  actions
}

export default TabStore
