<template>
  <div class="lookfor-main">
      <h1>{{list.name}}</h1>
      <div class="lookfor-item" v-for="list in list" :key="list.id" :class="Background(list)">
        <div class="lookfor-item-left">
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg"
            alt=""
          />
          <p class="lookfor-item-left-name">{{list.nickname}}</p>
          <p class="lookfor-item-left-list">平台：抖音</p>
          <p class="lookfor-item-left-list">粉丝数：{{list.fan_count}}W</p>
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
                <span>1111</span>
                <span>元</span>
              </p>
            </div>
          </div>
          <div class="lookfor-item-content-bottom">
            <div class="item-content-bottom-left">
              <span>抖音链接：<a :href='list.home_url' target="_blank">{{list.home_url}}</a></span>
              <p>
                “美妆博主里最温柔的少女”温柔标专业知识，虏获800w+粉丝。有众多大牌合作背景,
                有众多线下品牌活动经验。
              </p>
            </div>
            <!-- <div class="item-content-bottom-right">找TA推广</div> -->
            <router-link to="/DetailKuaiShou" tag="div" class="item-content-bottom-right">找TA推广</router-link>
          </div>
        </div>
      </div>

  </div>
</template>
<script>
import { LookForHandel } from '../../services/video'
// import axios from 'axios'
export default {
  data() {
    return {
      // 商品详情
      list: []
    }
  },
  methods: {
    // 根据id判断小边框颜色
    Background(list) {
      if (list.category_id === 1) {
        return 'Background1'
      } else if (list.category_id === 2) {
        return 'Background2'
      } else if (list.category_id === 3) {
        return 'Background3'
      } else if (list.category_id === 4) {
        return 'Background4'
      } else if (list.category_id === 5) {
        return 'Background5'
      } else if (list.category_id === 6) {
        return 'Background6'
      } else if (list.category_id === 7) {
        return 'Background7'
      } else if (list.category_id === 8) {
        return 'Background8'
      } else if (list.category_id === 9) {
        return 'Background9'
      } else if (list.category_id === 10) {
        return 'Background10'
      }
    }
  },
  created() {
    LookForHandel(this.$route.query.id).then(data => {
    // 操作
      console.log(data.data.data.items)
      this.list = data.data.data.items
    })
  },

  watch: {
    $route() {
      const res = LookForHandel(this.$route.query.id)
      console.log(this.list)
      this.list = res
    }
  }
}
</script>
<style lang="less" scoped>
    .lookfor-main {
    margin-top: 28px;
    h1 {
      font-size: 18px;
      font-weight: 800;
      color: #1a1a1a;
    }
     .Background1{
        background: url(../../assets/image/show/meizhuang.png);
      }
      .Background2{
        background: url(../../assets/image/show/dianshang.png);
      }
      .Background3{
        background: url(../../assets/image/show/qiche.png);
      }
      .Background4{
        background: url(../../assets/image/show/daka.png);
      }
      .Background5{
        background: url(../../assets/image/show/canyin.png);
      }
      .Background6{
        background: url(../../assets/image/show/shopping.png);
      }
      .Background7{
        background: url(../../assets/image/show/fushi.png);
      }
      .Background8{
        background: url(../../assets/image/show/muying.png);
      }
      .Background9{
        background: url(../../assets/image/show/youxi.png);
      }
      .Background10{
        background: url(../../assets/image/show/meishi.png);
      }
    .lookfor-item {
      width: 1059px;
      height: 290px;
      // background: url(../../assets/image/show/meizhuang.png);
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
              min-width: 100px;
              font-size: 18px;
              font-weight: 800;
              color: #5d5d5d;
            }
            p:nth-child(2) {
              text-align: center;
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
              a{
                font-weight: 400;
              color: rgba(120, 120, 120, 0.6);
              cursor: pointer;
              }
            }
            span:hover {
              color: #0064f9;

            }
            a:hover{
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
</style>
