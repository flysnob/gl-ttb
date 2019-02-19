const getters = {
  allTabs: state => state.tabs,
  tabIndex: state => state.tabIndex,
  history: state => state.history,
  tabsWidth: state => state.tabsWidth,
  startPoint: state => state.startPoint,
  numberOfTabs: state => Math.floor(state.tabsWidth / 170 ) - 1
}

export default getters
