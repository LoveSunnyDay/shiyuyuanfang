<template>
  <div>
    <div class="header-index">
      <Header v-show="headerShow"></Header>
      <div class="top-nav">
        <img src="../assets/image/logo.png" alt="" class="logo" />
        <ul class="nav-list">
          <li class="nav-text nav-text-KOC">
            <router-link to="/Channel" target="_blank" class="nav-text">
              KOC入驻
            </router-link>
          </li>
          <li class="nav-text nav-text-MCN">
            <router-link to="/ChannelMCN" target="_blank" class="nav-text">
              MCN通道
            </router-link>
          </li>
          <!-- <router-link to="/Mycenter" tag="li" class="nav-text">
            个人中心
          </router-link> -->
          <!-- <li>
            <img src="../assets/image/gengduo.png" alt="" class="nav-gengduo" />
          </li> -->
          <li>
            <i class="el-icon-message-solid nav-xiaoxi"></i>
          </li>
          <li>
            <Login></Login>
          </li>
        </ul>
      </div>
      <HeaderMain></HeaderMain>
    </div>
    <div class="content">
      <ul class="content-nav">
        <li>
          <router-link to="/Index/Look" active-class="content-nav-active">
            找网红达人
          </router-link>
        </li>
        <li>
          <router-link to="/Index/Show" active-class="content-nav-active">
            网红T台
          </router-link>
        </li>
        <li>
          <router-link to="/Index/Video" active-class="content-nav-active">
            视频素材
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeaderMain from '@/components/Index/HeaderMain.vue'
import Login from '@/components/Header/Login'
export default {
  components: {
    Header,
    HeaderMain,
    Login
  },
  data() {
    return {
      // input: ''
      dialogVisible: false,
      loginMode: true,
      headerShow: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    loginModeButton() {
      return (this.loginMode = !this.loginMode)
    },
    // 滚动监听，当scroll大于300，header组件显示，小于300则隐藏
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 300) {
        this.headerShow = true
      } else if (scrollTop < 300) {
        this.headerShow = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header-index {
  width: 100%;
  height: 504px;
  .top-nav {
    display: flex;
    justify-content: space-between;
    .logo {
      margin: 10px 0 0 32px;
      width: 186px;
      height: 64px;
      cursor: pointer;
    }
    .nav-list {
      display: flex;
      li {
        margin-right: 32px;
      }
      .nav-text {
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
        opacity: 1;
        margin-top: 26px;
      }
      .nav-text-KOC {
        width: 80px;
      }
      .nav-text-MCN {
        width: 85px;
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
        cursor: pointer;
      }
      .nav-xiaoxi:hover {
        color: #b9bab8;
      }
    }
  }
}
.content {
  height: 70px;
  border: 1px solid rgba(112, 112, 112, 0.10196078431372549);
  .content-nav {
    display: flex;
    width: 305px;
    margin: 0 auto;
    li {
      font-size: 18px;
      line-height: 25px;
      color: #5e5e5e;
      line-height: 70px;
      margin-right: 36px;
      cursor: pointer;
    }
    li:last-child {
      margin-right: 0;
    }
    a:hover {
      color: #cc4b42;
    }
    a {
      font-weight: 800;
      padding-bottom: 21px;
    }
  }
}
.content-nav-active {
  color: #cc4b42;
  border-bottom: 3px solid #cc4b42;
}
</style>
