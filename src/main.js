import 'babel-polyfill'// 适配ie
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/axios.js'
import './assets/css/resrt.css' // 引入resrt.css
import './assets/iconfont/iconfont.css' // 引入阿里字体图标
import Es6Promise from 'es6-promise' // 适配ie

require('es6-promise').polyfill()

Es6Promise.polyfill()

// 路由跳转后，移动到最上方
router.afterEach((to, from, next) => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
