<template>
  <div>
    <button v-if="!loginStatus" class="nav-login" @click="openLoginDiaolog">
      登录
    </button>
    <!-- <img
      v-else
      src="../../assets/image/icon.jpg"
      style="
        width: 30px;
        border-radius: 50%;
        position: absolute;
        top: 20px;
        right: 15px;
      "
    /> -->
    <el-dialog
      :visible.sync="showDialog"
      width="440px"
      @close="handleClose"
      :modal-append-to-body="false"
    >
      <div class="login">
        <div v-if="loginMode" class="phone-login">
          <!-- <div class="phone-login-tab" @click="loginModeButton">
            <img src="../../assets/image/weixin-login.png" />
            <span></span>
          </div> -->
          <p class="login-title">
            <i class="el-icon-mobile"></i>手机验证码登录
          </p>
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
          <!-- <p class="phone-login-list">专业网红推广服务平台</p>
          <p class="phone-login-item">欢迎使用超火引擎</p> -->
          <div class="other-methods">
            <span class="other-line"></span>
            <span class="other-txt">其他账号登录</span>
            <span class="other-line"></span>
          </div>
          <img src="~assets/image/wx-login.png" alt="" class="other-wx" />
          <p class="user-agreement">
            若登录则表示已阅读并同意本网站的
            <router-link to="/PaymentAgreement" target="_blank">
              《付款协议》
            </router-link>
          </p>
        </div>
        <div v-else class="wx-login">
          <!-- <div class="phone-login-tab" @click="loginModeButton">
            <img src="../../assets/image/shouji-login.png" />
            <span></span>
          </div> -->
          <p><i class="iconfont icon-weixin1"></i>微信登录</p>
          <!-- <div class="wx-login-erweima">
            <wxlogin
                style="position:relative;right:43px"
                appid="wx5900ce0ef941d566"
                scope="snsapi_login"
                :state="state"
                :redirect_uri="redirect_uri"
                href="data:text/css;base64,LmltcG93ZXJCb3ggLnRpdGxlIHtkaXNwbGF5OiBub25lO30KLmltcG93ZXJCb3ggLmluZm8ge2Rpc3BsYXk6IG5vbmU7fQouc3RhdHVzX2ljb24ge2Rpc3BsYXk6IG5vbmV9Ci5pbXBvd2VyQm94IC5zdGF0dXMge3RleHQtYWxpZ246IGNlbnRlcjt9Ci5pbXBvd2VyQm94IC5xcmNvZGUge3dpZHRoOiAyMjBweDtwb3NpdGlvbjpyZWxhdGl2ZTtyaWdodDozcHg7dG9wOi0yMXB4O2JvcmRlcjpub25lfQ=="
              ></wxlogin>
          </div> -->
          <!-- <p class="wx-login-text">扫描二维码登录</p> -->
          <img src="../../assets/image/welcome.png" class="wx-login-welcom" />
        </div>
      </div>
    </el-dialog>
    <BindingPhone v-if="!showBindPhone" @closeBindPhone="closeBindPhone" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import wxlogin from 'vue-wxlogin'
import { getCookie, setCookie } from '../../utils'
import BindingPhone from './BindingPhone'
export default {
  // 引入组件
  components: {
    BindingPhone
  },
  data() {
    // 这里存放数据
    return {
      dialogVisible: false,
      loginMode: true,
      showBindPhone: false
    }
  },
  // 方法集合
  methods: {
    ...mapMutations('login', ['setShowLoginDiaolog']),
    handleClose() {
      this.setShowLoginDiaolog(false)
    },
    openWin(url, name, iWidth, iHeight) {
      // 获得窗口的垂直位置
      var iTop = (window.screen.availHeight - 30 - iHeight) / 2
      // 获得窗口的水平位置
      var iLeft = (window.screen.availWidth - 10 - iWidth) / 2
      window.open(
        url,
        name,
        'height=' +
          iHeight +
          ',innerHeight=' +
          iHeight +
          ',width=' +
          iWidth +
          ',innerWidth=' +
          iWidth +
          ',top=' +
          iTop +
          ',left=' +
          iLeft +
          ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no'
      )
    },
    loginModeButton() {
      return (this.loginMode = !this.loginMode)
    },
    async openLoginDiaolog() {
      this.setShowLoginDiaolog(true)
      const { data } = await this.axios.get(
        'https://api.dev.hiifire.com/v1/auth/qr_url?authclient=wx'
      )
      console.log('data', data)
      this.openWin(data, '123', 1000, 1000)
      setCookie('wx-token', '', -1)
      this.pollwxlogin = setInterval(() => {
        if (getCookie('wx-token')) {
          clearInterval(this.pollwxlogin)
          // window.location.reload()
          // 判断用户是否已经绑定手机号
          // eslint-disable-next-line camelcase
          const { auth_type } = JSON.parse(getCookie('user'))
          // eslint-disable-next-line camelcase
          if (auth_type === 2) {
            this.showBindPhone = true
          }

          this.setShowLoginDiaolog(false)
        }
      }, 1000)
    },
    closeBindPhone() {
      this.showBindPhone = false
    }
  },
  // 监听属性 类似于data概念
  computed: {
    ...mapState('wxLogin', ['token', 'profile', 'user', 'loginStatus']),
    ...mapState('login', ['showLoginDiaolog']),
    showDialog: {
      get() {
        return this.showLoginDiaolog
      },
      set() {}
    }
  },
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log('mounted', this)
  },
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

<style lang="less" scoped>
.nav-login {
  width: 80px;
  height: 40px;
  margin-top: 16px;
  border-radius: 4px;
  outline: none;
  color: #ffffff;
  // margin-right: 30px;
  background-color: #2fb598;
  border: 0;
}
.nav-login:hover {
  opacity: 0.8;
  background-color: #2fb598;
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
        background: url(../../assets/image/wxLogin.png);
      }
      span:hover {
        background: url(../../assets/image/wxLogin2.png);
      }
    }
    .login-title {
      font-size: 24px;
      font-weight: 500;
      color: #1a1a1a;
      margin-top: 28px;
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
      top: 114px;
      right: 87px;
      outline: none;
      cursor: pointer;
    }
    // .phone-login-list {
    //   font-size: 14px;
    //   font-weight: 400;
    //   color: #727272;
    //   margin-top: 55px;
    // }
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
      margin-top: 40px;
    }
    // .phone-login-item {
    //   font-size: 25px;
    //   font-weight: 900;
    //   color: #727272;
    //   margin: 30px 0 63px 0;
    // }
    .other-methods {
      // height: 60px;
      // line-height: 60px;
      // text-align: center;
      margin: 34px 0 14px;
      .other-line {
        display: inline-block;
        width: 80px;
        border-top: 1px solid #b1b1b1;
      }
      .other-txt {
        vertical-align: -4px;
        margin: 0 20px;
        color: #727272;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }
    .other-wx {
      width: 56px;
      height: 20pxpx;
    }
    .user-agreement {
      margin: 24px 0 35px;
      color: #727272;
      font-size: 12px;
      line-height: 17px;
      a {
        color: #e36713;
      }
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
        background: url(../../assets/image/phoneLogin.png);
      }
      span:hover {
        background: url(../../assets/image/phoneLogin2.png);
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

.qrcode {
  width: 20px;
}
</style>
