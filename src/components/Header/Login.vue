<template>
    <div>

        <button
          class="nav-login"
          @click="dialogVisible = true"
          >登录</button
        >
        <el-dialog
          :visible.sync="dialogVisible"
          width="440px"
          :before-close="handleClose"
          :modal-append-to-body="false"
        >
          <div class="login">
            <div class="wx-login" v-if="loginMode">
              <div class="phone-login-tab" @click="loginModeButton">
                <img src="../../assets/image/shouji-login.png" />
                <span></span>
              </div>
              <p><i class="iconfont icon-weixin1"></i>微信登录</p>
              <div class="wx-login-erweima">
                <img src="../../assets/image/footer/erweima.jpg" />
              </div>
              <p class="wx-login-text">扫描二维码登录</p>
              <img src="../../assets/image/welcome.png" class="wx-login-welcom" />
            </div>
            <div class="phone-login" v-else>
              <div class="phone-login-tab" @click="loginModeButton">
                <img src="../../assets/image/weixin-login.png" />
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

    </div>
</template>

<script>
export default {
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {
      dialogVisible: false,
      loginMode: true
    }
  },
  // 方法集合
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
  },
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

<style lang="less" scoped>
        .nav-login {
      width: 80px;
      height: 40px;
      margin-top: 16px;
      border-radius: 4px;
      outline: none;
      color:#ffffff;
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
          right: 67px;
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
</style>
