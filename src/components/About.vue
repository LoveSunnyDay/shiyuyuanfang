<template>
  <div>
    <div class="header">
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
                  <p>微信登录</p>
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
                  <p><i class="el-icon-mobile"></i> 手机验证码登录</p>
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
          <img src="../assets/image/about/xian.png" alt="" class="xian" />
          <ul>
            <li>
              <img src="../assets/image/about/wai1.png" alt="" class="wai1" />
            </li>
            <li>
              <img src="../assets/image/about/wai2.png" alt="" class="wai2" />
            </li>
            <li>
              <img src="../assets/image/about/wai3.png" alt="" class="wai3" />
            </li>
            <li>
              <img src="../assets/image/about/wai4.png" alt="" class="wai4" />
            </li>
            <li>
              <img src="../assets/image/about/wai5.png" alt="" class="wai5" />
            </li>
            <li>
              <img src="../assets/image/about/wai6.png" alt="" class="wai6" />
            </li>
            <li>
              <img src="../assets/image/about/wai7.png" alt="" class="wai7" />
            </li>
            <li>
              <img src="../assets/image/about/wai8.png" alt="" class="wai8" />
            </li>
            <li>
              <img src="../assets/image/about/nei1.png" alt="" class="nei1" />
            </li>
            <li>
              <img src="../assets/image/about/nei2.png" alt="" class="nei2" />
            </li>
            <li>
              <img src="../assets/image/about/nei3.png" alt="" class="nei3" />
            </li>
            <li>
              <img src="../assets/image/about/nei4.png" alt="" class="nei4" />
            </li>
            <li>
              <img src="../assets/image/about/nei5.png" alt="" class="nei5" />
            </li>
          </ul>
          <div class="icon-content">
            <div class="icon-chatr">
              <div id="chart_1" class="echart"></div>
              <div id="chart_2" class="echart"></div>
            </div>
            <div class="icon-data">
              <ul class="data-btn">
                <li>抖音</li>
                <li>小红书</li>
                <li>微信</li>
                <li>淘宝</li>
                <li>快手</li>
              </ul>
              <ul class="data-content">
                <li>
                  <div>
                    <span class="progress1">总用户量</span>
                    <span class="progress2">2.5亿</span>
                  </div>
                  <img src="../assets/image/about/progress.png" alt="" />
                </li>
                <li>
                  <div>
                    <span class="progress1">曝光率</span>
                    <span class="progress2">2.5亿</span>
                  </div>
                  <img src="../assets/image/about/progress.png" alt="" />
                </li>
                <li>
                  <div>
                    <span class="progress1">转化率</span>
                    <span class="progress2">85%</span>
                  </div>
                  <img src="../assets/image/about/progress.png" alt="" />
                </li>
                <li>
                  <div>
                    <span class="progress1">影响力</span>
                    <span class="progress2">65%</span>
                  </div>
                  <img src="../assets/image/about/progress.png" alt="" />
                </li>
              </ul>
            </div>
            <div class="icon-ren">
              <img src="../assets/image/about/ren1.png" alt="" class="ren1" />
              <img src="../assets/image/about/ren2.png" alt="" class="ren2" />
              <img src="../assets/image/about/ren3.png" alt="" class="ren3" />
              <img src="../assets/image/about/ren4.png" alt="" class="ren4" />
            </div>
          </div>
        </div>
      </div>
      <div class="about-solve">
        <h2>行业解决方案</h2>
        <div class="about-solve-main">
          <ul class="about-solve-list">
            <li>美妆达人</li>
            <li>电商带货</li>
            <li>汽车达人</li>
            <li>网红打卡</li>
            <li>美食餐饮</li>
            <li>大快销品</li>
            <li>更多行业</li>
          </ul>
          <div class="about-solve-content">
            <li class="solve-content-td">
              <div class="td-icon">
                <img src="../assets/image/about/solve1.png" alt="" />
                <span>痛点</span>
              </div>
              <ul class="td-top">
                <li class="td-top-one">
                  <p>市场潜力大</p>
                  <p>竞争激烈</p>
                </li>
                <li>
                  <p>营销环境复杂</p>
                  <p>渠道选择困难</p>
                </li>
              </ul>
              <ul class="td-top td-top-two">
                <li class="td-top-one">
                  <p>对产品不了解</p>
                  <p>缺乏购买动因</p>
                </li>
                <li>
                  <p>推广成本不易把控</p>
                  <p>流量获取难</p>
                </li>
              </ul>
            </li>
            <li class="solve-content-jj">
              <div class="td-icon">
                <img src="../assets/image/about/solve2.png" alt="" />
                <span>解决方案</span>
              </div>
              <ul>
                <li>
                  <p>短视频</p>
                  <p>20%</p>
                </li>
                <li>
                  <p>直播</p>
                  <p>10%</p>
                </li>
                <li>
                  <p>微信</p>
                  <p>10%</p>
                </li>
                <li>
                  <p>小视频</p>
                  <p>60%</p>
                </li>
              </ul>
            </li>
            <li class="solve-content-cy">
              <div class="td-icon">
                <img src="../assets/image/about/solve3.png" alt="" />
                <span>预算充裕</span>
              </div>
              <ul>
                <li>头部明星(1-2个)</li>
                <li>头部和腰部KOL(50-100个)</li>
                <li>素人(200-300个)</li>
              </ul>
            </li>
            <li class="solve-content-yx">
              <div class="td-icon">
                <img src="../assets/image/about/solve4.png" alt="" />
                <span>预算有限</span>
              </div>
              <ul>
                <li>头部和腰部KOL(5-20个)</li>
                <li>素人(30-100个)</li>
              </ul>
            </li>
          </div>
        </div>
      </div>
      <div class="about-select">
        <p class="about-select-title">为何选择超火引擎推广平台</p>
        <p class="about-select-text">
          VIP项目小组全程跟进，个性化定制推广策略，权威保障数据明细化，投放效果可查真实流量资源，智能投放大数据锁定目标受众，精准投放，多维度账号智能筛选高性价比超全一手资源，绝对价格
        </p>
        <p class="about-select-text-two">
          优势与主流媒体长期合作，效果监测，实时优化，不浪费资源
        </p>
        <ul>
          <li><img src="../assets/image/about/select1.png" alt="" /></li>
          <li><img src="../assets/image/about/select2.png" alt="" /></li>
          <li><img src="../assets/image/about/select3.png" alt="" /></li>
          <li><img src="../assets/image/about/select4.png" alt="" /></li>
        </ul>
      </div>
      <div class="about-koubei">
        <div class="about-koubei-title">
          <p>平台服务口碑</p>
          <p>26万+一线品牌客户共同选择</p>
        </div>
        <div class="about-koubei-content">
          <div class="koubei-content-left">
            <p>雅培</p>
            <p>实力派 | 雅培CEO连续九年蝉联“全球最佳CEO”榜单</p>
            <p>
              雅培公司首席执行官白千里（Miles
              White）先生今年再次入选《巴伦周刊》该榜单，并且是连续第九年蝉联该榜单，而在所有30名入选的CEO当中，能够达到此成就的仅有七人。
            </p>
          </div>
          <div class="koubei-content-right">
            <div class="content-right-top">
              <p>中国移动</p>
              <p>
                三大通讯巨头之一.有相关数据调查显示中国移动都是
                居于首位，显示电信第二、联通第三，2017年中国移
                动营运收入7405亿元，经营收入3662亿元，联通营业
                收入为2748亿元，相比较而言，中国移动的经济实力 是最强的。
              </p>
            </div>
            <div class="content-right-bottom">
              <p>名片全能王</p>
              <p>
                创始人兼CEO镇立新，人工智能与模式识别博士，拥有 超过 100
                项发明专利，曾任摩托罗拉全球实验室主要负
                责人；联合创始人陈飒曾在上海文广传媒集团（SMG）
                担任主持人、制片人。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const echarts = require('echarts')
export default {
  data() {
    return {
      // input: ''
      dialogVisible: false,
      loginMode: true
    }
  },
  mounted() {
    this.echart_1()
    this.echart_2()
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
    echart_1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart_1'))
      // 绘制图表
      myChart.setOption({
        series: [
          {
            name: '年龄占比',
            type: 'pie', // 设置图表类型为饼图
            radius: '80%', // 饼图的半径
            data: [
              // 数据数组，name 为数据项名称，value 为数据项值
              { value: 235, name: '24~35岁' },
              { value: 274, name: '23岁以下' },
              { value: 310, name: '45岁以上' },
              { value: 335, name: '35~45岁' }
            ]
          }
        ]
      })
    },
    echart_2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart_2'))
      // 绘制图表
      myChart.setOption({
        series: [
          {
            name: '男女占比',
            type: 'pie', // 设置图表类型为饼图
            radius: '80%', // 饼图的半径
            data: [
              // 数据数组，name 为数据项名称，value 为数据项值
              { value: 235, name: '男' },
              { value: 274, name: '女' }
            ]
          }
        ]
      })
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
            top: 173px;
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
    // position: relative;
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
      li {
        cursor: pointer;
      }
      .xian {
        position: absolute;
        bottom: 0;
        left: 134px;
      }
      .wai1 {
        position: absolute;
        bottom: 36px;
        left: 0;
        transition: all 0.6s;
      }

      .wai2 {
        position: absolute;
        bottom: 234px;
        left: 0;
        transition: all 0.6s;
      }
      .wai3 {
        position: absolute;
        bottom: 374px;
        left: 197px;
        transition: all 0.6s;
      }
      .wai4 {
        position: absolute;
        bottom: 558px;
        left: 449px;
        transition: all 0.6s;
      }
      .wai5 {
        position: absolute;
        bottom: 558px;
        left: 878px;
        transition: all 0.6s;
      }
      .wai6 {
        position: absolute;
        bottom: 374px;
        left: 1128px;
        transition: all 0.6s;
      }
      .wai7 {
        position: absolute;
        bottom: 234px;
        left: 1294px;
        transition: all 0.6s;
      }
      .wai8 {
        position: absolute;
        bottom: 36px;
        left: 1294px;
        transition: all 0.6s;
      }
      .nei1 {
        position: absolute;
        bottom: 65px;
        left: 147px;
        transition: all 0.6s;
      }
      .nei2 {
        position: absolute;
        bottom: 295px;
        left: 322px;
        transition: all 0.6s;
      }
      .nei3 {
        position: absolute;
        bottom: 383px;
        left: 612px;
        transition: all 0.6s;
      }
      .nei4 {
        position: absolute;
        bottom: 295px;
        left: 883px;
        transition: all 0.6s;
      }
      .nei5 {
        position: absolute;
        bottom: 65px;
        left: 1040px;
        transition: all 0.6s;
      }
      .wai1:hover {
        transform: scale(1.2);
      }
      .wai2:hover {
        transform: scale(1.2);
      }
      .wai3:hover {
        transform: scale(1.2);
      }
      .wai4:hover {
        transform: scale(1.2);
      }
      .wai5:hover {
        transform: scale(1.2);
      }
      .wai6:hover {
        transform: scale(1.2);
      }
      .wai7:hover {
        transform: scale(1.2);
      }
      .wai8:hover {
        transform: scale(1.2);
      }
      .nei1:hover {
        transform: scale(1.2);
      }
      .nei2:hover {
        transform: scale(1.2);
      }
      .nei3:hover {
        transform: scale(1.2);
      }
      .nei4:hover {
        transform: scale(1.2);
      }
      .nei5:hover {
        transform: scale(1.2);
      }
    }
    .icon-content {
      width: 860px;
      height: 340px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      opacity: 1;
      border-radius: 15px;
      position: absolute;
      bottom: -29px;
      left: 228px;
      display: flex;
      .icon-data {
        width: 500px;
        height: 268px;
        border-left: 1px solid #707070;
        margin-top: 36px;
        display: flex;
        .data-btn {
          margin-left: 29px;
          width: 54px;
          height: 210px;
          li {
            background: #f6f6f6;
            border-radius: 13px;
            width: 54px;
            height: 26px;
            font-size: 14px;
            font-weight: bold;
            line-height: 26px;
            color: #545454;
            text-align: center;
            margin-bottom: 20px;
            cursor: pointer;
          }
          li:first-child {
            background: #88ffe7;
          }
        }
        .data-content {
          li {
            margin-bottom: 25px;
            div {
              display: flex;
              justify-content: space-between;
              .progress1 {
                margin-left: 49px;
                font-size: 14px;
                font-weight: 500;
                color: #292929;
              }
              .progress2 {
                // margin-left: 200px;
                // margin-right: 10px;
                height: 16px;
                font-size: 12px;
                font-weight: 500;
                color: #292929;
              }
            }
            img {
              margin: 22px 0 0 22px;
            }
          }
        }
      }
      .icon-ren {
        .ren1 {
          position: absolute;
          bottom: -78px;
          left: 0;
        }
        .ren2 {
          position: absolute;
          bottom: -200px;
          left: 120px;
        }
        .ren3 {
          position: absolute;
          bottom: -220px;
          right: 120px;
        }
        .ren4 {
          position: absolute;
          bottom: -144px;
          right: 0;
        }
      }
    }
  }
  .about-solve {
    // margin-top: 328px;
    width: 1249px;
    margin: 328px auto 0;
    h2 {
      font-size: 35px;
      font-weight: bold;
      color: #333333;
      text-align: center;
    }
    .about-solve-main {
      display: flex;
      margin-top: 74px;
      .about-solve-list {
        width: 110px;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
        border-radius: 14px;
        li {
          height: 52px;
          width: 64px;
          font-size: 16px;
          font-weight: 400;
          color: #808080;
          // text-align: center;
          line-height: 64px;
          margin: 0 auto;
          cursor: pointer;
        }
        li:hover {
          color: #2178f9;
        }
      }
      .about-solve-content {
        width: 1092px;
        height: 300px;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
        border-radius: 14px;
        margin-left: 31px;
        padding-top: 68px;
        display: flex;
        li {
          width: 273px;
          // height: 300px;
          .td-icon {
            display: flex;
            justify-content: space-between;
            img {
              width: 40px;
              height: 40px;
            }
            span {
              font-size: 23px;
              font-weight: bold;
              color: #585858;
              display: block;
              // height: 40px;
              line-height: 40px;
            }
          }
        }
        .solve-content-td {
          // background-color: cornsilk;
          .td-icon {
            width: 100px;
            height: 40px;
            margin: 0 auto;
            cursor: pointer;
          }
          .td-top {
            display: flex;
            font-size: 14px;
            font-weight: 500;
            color: #585858;
            line-height: 20px;
            text-align: center;
            margin-top: 45px;
            height: 40px;
            li:first-child {
              border-right: 1px solid #707070;
            }
            p {
              cursor: pointer;
            }
          }
          .td-top-two {
            margin-top: 62px;
          }
        }
        .solve-content-jj {
          // background-color: #eaf3e4;
          .td-icon {
            width: 147px;
            height: 40px;
            margin: 0 auto;
            cursor: pointer;
          }
          ul {
            display: flex;
            font-size: 14px;
            text-align: center;
            position: relative;
            li {
              cursor: pointer;
              transition: all 0.3s;
            }
            li:hover {
              transform: scale(1.2);
            }
            li:nth-child(1) {
              width: 63px;
              height: 63px;
              background: #f5e49f;
              border-radius: 50%;
              opacity: 0.77;
              position: absolute;
              top: 55px;
              left: 70px;
              p:nth-child(1) {
                margin-top: 20px;
              }
            }
            li:nth-child(2) {
              width: 45px;
              height: 45px;
              background: #cbe5ff;
              border-radius: 50%;
              opacity: 0.74;
              position: absolute;
              top: 42px;
              left: 140px;
              p:nth-child(1) {
                margin-top: 10px;
              }
            }
            li:nth-child(3) {
              width: 45px;
              height: 45px;
              background: #cbffdc;
              border-radius: 50%;
              opacity: 0.74;
              position: absolute;
              top: 140px;
              left: 85px;
              p:nth-child(1) {
                margin-top: 10px;
              }
            }
            li:nth-child(4) {
              width: 71px;
              height: 71px;
              background: #ffcbcb;
              border-radius: 50%;
              opacity: 0.71;
              position: absolute;
              top: 88px;
              left: 145px;
              p:nth-child(1) {
                margin-top: 25px;
              }
            }
          }
        }
        .solve-content-cy {
          // background-color: #e4e7f3;
          .td-icon {
            width: 147px;
            height: 40px;
            margin: 0 auto;
            cursor: pointer;
          }
          ul {
            margin-top: 18px;
            font-size: 14px;
            line-height: 60px;
            color: #585858;
            text-align: center;
            li {
              cursor: pointer;
            }
          }
        }
        .solve-content-yx {
          // background-color: #f3eae4;
          .td-icon {
            width: 147px;
            height: 40px;
            margin: 0 auto;
            cursor: pointer;
          }
          ul {
            margin-top: 18px;
            font-size: 14px;
            line-height: 60px;
            color: #585858;
            text-align: center;
            li {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .about-select {
    width: 100%;
    height: 700px;
    background: url(../assets/image/about/select.png);
    overflow: hidden;
    margin-top: 142px;
    .about-select-title {
      width: 420px;
      height: 49px;
      font-size: 35px;
      font-weight: bold;
      line-height: 49px;
      color: #01d0d8;
      margin: 150px auto 57px;
    }
    .about-select-text {
      width: 1218px;
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      margin: 0 auto 10px;
    }
    .about-select-text-two {
      width: 436px;
      font-weight: 400;
      color: #ffffff;
      margin: 0 auto;
    }
    ul {
      display: flex;
      justify-content: space-between;
      width: 1024px;
      margin: 120px auto 0;
    }
  }
  .about-koubei {
    width: 1198px;
    margin: 97px auto 170px;
    .about-koubei-title {
      width: 456px;
      height: 200px;
      background: url(../assets/image/about/koubei-title.png);
      margin: 0 auto;
      overflow: hidden;
      text-align: center;
      p:nth-child(1) {
        font-size: 45px;
        font-weight: 500;
        color: #363636;
        margin-top: 85px;
      }
      p:nth-child(2) {
        font-size: 20px;
        font-weight: 500;
        color: #757474;
        margin-top: 45px;
      }
    }
    .about-koubei-content {
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
      .koubei-content-left {
        width: 410px;
        height: 574px;
        background: url(../assets/image/about/koubei1.png);
        overflow: hidden;
        font-size: 14px;
        line-height: 30px;
        color: #ffffff;
        p:nth-child(1) {
          width: 152px;
          height: 61px;
          background: url(../assets/image/about/koubei4.png);
          font-size: 38px;
          font-weight: 500;
          color: #ffffff;
          text-align: center;
          line-height: 61px;
          margin: 52px auto 0;
        }
        p:nth-child(2) {
          width: 323px;
          margin: 36px auto 0;
          text-indent: 2em;
        }
        p:nth-child(3) {
          width: 323px;
          margin: 0 auto;
          text-indent: 2em;
        }
      }
      .koubei-content-right {
        font-size: 14px;
        line-height: 24px;
        color: #ffffff;
        .content-right-top {
          width: 754px;
          height: 270px;
          background: url(../assets/image/about/koubei2.png);
          overflow: hidden;
          p:nth-child(1) {
            width: 204px;
            height: 61px;
            background: url(../assets/image/about/koubei5.png);
            font-size: 30px;
            font-weight: 500;
            line-height: 61px;
            color: #ffffff;
            margin: 42px 0 0 40px;
            text-align: center;
          }
          p:nth-child(2) {
            width: 333px;
            margin: 31px 0 0 40px;
          }
        }
        .content-right-bottom {
          width: 754px;
          height: 270px;
          margin-top: 34px;
          background: url(../assets/image/about/koubei3.png);
          overflow: hidden;
          p:nth-child(1) {
            width: 204px;
            height: 61px;
            background: url(../assets/image/about/koubei6.png);
            font-size: 30px;
            font-weight: 500;
            line-height: 61px;
            color: #ffffff;
            margin: 42px 0 0 40px;
            text-align: center;
          }
          p:nth-child(2) {
            width: 333px;
            margin: 31px 0 0 40px;
          }
        }
      }
    }
  }
}
#chart_1 {
  width: 360px;
  height: 170px;
}
#chart_2 {
  width: 360px;
  height: 170px;
}
</style>
