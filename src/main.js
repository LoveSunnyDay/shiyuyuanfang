import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import './assets/css/resrt.css' // 引入resrt.css
import './assets/iconfont/iconfont.css' // 引入阿里字体图标

// import Header from './components/Header'
// Vue.use(Header)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
