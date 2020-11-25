<template>
  <div class="channel">
    <div class="channel-header">
      <router-link to="/Index">
        <img src="../assets/image/channel/logo.png" />
      </router-link>
      <router-link to="/Index/Look" tag="p">网红达人</router-link>
      <router-link to="/Index/Show" tag="p">网红T台</router-link>
      <router-link to="/Index/Video" tag="p">视频素材</router-link>
    </div>
    <div class="channel-banner">
      <div class="banner-main">
        <div class="banner-main-text">
          <p>找网红 打广告</p>
          <p>找超火引擎</p>
        </div>
        <div class="banner-main-login"></div>
      </div>
    </div>
    <div class="channel-enter">
      <h2>哪些网红可入驻</h2>
      <ul>
        <li>
          <img src="../assets/image/channel/douyin.png" alt="" />
          <p>抖音红人</p>
        </li>
        <li>
          <img src="../assets/image/channel/kuaishou.png" alt="" />
          <p>快手红人</p>
        </li>
        <li>
          <img src="../assets/image/channel/xiaohongshu.png" alt="" />
          <p>小红书达人</p>
        </li>
        <li>
          <img src="../assets/image/channel/bilibili.png" alt="" />
          <p>B站红人</p>
        </li>
        <li>
          <img src="../assets/image/channel/weixin.png" alt="" />
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
        <img src="../assets/image/channel/partner1.png" alt="" />
        <img src="../assets/image/channel/partner2.png" alt="" />
        <img src="../assets/image/channel/partner3.png" alt="" />
        <img src="../assets/image/channel/partner4.png" alt="" />
        <img src="../assets/image/channel/partner5.png" alt="" />
        <img src="../assets/image/channel/partner6.png" alt="" />
        <img src="../assets/image/channel/partner7.png" alt="" />
        <img src="../assets/image/channel/partner8.png" alt="" />
        <img src="../assets/image/channel/partner9.png" alt="" />
        <img src="../assets/image/channel/partner10.png" alt="" />
        <img src="../assets/image/channel/partner11.png" alt="" />
        <img src="../assets/image/channel/partner12.png" alt="" />
      </div>
    </div>
    <AboutSelect></AboutSelect>
    <AboutKoubei></AboutKoubei>
  </div>
</template>

<script>
import IconBackground from '@/components/About/IconBackground'
import AboutSelect from '@/components/About/AboutSelect'
import AboutKoubei from '@/components/About/AboutKoubei'
export default {
  // 引入组件
  components: {
    IconBackground,
    AboutSelect,
    AboutKoubei
  },
  data() {
    // 这里存放数据
    return {}
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
.channel {
  background: #f5f9ff;
  padding-bottom: 168px;
  .channel-header {
    height: 93px;
    display: flex;
    line-height: 93px;
    padding-left: 32px;
    img {
      width: 120px;
      height: 22px;
      margin-top: 35px;
    }
    p {
      font-size: 18px;
      font-weight: 400;
      color: #202020;
      margin-left: 64px;
      cursor: pointer;
    }
  }
  .channel-banner {
    width: 100%;
    height: 552px;
    background: url(../assets/image/channel/banner.png);
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
        // margin: 0 auto;
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
        height: 476px;
        background: #ffffff;
        border-radius: 4px;
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
