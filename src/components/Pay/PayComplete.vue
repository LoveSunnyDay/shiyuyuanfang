<template>
  <div class="complete">
    <Header></Header>
    <div class="complete-content">
      <img src="../../assets/image/pay-complete.png" alt="" />
      <p class="complete-content-cg">支付成功</p>
      <p class="complete-content-money"><span>￥</span>38000</p>
      <ul>
        <li>
          <span>订单号</span>
          <span>78656787899685545</span>
        </li>
        <li>
          <span>支付时间</span>
          <span>2020年10月31日</span>
        </li>
        <li>
          <span>支付方式</span>
          <span>支付宝支付</span>
        </li>
      </ul>
      <div class="complete-content-btn">
        <button>查看订单</button>
        <button>返回</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.complete {
  width: 1000px;
  margin: 0 auto;
  .complete-content {
    text-align: center;
    margin: 241px 0 158px;
    .complete-content-cg {
      font-size: 18px;
      font-weight: 800;
      color: #191919;
      opacity: 0.75;
      margin: 31px 0 9px 0;
    }
    .complete-content-money {
      font-size: 40px;
      font-weight: 800;
      color: #ff7519;
      span {
        font-weight: bold;
        font-size: 16px;
      }
    }
    ul {
      width: 281px;
      margin: 40px auto 0;
      li {
        display: flex;
        justify-content: space-between;
        span {
          font-size: 14px;
          font-weight: bold;
          line-height: 37px;
          color: #a4a4a4;
        }
      }
    }
    .complete-content-btn {
      margin-top: 140px;
      button:nth-child(1) {
        width: 136px;
        height: 44px;
        background: #ff7519;
        border-radius: 4px;
        border: 0;
        outline: none;
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
        cursor: pointer;
        margin-right: 20px;
      }
      button:nth-child(2) {
        width: 136px;
        height: 44px;
        background: #fff;
        border-radius: 4px;
        border: 0;
        outline: none;
        font-size: 18px;
        font-weight: 800;
        color: #ff7519;
        cursor: pointer;
        border: 1px #ff7519 solid;
      }
      button:nth-child(1):hover {
        transition: .5s;
        background: #e36713;
        color: #ffd7c2;
      }
      button:nth-child(2):hover {
        transition: .5s;
        border: 1px #e36713 solid;
        color: #E36713;
      }
    }
  }
}
</style>
