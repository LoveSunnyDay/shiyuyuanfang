<template>
  <div>
    <div class="header-index">
      <Header v-show="headerShow"></Header>
      <div class="top-nav">
        <img src="../assets/image/logo.png" alt="" class="logo" />
        <ul class="nav-list">
          <router-link to="/Channel" tag="li" class="nav-text nav-text-KOC">
            KOC入驻
          </router-link>
          <router-link to="/ChannelMCN" tag="li" class="nav-text nav-text-MCN">
            MCN通道
          </router-link>
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
    handleClose(done) {
      this.$confirm('确认退出登录吗？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
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
  // background: url(../assets/image/banner.png);
  // .header-banner {
  //   width: 100%;
  //   height: 100%;
  // }
  .top-nav {
    display: flex;
    justify-content: space-between;
    .logo {
      margin: 16px 0 0 32px;
      width: 106px;
      height: 33px;
      cursor: pointer;
    }
    .nav-list {
      display: flex;
      li {
        margin-right: 32px;
        cursor: pointer;
      }
      .nav-text {
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
        opacity: 1;
        margin-top: 26px;
      }
      .nav-text-KOC {
        width: 75px;
      }
      .nav-text-MCN {
        width: 81px;
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
        // background: #057962;
        opacity: 0.8;
      }
      .login {
        text-align: center;
        .phone-login {
          position: relative;
          .phone-login-tab {
            display: flex;
            justify-content: flex-end;
            margin-right: 20px;
            img {
              width: 100px;
              height: 30px;
            }
            span {
              width: 56px;
              height: 54px;
              background: url(../assets/image/wxLogin.png);
            }
            span:hover {
              background: url(../assets/image/wxLogin2.png);
            }
          }
          p:nth-child(2) {
            font-size: 24px;
            font-weight: 500;
            color: #1a1a1a;
            margin-top: 4px;
          }
          .login-input-phone {
            width: 248px;
            height: 36px;
            border-radius: 19px;
            background: #f1f3f7;
            padding-left: 18px;
            outline: none;
            font-size: 14px;
            font-weight: 400;
            color: #757575;
            line-height: 36px;
            margin-top: 24px;
            cursor: pointer;
          }
          .login-input-code {
            width: 248px;
            height: 36px;
            border-radius: 19px;
            background: #f1f3f7;
            padding-left: 18px;
            outline: none;
            font-size: 14px;
            font-weight: 400;
            color: #757575;
            line-height: 36px;
            margin-top: 30px;
            cursor: pointer;
          }
          .code-button {
            border: 0;
            width: 112px;
            height: 36px;
            background-color: #00a581;
            color: #ffffff;
            font-weight: 600;
            border-radius: 19px;
            position: absolute;
            top: 172px;
            right: 87px;
            outline: none;
            cursor: pointer;
          }
          .phone-login-list {
            font-size: 14px;
            font-weight: 400;
            color: #727272;
            margin-top: 55px;
          }
          .login-button {
            border: 0;
            width: 266px;
            height: 44px;
            background-color: #00a581;
            color: #ffffff;
            font-weight: 800;
            border-radius: 19px;
            outline: none;
            cursor: pointer;
            margin-top: 43px;
          }
          .phone-login-item {
            font-size: 25px;
            font-weight: 900;
            color: #727272;
            margin: 30px 0 63px 0;
          }
        }
        .wx-login {
          .phone-login-tab {
            display: flex;
            justify-content: flex-end;
            margin-right: 20px;
            img {
              width: 100px;
              height: 30px;
            }
            span {
              width: 56px;
              height: 54px;
              background: url(../assets/image/phoneLogin.png);
            }
            span:hover {
              background: url(../assets/image/phoneLogin2.png);
            }
          }
          p:nth-child(2) {
            font-size: 24px;
            font-weight: 500;
            color: #1a1a1a;
          }
          .icon-weixin1 {
            font-size: 24px;
            margin-right: 10px;
            color: #00c800;
          }
          .wx-login-erweima {
            padding: 10px;
            width: 208px;
            height: 208px;
            border: 1px solid rgba(112, 112, 112, 0.2);
            border-radius: 6px;
            margin: 21px auto 0;
            img {
              width: 210px;
              height: 210px;
            }
          }
          .wx-login-text {
            font-size: 14px;
            font-weight: 400;
            color: #727272;
            margin-top: 18px;
          }
          .wx-login-welcom {
            width: 211px;
            height: 26px;
            margin: 30px 0 63px 0;
          }
        }
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
