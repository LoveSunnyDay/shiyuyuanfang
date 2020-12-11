<template>
  <div class="footer">
    <div class="footer-main">
      <div class="footer-main-left">
        <ul class="footer-main-top">
          <li>
            <router-link to="/about" target="_blank">About Hiifire</router-link>
          </li>
          <li>
            <router-link to="/LoadFail" target="_blank">超火营销</router-link>
          </li>
          <li>
            <router-link to="/HelpCenter" target="_blank">帮助中心</router-link>
          </li>
          <li>
            <router-link to="/about" target="_blank">关于超火</router-link>
          </li>
          <li>
            <router-link to="/Required" target="_blank">使用前必读</router-link>
          </li>
          <li>
            <router-link to="/LoadFail" target="_blank">意见反馈</router-link>
          </li>
        </ul>
        <p>官方联系方式：</p>
        <div class="footer-main-bottom">
          <!-- 新浪 -->
          <span class="footer-xinlang"></span>
          <img
            src="../assets/image/footer/xinlang-ewm.png"
            alt=""
            class="footer-main-bottom-xinlang"
          />
          <!-- 快手 -->
          <span class="footer-kuaishou"></span>
          <img
            src="../assets/image/footer/kuaishou-ewm.png"
            alt=""
            class="footer-main-bottom-kuaishou"
          />
          <!-- 抖音 -->
          <span class="footer-douyin"></span>
          <img
            src="../assets/image/footer/douyin-ewm.png"
            alt=""
            class="footer-main-bottom-douyin"
          />
          <!-- 小红书 -->
          <span class="footer-xiaohongshu"></span>
          <img
            src="../assets/image/footer/xiaohongshu-ewm.png"
            alt=""
            class="footer-main-bottom-xiaohongshu"
          />
          <!-- 微信 -->
          <span class="footer-weixin"></span>
          <img
            src="../assets/image/footer/erweima.jpg"
            alt=""
            class="footer-main-bottom-weixin"
          />
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
  min-width: 1200px;
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
        img {
          width: 125px;
          height: 125px;
        }
        // 新浪
        .footer-xinlang {
          background: url(../assets/image/footer/xinlang.png);
        }
        .footer-xinlang:hover {
          background: url(../assets/image/footer/xinlang2.png);
        }
        .footer-xinlang:hover + .footer-main-bottom-xinlang {
          display: block;
        }
        .footer-main-bottom-xinlang {
          position: absolute;
          left: 38px;
          bottom: -45px;
          display: none;
        }

        //快手
        .footer-kuaishou {
          background: url(../assets/image/footer/kuaishou.png);
        }
        .footer-kuaishou:hover {
          background: url(../assets/image/footer/kuaishou2.png);
        }
        .footer-kuaishou:hover + .footer-main-bottom-kuaishou {
          display: block;
        }
        .footer-main-bottom-kuaishou {
          position: absolute;
          left: 96px;
          bottom: -45px;
          display: none;
        }

        //抖音
        .footer-douyin {
          background: url(../assets/image/footer/douyin.png);
        }
        .footer-douyin:hover {
          background: url(../assets/image/footer/douyin2.png);
        }
        .footer-douyin:hover + .footer-main-bottom-douyin {
          display: block;
        }
        .footer-main-bottom-douyin {
          position: absolute;
          left: 155px;
          bottom: -45px;
          display: none;
        }

        //小红书
        .footer-xiaohongshu {
          background: url(../assets/image/footer/xiaohongshu.png);
        }
        .footer-xiaohongshu:hover {
          background: url(../assets/image/footer/xiaohongshu2.png);
        }
        .footer-xiaohongshu:hover + .footer-main-bottom-xiaohongshu {
          display: block;
        }
        .footer-main-bottom-xiaohongshu {
          position: absolute;
          left: 214px;
          bottom: -45px;
          display: none;
        }

        //微信
        .footer-weixin {
          background: url(../assets/image/footer/weixin.png);
        }
        .footer-weixin:hover {
          background: url(../assets/image/footer/weixin2.png);
        }
        .footer-weixin:hover + .footer-main-bottom-weixin {
          display: block;
        }
        .footer-main-bottom-weixin {
          position: absolute;
          left: 270px;
          bottom: -45px;
          display: none;
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
