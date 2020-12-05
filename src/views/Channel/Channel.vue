<template>
  <div class="channel">
    <ChannelHeader></ChannelHeader>
    <div class="channel-banner">
      <div class="banner-main">
        <div class="banner-main-text">
          <p>找网红 打广告</p>
          <p>找超火引擎</p>
        </div>
        <div class="banner-main-login">
          <div class="login">
            <div v-if="loginMode" class="phone-login">
              <p class="login-title">
                <i class="el-icon-mobile"></i>手机验证码登录
              </p>
              <input
                type="text"
                placeholder="请输入手机号"
                class="login-input-phone"
                v-model="phoneNumber"
              />
              <input
                type="text"
                placeholder="短信验证码"
                class="login-input-code"
                v-model="verifyCode"
              />
              <button class="code-button" @click="sendVerifyCode">
                发送验证码
              </button>
              <button class="login-button" @click="phoneLogin">立即登录</button>
              <div class="other-methods">
                <span class="other-line"></span>
                <span class="other-txt">其他账号登录</span>
                <span class="other-line"></span>
              </div>
              <img
                src="~assets/image/wx-login.png"
                alt=""
                class="other-wx"
                @click="wxloginClick"
              />
              <p class="user-agreement">
                若登录则表示已阅读并同意本网站的
                <router-link to="/PaymentAgreement" target="_blank">
                  《付款协议》
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="channel-enter">
      <h2>哪些网红可入驻</h2>
      <ul>
        <li>
          <img src="../../assets/image/channel/douyin.png" alt="" />
          <p>抖音红人</p>
        </li>
        <li>
          <img src="../../assets/image/channel/kuaishou.png" alt="" />
          <p>快手红人</p>
        </li>
        <li>
          <img src="../../assets/image/channel/xiaohongshu.png" alt="" />
          <p>小红书达人</p>
        </li>
        <li>
          <img src="../../assets/image/channel/bilibili.png" alt="" />
          <p>B站红人</p>
        </li>
        <li>
          <img src="../../assets/image/channel/weixin.png" alt="" />
          <p>微信公众号</p>
        </li>
      </ul>
    </div>
    <div class="channel-icon">
      <div class="icon-background">
        <p class="icon-background-text">免费入驻，快速接单</p>
        <p class="icon-background-txt">让红人快速链接中小企业广告主</p>
        <IconBackground></IconBackground>
      </div>
    </div>
    <div class="channel-partner">
      <p>为入驻的红人精准匹配一下广告主</p>
      <div class="partner-list">
        <img src="../../assets/image/channel/partner1.png" alt="" />
        <img src="../../assets/image/channel/partner2.png" alt="" />
        <img src="../../assets/image/channel/partner3.png" alt="" />
        <img src="../../assets/image/channel/partner4.png" alt="" />
        <img src="../../assets/image/channel/partner5.png" alt="" />
        <img src="../../assets/image/channel/partner6.png" alt="" />
        <img src="../../assets/image/channel/partner7.png" alt="" />
        <img src="../../assets/image/channel/partner8.png" alt="" />
        <img src="../../assets/image/channel/partner9.png" alt="" />
        <img src="../../assets/image/channel/partner10.png" alt="" />
        <img src="../../assets/image/channel/partner11.png" alt="" />
        <img src="../../assets/image/channel/partner12.png" alt="" />
      </div>
    </div>
    <AboutSelect></AboutSelect>
    <AboutKoubei></AboutKoubei>
  </div>
</template>

<script>
import ChannelHeader from '@/components/Channel/ChannelHeader'
import IconBackground from '@/components/About/IconBackground'
import AboutSelect from '@/components/About/AboutSelect'
import AboutKoubei from '@/components/About/AboutKoubei'
export default {
  // 引入组件
  components: {
    ChannelHeader,
    IconBackground,
    AboutSelect,
    AboutKoubei
  },
  data() {
    // 这里存放数据
    return {
      loginMode: true
    }
  },
  // 方法集合
  methods: {
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

<style lang='less' scoped>
.channel {
  background: #f5f9ff;
  padding-bottom: 168px;
  .channel-banner {
    width: 100%;
    height: 552px;
    background: url(../../assets/image/channel/banner.png);
    background-size: 100% 100%;
    overflow: hidden;
    .banner-main {
      width: 1148px;
      margin: 26px auto 0;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      .banner-main-text {
        font-size: 57px;
        line-height: 79px;
        color: #ffffff;
        letter-spacing: 5px;
        width: 510px;
        p:nth-child(1) {
          margin-top: 155px;
          font-weight: 500;
        }
        p:nth-child(2) {
          margin-left: 200px;
          font-weight: 500;
        }
      }
      .banner-main-login {
        width: 440px;
        height: 456px;
        background: #ffffff;
        border-radius: 4px;
        padding-top: 20px;
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
            .other-methods {
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
      }
    }
  }
  .channel-enter {
    width: 1196px;
    height: 607px;
    margin: 0 auto;
    overflow: hidden;
    h2 {
      font-size: 35px;
      font-weight: bold;
      line-height: 49px;
      color: #333333;
      text-align: center;
      margin-top: 108px;
    }
    ul {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      li {
        width: 220px;
        height: 220px;
        background: #ffffff;
        box-shadow: 0px 3px 18px rgba(161, 161, 161, 0.16);
        border-radius: 4px;
        text-align: center;
        p {
          font-size: 21px;
          font-weight: 400;
          line-height: 29px;
          color: #3e3e3e;
        }
      }
      li:nth-child(1) {
        img {
          margin: 45px 0 15px;
        }
      }
      li:nth-child(2) {
        img {
          margin: 44px 0 16px;
        }
      }
      li:nth-child(3) {
        img {
          margin: 64px 0 27px;
        }
      }
      li:nth-child(4) {
        img {
          margin: 49px 0 21px;
        }
      }
      li:nth-child(5) {
        img {
          margin: 64px 0 14px;
        }
      }
    }
  }
  .channel-icon {
    width: 100%;
    height: 868px;
    background: #101720;
    padding-top: 112px;
    .icon-background {
      width: 1400px;
      height: 868px;
      margin: 0 auto;
      position: relative;
      text-align: center;
      .icon-background-text {
        font-size: 62px;
        font-weight: 400;
        line-height: 87px;
        color: #ffffff;
      }
      .icon-background-txt {
        font-size: 30px;
        font-weight: 400;
        line-height: 42px;
        color: #ffffff;
        opacity: 0.51;
        margin-top: 10px;
      }
    }
  }
  .channel-partner {
    width: 1090px;
    height: 497px;
    margin: 328px auto 0;
    p {
      font-size: 35px;
      font-weight: bold;
      line-height: 49px;
      color: #333333;
      text-align: center;
    }
    .partner-list {
      width: 1090px;
      height: 368px;
      background: #ffffff;
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
      border-radius: 14px;
      margin-top: 80px;
      position: relative;
      img {
        transition: all 0.6s;
        cursor: pointer;
      }
      img:hover {
        transform: scale(1.2);
      }
      img:nth-child(1) {
        position: absolute;
        top: 80px;
        left: 142px;
      }
      img:nth-child(2) {
        position: absolute;
        top: 48px;
        left: 244px;
      }
      img:nth-child(3) {
        position: absolute;
        top: 43px;
        left: 413px;
      }
      img:nth-child(4) {
        position: absolute;
        top: 45px;
        left: 536px;
      }
      img:nth-child(5) {
        position: absolute;
        top: 73px;
        left: 653px;
      }
      img:nth-child(6) {
        position: absolute;
        top: 45px;
        left: 814px;
      }
      img:nth-child(7) {
        position: absolute;
        top: 236px;
        left: 150px;
      }
      img:nth-child(8) {
        position: absolute;
        top: 114px;
        left: 254px;
      }
      img:nth-child(9) {
        position: absolute;
        top: 236px;
        left: 445px;
      }
      img:nth-child(10) {
        position: absolute;
        top: 135px;
        left: 548px;
      }
      img:nth-child(11) {
        position: absolute;
        top: 210px;
        left: 740px;
      }
      img:nth-child(12) {
        position: absolute;
        top: 135px;
        left: 844px;
      }
    }
  }
  .about-koubei {
    margin-bottom: 0;
  }
}
</style>
