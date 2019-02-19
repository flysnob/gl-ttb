import Vue from 'vue/dist/vue.esm'

const mutations = {
  removeTab(state, payload) {
    let closedTab = state.tabs.splice(payload.index, 1)
    if (state.startPoint + payload.numberOfTabs > state.tabs.length && state.startPoint > 0) {
      state.startPoint = state.tabs.length - payload.numberOfTabs
    }
  },
  setTabIndex(state, payload) {
    state.tabIndex = payload.newIndex
    if (state.startPoint + payload.numberOfTabs < state.tabIndex) {
      state.startPoint = state.tabIndex - payload.numberOfTabs + 1
    }
  },
  addCreateTab(state) {
    state.tabs.push({
      type: 'CreateTab',
      title: 'New Tab'
    })
  },
  addActiveShipmentsTab(state, payload) {
    const timestamp = Date.now()
    state.tabs.push({
      type: 'ActiveShipmentsTab',
      title: 'Active Shipments',
      filters: payload.filters,
      tabId: timestamp
    })
  },
  addSearchResultsTab(state, payload) {
    const timestamp = Date.now()
    state.tabs.push({
      type: 'ActiveShipmentsTab',
      title: 'Search Results',
      filters: payload.filters,
      tabId: timestamp,
      include_released: true,
      allowScroll: false
    })
  },
  addSmartSearchResultsTab(state, payload) {
    const timestamp = Date.now()
    state.tabs.push({
      type: 'ActiveShipmentsTab',
      title: 'Smart Search',
      filters: payload.filters,
      tabId: timestamp,
      include_released: true,
      allowScroll: false
    })
  },
  addHistoricalRatesTab(state, payload) {
    const timestamp = Date.now()
    state.tabs.push({
      type: 'ActiveShipmentsTab',
      title: 'Historical Rates',
      filters: payload.filters,
      tabId: timestamp,
      include_released: true,
      allowScroll: false
    })
  },
  addShipmentTab(state, payload) {
    state.tabs.push({
      type: 'ShipmentTab',
      title: `Pro #${payload.pro}`,
      pro: payload.pro
    })
  },
  addNewShipmentTab(state) {
    state.tabs.push({
      type: 'NewShipmentTab',
      title: 'New Shipment'
    })
  },
  addMapTab(state, payload) {
    state.tabs.push({
      type: 'MapTab',
      title: 'Map',
      pros: payload.pros
    })
  },
  addTemplateLibraryTab(state, payload) {
    state.tabs.push({
      type: 'TemplateLibraryTab',
      title: 'Template Library'
    })
  },
  addBatchManagerTab(state, payload) {
    state.tabs.push({
      type: 'BatchManagerTab',
      title: 'Batch Manager',
      pros: payload.pros,
      batchInfo: payload.batchInfo
    })
  },
  incrementTabIndex(state, number) {
    state.tabIndex += number
  },
  removeHistory(state, index) {
    state.history.splice(index, 1)
  },
  reopenTab(state, payload) {
    state.tabs.push(state.history.splice(payload.index, 1)[0])
    if (state.tabs.length >= state.startPoint + payload.numberOfTabs) {
      state.startPoint = state.tabs.length - payload.numberOfTabs
    }
  },
  setTabsWidth(state, width) {
    state.tabsWidth = width
  },
  setStartPoint(state, point) {
    state.startPoint = point
  },
  setTabHistory(state, tabHistory) {
    state.history = tabHistory
  },
  addToHistory(state, closedTab) {
    state.history.push(closedTab)
    if (state.history.length > 6) { state.history.shift() }
  },
  editShipmentTab(state, payload) {
    Vue.set(state.tabs[payload.index], 'pro', payload.pro)
    Vue.set(state.tabs[payload.index], 'title', `Pro #${payload.pro}`)
  },
  addBatchIdToBatchTab(state, payload) {
    Vue.set(state.tabs[payload.index], 'batchId', payload.batchId)
  }
}

export default mutations
