<template>
  <div class="footer">
    <div class="footer-main">
      <div class="footer-main-left">
        <ul class="footer-main-top">
          <li>
            <router-link to="/about" target="_blank">About Hifire</router-link>
          </li>
          <li>
            <router-link to="/LoadFail" target="_blank">超火营销</router-link>
          </li>
          <li>
            <router-link to="/LoadFail" target="_blank">帮助中心</router-link>
          </li>
          <li>
            <router-link to="/about" target="_blank">关于超火</router-link>
          </li>
          <li>
            <router-link to="/LoadFail" target="_blank">使用前必读</router-link>
          </li>
          <li>
            <router-link to="/LoadFail" target="_blank">意见反馈</router-link>
          </li>
        </ul>
        <p>官方联系方式：</p>
        <div class="footer-main-bottom">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="../assets/image/footer/erweima.jpg" alt="" />
        </div>
      </div>
      <div class="footer-main-right">
        <img src="../assets/image/footer/erweima.jpg" alt="" />
        <p>
          <span>公司邮箱：fire@hiifire.com</span>
          <span>超火网红官方公众号</span>
        </p>
      </div>
    </div>
    <div class="footer-file">
      <a href="https://www.hiifire.com/" target="_blank">hiifire.com</a>
      <span>|</span>
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202013037"
        target="_blank"
      >
        沪ICP备2020032344号-1
      </a>
      <span class="footer-file-copyright"
        >Copyright © 2018-2022.诗与远方（上海）公司</span
      >
      <img src="../assets/image/footer/beian.png" alt="" />
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202013037"
        target="_blank"
      >
        沪公网安备31011202013037号
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 319px;
  background: #101720;
  padding-top: 71px;
  .footer-main {
    width: 1160px;
    height: 203px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12941176470588237);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    .footer-main-left {
      font-size: 14px;
      font-weight: 400;
      color: #60606d;
      // opacity: 0.68;
      .footer-main-top {
        display: flex;
        margin: 20px 0 60px 0;
        li {
          margin-right: 60px;
          cursor: pointer;
          a {
            color: #60606d;
          }
        }
        li:hover a {
          color: #ffffffb3;
        }
      }
      .footer-main-bottom {
        display: flex;
        margin-top: 16px;
        position: relative;
        span {
          width: 34px;
          height: 34px;
          margin-right: 24px;
          cursor: pointer;
        }
        span:nth-child(1) {
          background: url(../assets/image/footer/xinlang.png);
        }
        span:nth-child(2) {
          background: url(../assets/image/footer/kuaishou.png);
        }
        span:nth-child(3) {
          background: url(../assets/image/footer/douyin.png);
        }
        span:nth-child(4) {
          background: url(../assets/image/footer/xiaohongshu.png);
        }
        span:nth-child(5) {
          background: url(../assets/image/footer/weixin.png);
        }
        span:nth-child(1):hover {
          background: url(../assets/image/footer/xinlang2.png);
        }
        span:nth-child(2):hover {
          background: url(../assets/image/footer/kuaishou2.png);
        }
        span:nth-child(3):hover {
          background: url(../assets/image/footer/douyin2.png);
        }
        span:nth-child(4):hover {
          background: url(../assets/image/footer/xiaohongshu2.png);
        }
        span:nth-child(5):hover {
          background: url(../assets/image/footer/weixin2.png);
        }
        span:nth-child(5):hover + img {
          opacity: 1;
        }
        img {
          width: 125px;
          height: 125px;
          position: absolute;
          left: 270px;
          bottom: -45px;
          opacity: 0;
        }
      }
    }
    .footer-main-right {
      font-size: 14px;
      font-weight: 400;
      color: #a1a4a8;
      img {
        width: 125px;
        height: 125px;
      }
      p {
        margin-top: 20px;
        position: relative;
        span:first-child {
          position: absolute;
          top: 0;
          left: -200px;
        }
      }
    }
  }
  .footer-file {
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    margin-top: 20px;
    span {
      margin: 0 20px;
      color: #a1a4a8;
    }
    .footer-file-copyright {
      margin: 0 0 0 15px;
    }
    img {
      width: 14px;
      height: 14px;
      margin-left: 15px;
    }
    a {
      color: #a1a4a8;
    }
  }
}
</style>>
