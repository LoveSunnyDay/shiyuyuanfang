<template>
  <div class="ChannelMCN">
    <ChannelHeader></ChannelHeader>
    <div class="ChannelMCN-banner">
      <div class="banner-main">
        <div class="banner-main-text">
          <p>MCN火热入驻中</p>
          <p>
            2020年绝对不能错过的粉丝经济项目，大数据+智能终端精准直达
            目标人群，解决中小企业精准营销刚需
          </p>
          <p>
            <span>0成本快速入驻</span>
            <span>0成本快速入驻</span>
            <span>10年新媒体营销经验</span>
          </p>
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
            <div v-else class="wx-login">
              <p><i class="iconfont icon-weixin1"></i>微信登录</p>
              <img
                src="../../assets/image/welcome.png"
                class="wx-login-welcom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ChannelMCN-enter">
      <h2>超火引擎的优势</h2>
      <ul>
        <li>
          <img src="../../assets/image/channel/advantage1.png" alt="" />
          <p>运营自主</p>
          <p>自主管理运营，独立客户渠道， 独立挖掘细分广告市场红利!</p>
        </li>
        <li>
          <img src="../../assets/image/channel/advantage2.png" alt="" />
          <p>培训支持</p>
          <p>
            总部会针对MCN进行相关培训，同时巿场经理会定期到MCN公司给予落地扶持，快速提高订单量，打造核心竞争力！
          </p>
        </li>
        <li>
          <img src="../../assets/image/channel/advantage3.png" alt="" />
          <p>技术支持</p>
          <p>
            无需自建开发团队，总部提供技术支持，您只需坐享分成。解决开发难度，运营成本一降再降，精英团队阵容，保姆式一对一扶持，总部给您打工！
          </p>
        </li>
        <li>
          <img src="../../assets/image/channel/advantage4.png" alt="" />
          <p>结算迅速</p>
          <p>
            无需充值，结算周期是1-5个工作日的快速结算法方式，让收益马上送达您的账户！
          </p>
        </li>
        <li>
          <img src="../../assets/image/channel/advantage5.png" alt="" />
          <p>售后支持</p>
          <p>
            我们将提供7×24小时在线技术服务，保障问题高效、快速的解决，让MCN客户没有后顾之忧！
          </p>
        </li>
      </ul>
    </div>
    <div class="ChannelMCN-process">
      <div class="process-main">
        <div class="process-main-title">
          <p>服务流程</p>
          <p>
            超火引擎启动全方位合作伙伴成长计划，快速复制成功模式，助您轻松成就事业梦想
          </p>
        </div>
        <ul class="process-main-box">
          <li>
            <img src="../../assets/image/channel/process1.png" alt="" />
            <p>招商入驻</p>
            <p>经理对接</p>
            <img src="../../assets/image/channel/xian1.png" class="xian1" />
          </li>
          <li>
            <img src="../../assets/image/channel/process2.png" alt="" />
            <p>提供域名、备案号、 营业执照等</p>
            <img src="../../assets/image/channel/xian2.png" class="xian2" />
          </li>
          <li>
            <img src="../../assets/image/channel/process3.png" alt="" />
            <p>培训/业务</p>
            <p>开展</p>
            <img src="../../assets/image/channel/xian1.png" class="xian3" />
          </li>
          <li>
            <img src="../../assets/image/channel/process4.png" alt="" />
            <p>提交咨询申请</p>
            <img src="../../assets/image/channel/xian2.png" class="xian4" />
          </li>
          <li>
            <img src="../../assets/image/channel/process5.png" alt="" />
            <p>开通MCN账户</p>
            <img src="../../assets/image/channel/xian1.png" class="xian5" />
          </li>
          <li>
            <img src="../../assets/image/channel/process6.png" alt="" />
            <p>立刻接订单</p>
          </li>
        </ul>
      </div>
    </div>
    <AboutSelect></AboutSelect>
    <AboutKoubei></AboutKoubei>
  </div>
</template>

<script>
import ChannelHeader from '@/components/Channel/ChannelHeader'
import AboutSelect from '@/components/About/AboutSelect'
import AboutKoubei from '@/components/About/AboutKoubei'
export default {
  // 引入组件
  components: {
    ChannelHeader,
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
.ChannelMCN {
  background: #f7f4f8;
  padding-bottom: 168px;
  .ChannelMCN-banner {
    width: 100%;
    height: 556px;
    background: url(../../assets/image/channel/banner2.png);
    background-size: 100% 100%;
    overflow: hidden;
    .banner-main {
      width: 1148px;
      margin: 26px auto 0;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      .banner-main-text {
        color: #ffffff;
        width: 593px;
        margin-top: 109px;
        // margin: 0 auto;
        p:nth-child(1) {
          font-size: 57px;
          font-weight: 500;
          line-height: 79px;
          letter-spacing: 5px;
          color: #ffffff;
        }
        p:nth-child(2) {
          font-size: 20px;
          font-weight: 500;
          line-height: 28px;
          color: #ffffff;
        }
        p:nth-child(3) {
          margin-top: 42px;
          span {
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            color: #05cbcb;
            margin-right: 36px;
          }
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
  .ChannelMCN-enter {
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
        width: 182px;
        height: 245px;
        background: #ffffff;
        box-shadow: 0px 3px 18px rgba(161, 161, 161, 0.16);
        border-radius: 4px;
        text-align: center;
        padding: 45px 19px 0;
        img {
          width: 70px;
          height: 70px;
        }
        p:nth-child(2) {
          font-size: 18px;
          font-weight: 400;
          line-height: 25px;
          color: #00a581;
          margin: 10px 0;
        }
        p:nth-child(3) {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #3e3e3e;
          text-align: justify;
        }
      }
    }
  }
  .ChannelMCN-process {
    width: 100%;
    height: 570px;
    background: url(../../assets/image/channel/process-background.png);
    background-size: 100% 100%;
    padding-top: 112px;
    .process-main {
      width: 1220px;
      margin: 0 auto;
      .process-main-title {
        text-align: center;
        color: #ffffff;
        p:nth-child(1) {
          font-size: 62px;
          font-weight: 400;
          line-height: 87px;
        }
        p:nth-child(2) {
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
        }
      }
      .process-main-box {
        width: 1220px;
        height: 370px;
        background: #ffffff;
        display: flex;
        text-align: center;
        position: relative;
        margin-top: 150px;
        li {
          width: 106px;
          margin-right: 72px;
          p {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #f6644e;
          }
          .xian1 {
            position: absolute;
            top: 142px;
            left: 197px;
          }
          .xian2 {
            position: absolute;
            top: 142px;
            left: 373px;
          }
          .xian3 {
            position: absolute;
            top: 142px;
            left: 554px;
          }
          .xian4 {
            position: absolute;
            top: 142px;
            left: 732px;
          }
          .xian5 {
            position: absolute;
            top: 142px;
            left: 909px;
          }
        }
        li:first-child {
          margin-left: 112px;
        }
        li:nth-child(odd) {
          margin-top: 48px;
        }
        li:nth-child(even) {
          margin-top: 158px;
        }
      }
    }
  }
  .about-koubei {
    margin-bottom: 0;
  }
}
</style>
