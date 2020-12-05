<template>
  <div>
    <div class="header">
      <div class="top-nav">
        <img src="../assets/image/logo.png" alt="" class="logo" />
        <ul class="nav-list">
          <li class="nav-text">KOC入驻</li>
          <li class="nav-text">MCN通道</li>
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
      <div class="header-main">
        <div class="header-text">找网红 打广告 找超火引擎</div>
        <div class="header-title">专业网红推广平台</div>
      </div>
    </div>
    <div class="about">
      <div class="about-top">
        <div class="top-title">
          <span>核心</span>
          <span>优势</span>
        </div>
        <ul class="top-main">
          <li>
            <img src="../assets/image/about/top1.png" alt="" />
            <p><span>品</span>质保障</p>
            <p>品质护航 推广无忧</p>
          </li>
          <li>
            <img src="../assets/image/about/top1.png" alt="" />
            <p><span>优</span>质资源</p>
            <p>百万社会化媒体资源</p>
          </li>
          <li>
            <img src="../assets/image/about/top1.png" alt="" />
            <p><span>快</span>速推广</p>
            <p>一站式智能推广服务</p>
          </li>
          <li>
            <img src="../assets/image/about/top1.png" alt="" />
            <p><span>高</span>性价比</p>
            <p>自主采购 省心省力</p>
          </li>
          <li>
            <img src="../assets/image/about/top1.png" alt="" />
            <p><span>精</span>准投放</p>
            <p>案例需求 专业分析</p>
          </li>
        </ul>
      </div>
      <div class="about-icon">
        <div class="icon-background">
          <p>全网<span>优质新媒体</span>营销资源</p>
          <IconBackground></IconBackground>
        </div>
      </div>
      <AboutSolve></AboutSolve>
      <AboutSelect></AboutSelect>
      <AboutKoubei></AboutKoubei>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Header/Login'
import IconBackground from '@/components/About/IconBackground'
import AboutSolve from '@/components/About/AboutSolve'
import AboutSelect from '@/components/About/AboutSelect'
import AboutKoubei from '@/components/About/AboutKoubei'
export default {
  data() {
    return {
      // input: ''
      dialogVisible: false,
      loginMode: true
    }
  },
  components: {
    Login,
    IconBackground,
    AboutSolve,
    AboutSelect,
    AboutKoubei
  },
  mounted() {},
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
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 905px;
  background: url(../assets/image/banner.png);
  -moz-background-size: 100% 100%;
  background-size: 100% 100%;
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
    }
  }
  .header-main {
    width: 1000px;
    margin: 227px auto 0;
    .header-text {
      width: 726px;
      margin: 0 auto;
      font-size: 57px;
      font-weight: 500;
      color: #ffffff;
      letter-spacing: 5px;
    }
    .header-title {
      width: 900px;
      font-size: 102px;
      font-weight: 500;
      color: #ffffff;
      letter-spacing: 10px;
      margin: 70px auto 0;
    }
  }
}
.about {
  margin-top: 80px;
  .about-top {
    .top-title {
      text-align: center;
      span {
        font-size: 35px;
        font-weight: bold;
        color: #2ec39a;
      }
      span:first-child {
        color: #333333;
      }
    }
    .top-main {
      display: flex;
      width: 1196px;
      margin: 80px auto 126px;
      li {
        width: 220px;
        height: 220px;
        box-shadow: 1px 1px 5px #d0d0d0;
        margin-left: 24px;
        transition: 0.2s;
        cursor: pointer;
        img {
          width: 56px;
          height: 56px;
          margin: 45px 0 16px 84px;
        }
        p {
          font-size: 21px;
          font-weight: 800;
          color: #333333;
          text-align: center;
          span {
            font-weight: 800;
            color: #ff7417;
          }
        }
        p:last-child {
          font-size: 16px;
          font-weight: 400;
          color: #7a7a7a;
          margin-top: 20px;
        }
      }
      li:first-child {
        margin-left: 0;
      }
      li:hover {
        transform: translate(0, -5px);
        box-shadow: 5px 5px 10px #d8d9d8;
      }
    }
  }
  .about-icon {
    width: 100%;
    height: 868px;
    background: #101720;
    padding-top: 112px;
    .icon-background {
      width: 1400px;
      height: 868px;
      margin: 0 auto;
      position: relative;
      p {
        font-size: 62px;
        font-weight: 400;
        color: #ffffff;
        text-align: center;
        span {
          color: #41ffd2;
        }
      }
    }
  }
}
</style>
