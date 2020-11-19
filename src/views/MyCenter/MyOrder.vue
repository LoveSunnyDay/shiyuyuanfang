<template>
  <div class="myOrder">
    <p class="order-title">我的订单</p>
    <ul class="order-type">
      <li @click="cur = 0" :class="{ 'order-type-active': cur == 0 }">
        全部订单
      </li>
      <li @click="cur = 1" :class="{ 'order-type-active': cur == 1 }">
        待付款
      </li>
      <li @click="cur = 2" :class="{ 'order-type-active': cur == 2 }">
        进行中
      </li>
      <li @click="cur = 3" :class="{ 'order-type-active': cur == 3 }">
        已完成
      </li>
    </ul>
    <div>
      <div v-show="cur == 0">
        <AllOrders></AllOrders>
      </div>
      <div v-show="cur == 1">
        <NoOrders></NoOrders>
      </div>
      <div v-show="cur == 2">
        <ProceedOrders></ProceedOrders>
      </div>
      <div v-show="cur == 3">
        <OverOrders></OverOrders>
      </div>
    </div>
  </div>
</template>

<script>
import AllOrders from '@/components/MyCenter/MyOrder/AllOrders.vue'
import NoOrders from '@/components/MyCenter/MyOrder/NoOrders.vue'
import ProceedOrders from '@/components/MyCenter/MyOrder/ProceedOrders.vue'
import OverOrders from '@/components/MyCenter/MyOrder/OverOrders.vue'
export default {
  components: {
    AllOrders,
    NoOrders,
    ProceedOrders,
    OverOrders
  },
  data() {
    return {
      cur: 0 // Tab切换默认显示第一个全部订单
    }
  }
}
</script>

<style lang="less">
.myOrder {
  width: 1200px;
  margin-left: 48px;
  .order-title {
    margin: 20px 0 23px 0;
    font-size: 20px;
    font-weight: bold;
    color: #171717;
  }
  .order-type {
    display: flex;
    li {
      height: 22px;
      padding: 9px 20px;
      font-size: 16px;
      font-weight: bold;
      color: #545454;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      border-radius: 20px;
      line-height: 22px;
      margin-right: 4px;
      cursor: pointer;
    }
    .order-type-active {
      background-color: #49bea6;
      color: #ffffff;
    }
  }
  .order-content {
    margin-top: 22px;
    .order-content-title {
      display: flex;
      width: 1176px;
      height: 40px;
      padding-left: 24px;
      background: #dee2ed;
      border-radius: 2px;
      line-height: 40px;
      li {
        font-size: 14px;
        font-weight: bold;
        color: #2b2b2b;
      }
      li:nth-child(1) {
        width: 300px;
      }
      li:nth-child(2) {
        width: 246px;
      }
      li:nth-child(3) {
        width: 196px;
      }
      li:nth-child(4) {
        width: 180px;
      }
      li:nth-child(5) {
        width: 152px;
      }
    }
    .order-item {
      width: 1200px;
      height: 160px;
      background-color: #ffffff;
      margin-top: 20px;
      .order-item-title {
        height: 30px;
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        color: #505050;
        opacity: 0.65;
        border-bottom: 1px solid rgba(0, 2, 8, 0.502);
        padding-left: 24px;
        span:nth-child(2) {
          margin: 0 20px;
        }
      }
      ul {
        display: flex;
        padding-left: 24px;
        margin-top: 23px;
        li {
          font-size: 14px;
          font-weight: bold;
          color: #232323;
        }
        p {
          font-weight: bold;
        }
        li:nth-child(1) {
          width: 300px;
          p:nth-child(2) {
            color: #8e8e8e;
            margin-top: 4px;
          }
        }
        li:nth-child(2) {
          width: 246px;
        }
        li:nth-child(3) {
          width: 196px;
        }
        li:nth-child(4) {
          width: 180px;
          p:nth-child(1) {
            color: #e55757;
          }
          p:nth-child(2) {
            color: #8e8e8e;
            margin-top: 14px;
          }
        }
        li:nth-child(5) {
          width: 152px;
        }
        li:nth-child(6) {
          button {
            display: block;
            width: 80px;
            height: 32px;
            border: 1px solid #9f9f9f;
            border-radius: 4px;
            font-size: 14px;
            font-weight: bold;
            color: #9c9c9c;
            outline: none;
            margin-bottom: 10px;
            cursor: pointer;
            background-color: #ffffff;
          }
        }
      }
    }
    .order-page {
      margin-top: 121px;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
