<template>
  <div class="complete">
    <div class="complete-title">
      <p>支付流程：</p>
      <el-steps :active="3" align-center>
        <el-step title="确认订单" icon="el-icon-s-claim"></el-step>
        <el-step title="支付" icon="el-icon-coin"></el-step>
        <el-step title="支付完成" icon="el-icon-circle-check"></el-step>
      </el-steps>
    </div>
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
export default {}
</script>

<style lang="less" scoped>
.complete {
  width: 1000px;
  margin: 40px auto 280px;
  .complete-title {
    p {
      font-size: 18px;
      font-weight: bold;
      color: #191919;
      margin-bottom: 25px;
    }
    /deep/.el-step__head.is-finish {
      color: #FD9134;
      border-color: #FFD8B7;
    }
    /deep/.el-step__title.is-finish {
      font-size: 14px;
      font-weight: bold;
      color: #191919;
      opacity: 0.55;
    }
    /deep/.el-step__title.is-process {
      font-size: 14px;
      font-weight: bold;
      color: #191919;
      opacity: 0.55;
    }
  }
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
    }
  }
}
</style>
