<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/Index">
        <img src="../assets/image/logo.png" alt="" class="header-logo" />
      </router-link>
      <router-link to="/Index/Look" tag="p">网红达人</router-link>
      <router-link to="/Index/Show" tag="p">网红T台</router-link>
      <router-link to="/Index/Video" tag="p">视频素材</router-link>
      <input type="text" placeholder="输入推广产品或网红,精确匹配" />
      <i class="el-icon-search"></i>
    </div>
    <ul class="nav-list">
      <!-- <li class="nav-text">KOC入驻</li> -->
      <router-link to="/Channel" tag="li" class="nav-text">KOC入驻</router-link>
      <li class="nav-text">MCN通道</li>
      <router-link to="/Mycenter" tag="li" class="nav-text"
        >个人中心</router-link
      >
      <li>
        <img src="../assets/image/gengduo.png" alt="" class="nav-gengduo" />
      </li>
      <li>
        <i class="el-icon-message-solid nav-xiaoxi"></i>
      </li>
      <li>
        <Login></Login>
      </li>
    </ul>
  </div>
</template>

<script>
import Login from './Header/Login'
export default {
  // 引入组件
  components: {
    Login
  },
  data() {
    // 这里存放数据
    return {
      dialogVisible: false,
      loginMode: true
    }
  },
  // 方法集合
  methods: {},
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
}
</script>

<style lang='less' scoped>
.header {
  width: 100%;
  height: 72px;
  background: #232a34;
  display: flex;
  float: left;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .header-left {
    display: flex;
    float: left;
    line-height: 72px;
    margin-left: 32px;
    img {
      width: 106px;
      height: 33px;
      margin-top: 20px;
    }
    p:hover {
      color: #b9bab8;
    }
    p {
      margin-left: 30px;
      font-size: 18px;
      font-weight: 400;
      color: #ffffff;
      cursor: pointer;
    }
    input {
      width: 537px;
      height: 40px;
      background: #ffffff;
      border-radius: 6px;
      margin: 16px 0 0 30px;
      outline: none;
      padding: 0 13px 0 22px;
    }
    /* 设置了浏览器宽度小于1600px时的样式 */
    @media screen and (max-width: 1680px) {
      input {
        width: 400px;
      }
    }
    @media screen and (max-width: 1440px) {
      input {
        width: 350px;
      }
    }
    @media screen and (max-width: 1366px) {
      input {
        width: 270px;
      }
    }
    @media screen and (max-width: 1280px) {
      input {
        width: 250px;
        font-size: 12px;
      }
    }
    i {
      line-height: 72px;
      font-size: 20px;
      font-weight: 900;
      margin-left: -35px;
    }
  }
  .nav-list {
    display: flex;
    li {
      float: left;
      margin-right: 30px;
      cursor: pointer;
    }
    .nav-text {
      font-size: 18px;
      font-weight: 400;
      color: #ffffff;
      line-height: 72px;
    }
    .nav-text:hover {
      color: #b9bab8;
    }
    .nav-gengduo {
      width: 14px;
      height: 4px;
      margin-top: 36px;
    }
    .nav-xiaoxi {
      font-size: 14px;
      margin-top: 30px;
      color: #f9f9f9;
    }
    .nav-xiaoxi:hover {
      color: #b9bab8;
    }
    .nav-login {
      width: 80px;
      height: 40px;
      margin-top: 16px;
      background-color: #2fb598;
      border: 0;
    }
    .nav-login:hover {
      opacity: 0.8;
    }
  }
}
</style>
