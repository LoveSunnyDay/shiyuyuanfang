<template>
  <div class="pay">
    <div class="pay-title">
      <p>支付流程：</p>
      <el-steps :active="2" align-center>
        <el-step title="确认订单" icon="el-icon-s-claim"></el-step>
        <el-step title="支付" icon="el-icon-coin"></el-step>
        <el-step title="支付完成" icon="el-icon-circle-check"></el-step>
      </el-steps>
    </div>
    <div class="pay-order">
      <p class="pay-order-title">我的订单</p>
      <div class="pay-order-content">
        <ul>
          <li>
            <p>网红名称</p>
            <p>推广平台</p>
            <p>服务类型</p>
            <p>价格</p>
            <p>操作</p>
          </li>
          <li v-for="item in 5" :key="item">
            <p>一条小团团</p>
            <p>抖音</p>
            <p>直播一小时</p>
            <p>￥<span>18000.22</span></p>
            <p>
              <span>查看</span>
              <i class="el-icon-delete"></i>
            </p>
          </li>
        </ul>
        <p class="pay-order-text">
          商品总量：
          <span>2</span>
          件
        </p>
        <p class="pay-order-text">
          商品总价：
          <span>￥1999元</span>
        </p>
      </div>
    </div>
    <div class="pay-qr">
      <ul class="pay-qr-money">
        <li>应付金额：<span>38000元</span></li>
        <li>包含：</li>
        <li>服务费：<span>￥218元</span></li>
        <li>税务费：<span>￥1999元</span></li>
      </ul>
      <ul class="pay-qr-sm">
        <li>
          <img
            src="../../assets/image/footer/erweima.jpg"
            alt=""
            class="pay-qr-sm-wx"
          />
          <p>
            <img src="../../assets/image/pay-wx.png" alt="" />
            使用微信扫码支付
          </p>
        </li>
        <li>
          <img
            src="../../assets/image/footer/erweima.jpg"
            alt=""
            class="pay-qr-sm-zfb"
          />
          <p>
            <img src="../../assets/image/pay-zfb.png" alt="" />
            使用支付宝扫码支付
          </p>
        </li>
      </ul>
      <p class="pay-qr-text">支付即同意《付款协议》</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.pay {
  width: 1000px;
  margin: 40px auto 100px;
  .pay-title {
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
  .pay-order {
    margin-top: 80px;
    .pay-order-title {
      font-size: 18px;
      font-weight: bold;
      color: #191919;
    }
    .pay-order-content {
      width: 998px;
      border: 1px solid rgba(112, 112, 112, 0.2);
      border-radius: 2px;
      margin-top: 40px;
      ul {
        margin-bottom: 26px;
        li:nth-child(odd) {
          background-color: #F5F6FA;
        }
        li:first-child {
          p {
            font-weight: bold;
            color: #505050;
          }
        }
        li {
          height: 40px;
          display: flex;
          font-size: 14px;
          line-height: 40px;
          color: #969696;
          padding-left: 24px;
          p:nth-child(1) {
            width: 314px;
          }
          p:nth-child(2) {
            width: 196px;
          }
          p:nth-child(3) {
            width: 196px;
          }
          p:nth-child(4) {
            width: 154px;
            span {
              color: #EE943A;
            }
          }
          p:nth-child(5) {
            cursor: pointer;
            span {
              color: #376FE5;
            }
            i {
              margin-left: 34px;
            }
            i:hover {
              color: red;
            }
          }
        }
      }
      .pay-order-text {
        margin: 0 0 8px 804px;
        font-size: 14px;
        font-weight: bold;
        color: #434343;
        span {
          font-weight: bold;
          color: #EE943A;
        }
      }
    }
  }
  .pay-qr {
    width: 998px;
    height: 690px;
    border: 1px dashed rgba(112, 112, 112, 0.30196078431372547);
    margin-top: 72px;
    position: relative;
    .pay-qr-money {
      width: 250px;
      margin: 80px auto 0;
      li {
        font-size: 14px;
        font-weight: bold;
        color: #434343;
        line-height: 20px;
      }
      li:nth-child(1) {
        font-size: 18px;
        font-weight: 400;
        color: #434343;
        margin-bottom: 20px;
        span {
          font-size: 30px;
          color: #FF5118;
        }
      }
    }
    .pay-qr-sm {
      display: flex;
      margin-top: 80px;
      li {
        width: 200px;
        margin-left: 200px;
        .pay-qr-sm-wx {
          width: 200px;
          height: 200px;
          border: 1px solid #4CBF00;
          border-radius: 4px;
        }
        .pay-qr-sm-zfb {
          width: 200px;
          height: 200px;
          border: 1px solid #02A9F1;
          border-radius: 4px;
        }
        p {
          font-size: 16px;
          font-weight: 500;
          color: #191919;
          // height: 40px;
          line-height: 60px;
          text-align: center;
          img {
            width: 30px;
            height: 30px;
            vertical-align: middle;
            margin-right: 5px;
          }
        }
      }
    }
    .pay-qr-text {
      font-size: 14px;
      font-weight: bold;
      color: #191919;
      opacity: 0.41;
      position: absolute;
      bottom: 30px;
      left: 40px;
    }
  }
}
</style>
