// import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    showLoginDiaolog: false
  },
  mutations: {
    setShowLoginDiaolog(state, newData) {
      state.showLoginDiaolog = newData
    }
  }

}
