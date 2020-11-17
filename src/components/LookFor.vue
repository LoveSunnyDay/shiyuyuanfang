<template>
  <div class="lookfor">
    <div class="lookfor-nav">
      <ul>
        <li>
          <img src="../assets/image/show/quanbu.png" alt="" />
          <el-dropdown>
            <span class="el-dropdown-link">
              全部分类
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>美妆达人</el-dropdown-item>
              <el-dropdown-item>电商带货</el-dropdown-item>
              <el-dropdown-item>汽车达人</el-dropdown-item>
              <el-dropdown-item>网红打卡</el-dropdown-item>
              <el-dropdown-item>美食餐饮</el-dropdown-item>
              <el-dropdown-item>大快销品</el-dropdown-item>
              <el-dropdown-item>服饰箱包</el-dropdown-item>
              <el-dropdown-item>母婴亲子</el-dropdown-item>
              <el-dropdown-item>游戏网络</el-dropdown-item>
              <el-dropdown-item>食品达人</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <img src="../assets/image/show/douyin.png" alt="" />
          <p>抖音网红</p>
        </li>
        <li>
          <img src="../assets/image/show/xiaohongshu.png" alt="" />
          <p>小红书网红</p>
        </li>
        <li>
          <img src="../assets/image/show/kuaishou.png" alt="" />
          <p>B站网红</p>
        </li>
        <li>
          <img src="../assets/image/show/bilibili.png" alt="" />
          <p>快手网红</p>
        </li>
        <li>
          <img src="../assets/image/show/taobao.png" alt="" />
          <p>淘宝网红</p>
        </li>
      </ul>
    </div>
    <div class="lookfor-main">
      <h1>美妆达人</h1>
      <div class="lookfor-item" v-for="item in 8" :key="item">
        <div class="lookfor-item-left">
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg"
            alt=""
          />
          <p class="lookfor-item-left-name">一条小团团</p>
          <p class="lookfor-item-left-list">平台：抖音</p>
          <p class="lookfor-item-left-list">粉丝数：51W</p>
        </div>
        <div class="lookfor-item-content">
          <div class="lookfor-item-content-top">
            <div class="content-top-suggest">
              <p>投放建议：</p>
              <ul>
                <li>垂类美妆</li>
                <li>美食</li>
              </ul>
            </div>
            <div class="content-top-fans">
              <p>粉丝状况：</p>
              <p>
                特征：
                <span>女粉丝偏多</span>
              </p>
              <p>
                分布：
                <span>河南</span>
                <span>河北</span>
                <span>浙江</span>
              </p>
              <p>
                年龄：
                <span>18-30岁</span>
              </p>
            </div>
            <div class="content-top-price">
              <p>直播一小时</p>
              <p>
                <span>￥</span>
                <span>3600.00</span>
                <span>元</span>
              </p>
            </div>
          </div>
          <div class="lookfor-item-content-bottom">
            <div class="item-content-bottom-left">
              <span>抖音链接：https://v.douyin.com/JJj79Xu/</span>
              <p>
                “美妆博主里最温柔的少女”温柔标专业知识，虏获800w+粉丝。有众多大牌合作背景,
                有众多线下品牌活动经验。
              </p>
            </div>
            <div class="item-content-bottom-right">找TA推广</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.lookfor {
  width: 1059px;
  margin: 30px auto 0;
  .lookfor-nav {
    ul {
      display: flex;
      li {
        box-shadow: 1px 1px 5px #d0d0d0;
        border-radius: 30px;
        width: 120px;
        height: 40px;
        margin-right: 24px;
        line-height: 40px;
        display: flex;
        font-size: 14px;
        color: #5e5e5e;
        cursor: pointer;
        p {
          font-weight: bold;
        }
        img {
          width: 30px;
          height: 30px;
          margin: 5px 8px;
        }
      }
      li:nth-child(1) {
        width: 142px;
        background: #efefef;
        opacity: 0.84;
        .el-dropdown-link {
          cursor: pointer;
          font-weight: bold;
          color: #5e5e5e;
          i {
            font-size: 14px;
            font-weight: bold;
          }
        }
        .el-icon-arrow-down {
          font-size: 14px;
        }
      }
      li:nth-child(3) {
        width: 134px;
      }
      li:hover {
        background: #efefef;
        opacity: 0.84;
      }
    }
  }
  .lookfor-main {
    margin-top: 28px;
    h1 {
      font-size: 18px;
      font-weight: 800;
      color: #1a1a1a;
    }
    .lookfor-item {
      width: 1059px;
      height: 290px;
      background: url(../assets/image/show/meizhuang.png);
      margin-top: 19px;
      padding-top: 25px;
      display: flex;
      .lookfor-item-left {
        width: 191px;
        img {
          width: 122px;
          height: 122px;
          border-radius: 50%;
          border: 7px solid #ffffff;
          margin: 0 auto;
          display: block;
        }
        .lookfor-item-left-name {
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          text-align: center;
          margin: 20px 0 10px 0;
        }
        .lookfor-item-left-list {
          font-size: 14px;
          font-weight: 300;
          line-height: 24px;
          color: #ffffff;
          text-align: center;
        }
      }
      .lookfor-item-content {
        margin-left: 34px;
        .lookfor-item-content-top {
          display: flex;
          font-weight: 800;
          color: #5d5d5d;
          height: 147px;
          margin-top: 9px;
          .content-top-suggest {
            width: 170px;
            p {
              font-size: 16px;
              font-weight: 800;
            }
            ul {
              display: flex;
              li {
                font-size: 14px;
                font-weight: 400;
                color: #4a5c75;
                margin: 10px 17px 0 0;
                background-color: #dde4e2;
                line-height: 25px;
                border-radius: 15px;
                padding: 0 10px;
              }
            }
          }
          .content-top-fans {
            font-size: 14px;
            margin-left: 50px;
            p:nth-child(1) {
              font-size: 16px;
              font-weight: 800;
            }
            p:nth-child(2) {
              font-size: 14px;
              color: #eb6694;
              font-weight: Bold;
              margin-top: 16px;
              span {
                color: #606060;
              }
            }
            p:nth-child(3) {
              font-size: 14px;
              color: #4f8bde;
              font-weight: Bold;
              margin-top: 15px;
              span {
                color: #606060;
                margin-right: 8px;
              }
            }
            p:nth-child(4) {
              font-size: 14px;
              color: #e18360;
              font-weight: Bold;
              margin-top: 15px;
              span {
                color: #606060;
                margin-right: 8px;
              }
            }
          }
          .content-top-price {
            margin: 67px 0 0 320px;
            p:nth-child(1) {
              font-size: 18px;
              font-weight: 800;
              color: #5d5d5d;
            }
            p:nth-child(2) {
              font-size: 14px;
              font-weight: bold;
              line-height: 20px;
              color: rgba(93, 93, 93, 0.6);
              margin-top: 4px;
              span:nth-child(2) {
                font-size: 17px;
                font-family: Arial;
                font-weight: bold;
                line-height: 20px;
                color: #de8d3c;
              }
            }
          }
        }
        .lookfor-item-content-bottom {
          margin-top: 16px;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          .item-content-bottom-left {
            width: 523px;
            span {
              font-weight: 400;
              color: rgba(120, 120, 120, 0.6);
              cursor: pointer;
            }
            span:hover {
              color: #0064f9;
            }
            p {
              font-size: 14px;
              font-weight: 400;
              line-height: 24px;
              color: #1a1a1a;
              margin-top: 14px;
              cursor: pointer;
            }
          }
          .item-content-bottom-right {
            width: 110px;
            height: 32px;
            border-radius: 2px;
            border: 2px solid #05a081;
            text-align: center;
            line-height: 32px;
            color: #05a081;
            margin-top: 35px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 800;
          }
        }
      }
    }
  }
}
</style>
