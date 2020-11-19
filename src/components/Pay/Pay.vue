<template>
  <div class="pay">
    <div class="pay-order">
      <p class="pay-order-title">我的订单</p>
      <div class="pay-order-content">
           <tr class="content-header">
             <td>推广网红</td>
             <td>服务类型</td>
             <td>单价</td>
             <td>操作</td>
           </tr>
           <tr class="content-con" v-for="i in 5" :key="i">
             <td>
               <div>
                 <img src="../../assets/image/pay.png" alt="">
               </div>
               <div>
                  <h4>
                    <img src="../../assets/image/dou.png" alt="">
                    <span>   |</span>
                    【一条小团团】
                  </h4>
                  <p>案例:奥迪 / 比亚迪 / 哈佛 / 五菱</p>
                  <p>
                    <span>剧情</span>
                    <span>搞笑</span>
                    <span>颜值</span>
                    <span>音乐</span>
                  </p>
                  <span>粉丝：45万</span>
               </div>
             </td>
             <td><span>直播2小时</span></td>
             <td><span>￥3600</span></td>
             <td>
               <span>删除</span>
             </td>
           </tr>
           <tr class="content-foot">
             <td>
                <p class="pay-order-text">
          商品总量：
          <span>2</span>
          件
        </p>
        <p class="pay-order-text">
          商品总价：
          <span>￥1999元</span>
        </p>
             </td>
           </tr>
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
  .pay-order {
    margin-top: 80px;
    .pay-order-title {
     width: 80px;
     height: 28px;
     font-size: 20px;
     font-family: PingFang SC;
     font-weight: bold;
     line-height: 28px;
     color: #00A581;
     opacity: 1;
    }
    .pay-order-content {
      width: 998px;
      border: 1px solid rgba(112, 112, 112, 0.2);
      border-radius: 2px;
      margin-top: 40px;
    .content-header{
      height: 40px;
      background: #F9F9F9;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #343434;
      opacity: 0.81;
      td:nth-child(1){
        width: 340px;
        line-height: 40px;
        padding-left:30px;
      }
      td:nth-child(2){
        width: 220px;
        line-height: 40px;
        padding-left:30px;
      }
      td:nth-child(3){
        width: 220px;
        line-height: 40px;
        padding-left:30px;
      }
      td:nth-child(4){
        width: 98px;
        line-height: 40px;
        padding-left:30px;
      }
    }
    .content-con{
      height: 144px;
      td:nth-child(1){
        padding: 25px 0px 25px 25px;
        div:nth-child(1){
        float: left;
        img{
          margin-right: 5px;
        }
      }
        div:nth-child(2){
          h4{
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: bold;
            line-height: 26px;
            color: #232A34;
            opacity: 1;
            img{
              padding-top: 5px;
            }
          }
          p:nth-chlid(1){
            height:20px ;
           font-size: 14px;
           font-family: PingFang SC;
            font-weight: 400;
            line-height: 20px;
            color: #6D6D6D;
            opacity: 0.6;
          }
          p:nth-chlid(2){
            line-height: 20px;
            span{
              color: #616161;
              display: block;
              width: 52px;
              height: 24px;
              background: rgba(84, 84, 84, 0.5);
              opacity: 0.16;
              border-radius: 18px;
            }
          }
        }
      }
      td:nth-child(2){
         padding-left:30px;
        span{
          line-height: 144px;
        }
      }
       td:nth-child(3){
         padding-left:30px;
        span{
          line-height: 144px;
        }
      }
       td:nth-child(4){
         padding-left:30px;
        span{
          line-height: 144px;
        }
      }
    }
      // .pay-order-text {
      //   margin: 0 0 8px 804px;
      //   font-size: 14px;
      //   font-weight: bold;
      //   color: #434343;
      //   span {
      //     font-weight: bold;
      //     color: #EE943A;
      //   }
      // }
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
