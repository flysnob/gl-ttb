import Vue from 'vue/dist/vue.esm'
import axios from 'axios'

const actions = {
  removeTab({ commit, getters, rootGetters }, index) {
    return new Promise((resolve, reject) => {
      const payload = { index, numberOfTabs: getters.numberOfTabs}
      const headers = { 'X-AUTH-TOKEN': rootGetters['AuthStore/authToken'] }
      const userAuthUid = rootGetters['AuthStore/userAuthUid']
      const tabToDelete = getters.allTabs[index]
      if (shouldCreateHistory(tabToDelete)) {
        axiosBackend.post(`/tab_records/${userAuthUid}`, { tab: tabToDelete }, { headers })
          .then(res => {
            tabToDelete.id = res.data.id
            commit('addToHistory', tabToDelete)
          }).catch(err => {
            console.log(err)
          })
        }
      commit('removeTab', payload)
      resolve()
    })
  },
  setTabIndex({ commit, getters }, newIndex) {
    return new Promise((resolve, reject) => {
      const payload = { newIndex, numberOfTabs: getters.numberOfTabs }
      commit('setTabIndex', payload)
      resolve()
    })
  },
  addTab({ dispatch, commit, state }, payload) {
    return new Promise((resolve, reject) => {
      commit(`add${payload.type}`, payload)
      Vue.prototype.$nextTick(() => {
        dispatch('setTabIndex', state.tabs.length - 1)
      })
      resolve()
    })
  },
  incrementTabIndex({ commit }, number) {
    commit('incrementTabIndex', number)
  },
  editShipmentTab({ commit }, payload) {
    commit('editShipmentTab', payload)
  },
  removeHistory({ commit, rootGetters }, payload) {
    let headers = { 'X-AUTH-TOKEN': rootGetters['AuthStore/authToken'] }
    commit('removeHistory', payload.index)
    axiosBackend.delete(`/tab_records/${payload.tabId}`, { headers })
  },
  reopenTab({ commit, getters, rootGetters }, payload) {
    let tabPayload = { index: payload.index, numberOfTabs: getters.numberOfTabs}
    let headers = { 'X-AUTH-TOKEN': rootGetters['AuthStore/authToken'] }
    return new Promise((resolve, reject) => {
      commit('reopenTab', tabPayload)
      axiosBackend.delete(`/tab_records/${payload.tabId}`, { headers })
      resolve()
    })
  },
  setTabsWidth({ commit }, width) {
    commit('setTabsWidth', width)
  },
  setStartPoint({ commit }, point) {
    commit('setStartPoint', point)
  },
  setTabHistory({ commit }, tabRecords) {
    const parsedHistory = tabRecords.map((tabRecord) => {
      const tabHistory = JSON.parse(tabRecord.tab)
      tabHistory.id = tabRecord.id
      return tabHistory
    })

    commit('setTabHistory', parsedHistory)
  },
  addBatchIdToBatchTab({ commit }, payload) {
    console.log('action');
    commit('addBatchIdToBatchTab', payload)
  }
}

export default actions
