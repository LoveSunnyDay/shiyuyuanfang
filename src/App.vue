/* eslint-disable no-constant-condition */
<template>
  <div id="app">
    <!-- <Header v-if="headerShow"></Header> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
// import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    Footer
    // Header
  },
  data() {
    return {
      // headerShow: false
    }
  }
  // watch: {
  //   $route(to, from) {
  //     // eslint-disable-next-line eqeqeq
  //     if (this.$route.path == '/index' || this.$route.path == '/about') {
  //       this.headerShow = false
  //     } else {
  //       this.headerShow = true
  //     }
  //   }
  // }
}
</script>

<style lang="less" scoped>
</style>
