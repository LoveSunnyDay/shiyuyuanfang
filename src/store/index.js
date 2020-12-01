import Vue from 'vue'
import Vuex from 'vuex'
import wxLogin from './wxLogin'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    wxLogin
  }
})
