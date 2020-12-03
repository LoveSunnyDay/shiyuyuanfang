// import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    token: null,
    profile: null,
    user: null,
    loginStatus: false
  },
  mutations: {
    setUserInfo(state, newData) {
      const { token, profile, user } = newData
      state.token = token
      state.profile = profile
      state.user = user
      state.loginStatus = true
    },
    wxLoginFailed(state, newData) {
      state.loginStatus = false
    },
    setIsLogin(state, newData) {
      state.loginStatus = newData
    }
  },
  actions: {

  }

}
