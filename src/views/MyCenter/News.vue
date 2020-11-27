<template>
  <div class="news">
    <div class="news-title">
      <p>我的消息</p>
      <span><i class="el-icon-circle-close"></i> 删除全部信息</span>
    </div>
    <ul class="news-type">
      <li @click="newsBtn = 0" :class="{ 'news-type-active': newsBtn == 0 }">
        全部消息
      </li>
      <li @click="newsBtn = 1" :class="{ 'news-type-active': newsBtn == 1 }">
        系统消息
      </li>
      <li @click="newsBtn = 2" :class="{ 'news-type-active': newsBtn == 2 }">
        订单提醒
      </li>
    </ul>
    <div>
      <div v-show="newsBtn == 0">
        <AllNews></AllNews>
      </div>
      <div v-show="newsBtn == 1">
        <SystemNews></SystemNews>
      </div>
      <div v-show="newsBtn == 2">
        <OrderNews></OrderNews>
      </div>
    </div>
  </div>
</template>

<script>
import AllNews from '@/components/MyCenter/News/AllNews.vue'
import SystemNews from '@/components/MyCenter/News/SystemNews.vue'
import OrderNews from '@/components/MyCenter/News/OrderNews.vue'
export default {
  components: {
    AllNews,
    SystemNews,
    OrderNews
  },
  data() {
    return {
      newsBtn: 0 // Tab切换默认显示第一个全部订单
    }
  },
  methods: {}
}
</script>

<style lang="less">
.news {
  width: 1095px;
  height: 1060px;
  // margin-left: 48px;
  background-color: #ffffff;
  .news-title {
    display: flex;
    justify-content: space-between;
    margin: 33px 20px 20px 20px;
    p {
      font-size: 16px;
      font-weight: bold;
      color: #171717;
    }
    span {
      font-size: 14px;
      color: #545454;
      cursor: pointer;
    }
    span:hover{
      color: #E92E2E;
    }
  }
  .news-type {
    margin: 0 0 37px 20px;
    display: flex;
    li {
      height: 20px;
      padding: 6px 10px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.08);
      border-radius: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: bold;
      color: #7b7b7b;
      margin-right: 15px;
      cursor: pointer;
    }
    .news-type-active {
      background-color: #49bea6;
      color: #ffffff;
    }
  }
  .news-content {
    li {
      height: 128px;
      border-top: 1px solid rgba(112, 112, 112, 0.10196078431372549);
      margin: 0 20px;
      display: flex;
      img {
        width: 50px;
        height: 50px;
        margin: 35px 19px 0 45px;
      }
      .news-content-main {
        width: 830px;
        font-size: 14px;
        margin-top: 35px;
        .content-main-tag {
          margin-bottom: 14px;
          span:nth-child(1) {
            font-weight: bold;
            color: #545454;
          }
          span:nth-child(2) {
            font-weight: bold;
            color: #545454;
            opacity: 0.48;
            margin: 0 40px 0 24px;
          }
        }
        p {
          font-weight: bold;
          line-height: 20px;
          color: #545454;
          cursor: pointer;
        }
      }
      i {
        font-size: 18px;
        line-height: 128px;
        color: #858585;
        cursor: pointer;
      }
      i:hover {
        color: #e92e2e;
      }
    }
  }
  .news-page {
    margin: 100px 20px 0 0;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
