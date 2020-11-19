<template>
  <div class="complete">
    <!-- <Header></Header> -->
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
// import Header from '../Header.vue'
export default {}
</script>

<style lang="less" scoped>
.complete {
  width: 1000px;
  margin: 40px auto 280px;
  .complete-content {
    text-align: center;
    img {
      margin-top: 88px;
    }
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
      color: #FF7519;
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
          color: #A4A4A4;
        }
      }
    }
    .complete-content-btn {
      margin-top: 140px;
      button:nth-child(1) {
        width: 136px;
        height: 44px;
        background: #FF7519;
        border-radius: 4px;
        border: 0;
        outline: none;
        font-size: 18px;
        font-weight: 800;
        color: #FFFFFF;
        cursor: pointer;
        margin-right: 20px;
      }
      button:nth-child(1):hover{
        background: #E36713;
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
        color: #FF7519;
        cursor: pointer;
        border: 1px #FF7519 solid;
      }
      button:nth-child(2):hover{
        border: 1px solid #E36713;
      }
    }
  }
}
</style>
