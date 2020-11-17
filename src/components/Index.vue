<template>
  <div>
    <div class="header-index">
      <!-- <img src="../assets/image/banner.png" alt="" class="header-banner" /> -->
      <div class="top-nav">
        <img src="../assets/image/logo.png" alt="" class="logo" />
        <ul class="nav-list">
          <li class="nav-text">网红通道</li>
          <li class="nav-text">MCN通道</li>
          <li>
            <img src="../assets/image/gengduo.png" alt="" class="nav-gengduo" />
          </li>
          <li>
            <i class="el-icon-message-solid nav-xiaoxi"></i>
          </li>
          <li>
            <el-button
              type="success"
              class="nav-login"
              @click="dialogVisible = true"
              >登录</el-button
            >
            <el-dialog
              :visible.sync="dialogVisible"
              width="440px"
              :before-close="handleClose"
            >
              <div class="login">
                <div class="wx-login" v-if="loginMode">
                  <div class="phone-login-tab" @click="loginModeButton">
                    <img src="../assets/image/shouji-login.png" />
                    <span></span>
                  </div>
                  <p><i class="iconfont icon-weixin1"></i>微信登录</p>
                  <div class="wx-login-erweima">
                    <img src="../assets/image/footer/erweima.jpg" />
                  </div>
                  <p class="wx-login-text">扫描二维码登录</p>
                  <img
                    src="../assets/image/welcome.png"
                    class="wx-login-welcom"
                  />
                </div>
                <div class="phone-login" v-else>
                  <div class="phone-login-tab" @click="loginModeButton">
                    <img src="../assets/image/weixin-login.png" />
                    <span></span>
                  </div>
                  <p><i class="el-icon-mobile"></i>手机验证码登录</p>
                  <input
                    type="text"
                    placeholder="请输入手机号"
                    class="login-input-phone"
                  />
                  <input
                    type="text"
                    placeholder="短信验证码"
                    class="login-input-code"
                  />
                  <button class="code-button">发送验证码</button>
                  <button class="login-button">立即登录</button>
                  <p class="phone-login-list">专业网红推广服务平台</p>
                  <p class="phone-login-item">欢迎使用超火引擎</p>
                </div>
              </div>
            </el-dialog>
          </li>
        </ul>
      </div>
      <div class="header-main">
        <div class="header-text">两分钟 找到对的网红！</div>
        <div class="main-search">
          <input
            type="text"
            placeholder="请输入您想推广的产品或相关网红，精确匹配"
            class="search-input"
          />
          <img src="../assets/image/sousuo.png" class="search-sousuo" />
          <!-- <img src="../assets/image/shaixuan.png" class="search-shaixuan" /> -->
          <router-link to="/editor"
            ><div class="search-shaixuan"></div
          ></router-link>
        </div>
        <div class="main-cont">
          <span>热门：</span>
          <ul>
            <li>美妆达人</li>
            <li>，</li>
            <li>时尚达人</li>
            <li>，</li>
            <li>手表带货</li>
            <li>，</li>
            <li>抖音网红</li>
            <li>，</li>
            <li>一条小团团</li>
            <li>，</li>
            <li>小红书</li>
            <li>，</li>
            <li>快手</li>
          </ul>
        </div>
      </div>
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
export default {
  data() {
    return {
      // input: ''
      dialogVisible: false,
      loginMode: true
    }
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
    }
  }
}
</script>

<style lang="less" scoped>
.header-index {
  width: 100%;
  height: 504px;
  background: url(../assets/image/banner.png);
  // .header-banner {
  //   width: 100%;
  //   height: 100%;
  // }
  .top-nav {
    display: flex;
    justify-content: space-between;
    .logo {
      margin: 16px 0 0 32px;
      width: 120px;
      height: 21px;
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
            top: 170px;
            right: 88px;
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
  .header-main {
    width: 730px;
    margin: 127px auto 0;
    .header-text {
      font-size: 40px;
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 24px;
    }
    .main-search {
      height: 60px;
      position: relative;
      .search-input {
        width: 452px;
        height: 25px;
        outline: none;
        border-top-left-radius: 5px; // 左上角圆角
        border-bottom-left-radius: 5px; // 左下角圆角
        padding: 18px 0 17px 24px;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        color: #5e5e5e;
      }
      .search-sousuo {
        position: absolute;
        top: 0;
        right: 164;
        width: 90px;
        height: 60px;
        cursor: pointer;
      }
      .search-sousuo:hover {
        opacity: 0.8;
      }
      .search-shaixuan {
        position: absolute;
        top: 0;
        right: -8px;
        width: 164px;
        height: 60px;
        cursor: pointer;
        background: url(../assets/image/shaixuan2.png);
      }
      .search-shaixuan:hover {
        background: url(../assets/image/shaixuan.png);
      }
    }
    .main-cont {
      margin-top: 16px;
      display: flex;
      span {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #f7f7f7;
      }
      ul {
        display: flex;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        // opacity: 0.7;
        li {
          cursor: pointer;
          color: #b5b6b5;
        }
        li:hover {
          color: #ffffff;
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
      color: #0064f9;
    }
    a {
      font-weight: 800;
      padding-bottom: 21px;
    }
  }
}
.content-nav-active {
  color: #0064f9;
  border-bottom: 3px solid #0064f9;
}
/deep/.el-dialog__headerbtn {
  position: absolute;
  top: -20px;
  right: -20px;
  i {
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
  }
  // i:hover {
  //   color: red !important;
  // }
}
/deep/.el-dialog__body {
  padding: 0 0 1px 0;
}
/deep/.el-dialog__header {
  padding: 10px;
}
</style>
