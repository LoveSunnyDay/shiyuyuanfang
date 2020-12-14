<template>
  <div class="pay">
    <Header></Header>
    <div class="pay-order">
      <p class="pay-order-title">我的订单</p>
      <div class="pay-order-content">
        <div class="content-title">
          <p>推广网红</p>
          <p>单价</p>
          <p>服务类型</p>
          <p>操作</p>
        </div>
        <ul class="content-item" v-for="item in 3" :key="item">
          <li class="content-item-icon">
            <img
              src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=117012763,3643643580&fm=26&gp=0.jpg"
            />
            <ul class="content-main">
              <li class="main-name">
                <img src="@/assets/image/show/douyin.png" class="main-icon" />
                <p>|</p>
                <p>[一条小团团]</p>
              </li>
              <li>案例:奥迪/比亚迪/哈佛/五菱</li>
              <li>
                <p>剧情</p>
                <p>搞笑</p>
                <p>颜值</p>
                <p>音乐</p>
              </li>
              <li>粉丝：45万</li>
            </ul>
          </li>
          <li class="content-item-price">￥3600.00元</li>
          <li class="content-item-type">直播2小时</li>
          <li class="content-item-del"><span>删除</span></li>
        </ul>
        <div class="pay-order-price">
          <ul>
            <li>
              商品总量：
              <span>2</span>
              件
            </li>
            <li>商品总价： <span>￥1999元</span></li>
          </ul>
        </div>
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
          <p @click="goToPay">
            <img src="../../assets/image/pay-zfb.png" alt="" />
            使用支付宝扫码支付
          </p>
        </li>
      </ul>
      <p class="pay-qr-text">
        支付即同意<router-link to="/PaymentAgreement" target="_blank"
          >《付款协议》</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import {getCookie,checkCookie} from '../../utils/index'
export default {
  components: {
    Header
  },
  methods:{
   async goToPay(){
      let token=''
      if(checkCookie('wx-token')){
        token=getCookie('wx-token')?.replace(/\"/g, '')
      }
      if(checkCookie('phone-token')){
        token=getCookie('phone-token')?.replace(/\"/g, '')
      }
      if(!token) return
      const params = new FormData()
      params.append('PaymentType', 1)
      // 提交订单
      const { success,data } = await this.axios({
        method: 'post',
        url:'/cart/one-step-pay/5?access-token=' +token,
        data:params,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      const div = document.createElement('div')
      div.innerHTML = data?.body //此处form就是后台返回接收到的数据
      document.body.appendChild(div)
      // document.forms[0].submit()
    }
  }
}
</script>

<style lang="less" scoped>
.pay {
  width: 1000px;
  margin: 116px auto 26px;
  .pay-order {
    margin-top: 80px;
    .pay-order-title {
      font-size: 20px;
      font-weight: bold;
      line-height: 28px;
      color: #00a581;
    }
    .pay-order-content {
      width: 998px;
      border: 1px solid rgba(112, 112, 112, 0.2);
      border-radius: 2px;
      margin-top: 12px;
      .content-title {
        display: flex;
        padding-left: 30px;
        height: 40px;
        background: #f9f9f9;
        line-height: 40px;
        margin-bottom: 28px;
        p {
          font-size: 14px;
          font-weight: 800;
          color: #343434;
          opacity: 0.81;
        }
        p:nth-child(1) {
          width: 420px;
        }
        p:nth-child(2) {
          width: 220px;
        }
        p:nth-child(3) {
          width: 228px;
        }
      }
      .content-item {
        display: flex;
        padding: 0 0 28px 30px;
        .content-item-icon {
          width: 420px;
          height: 94px;
          display: flex;
          img {
            width: 68px;
            height: 94px;
          }
          .content-main {
            margin-left: 8px;
            li:nth-child(1) {
              height: 20px;
              line-height: 20px;
              display: flex;
              .main-icon {
                width: 20px;
                height: 20px;
              }
              p {
                font-size: 14px;
                font-weight: bold;
                color: #232a34;
              }
              p:nth-child(2) {
                font-weight: 400;
                margin: 0 8px;
              }
            }
            li:nth-child(2) {
              font-size: 14px;
              color: #9f9f9f;
              line-height: 22px;
            }
            li:nth-child(3) {
              display: flex;
              p {
                width: 52px;
                height: 24px;
                background: #f4f4f4;
                border-radius: 18px;
                text-align: center;
                line-height: 24px;
                margin-right: 2px;
                font-size: 14px;
                color: #828282;
              }
            }
            li:nth-child(4) {
              font-size: 14px;
              font-weight: bold;
              line-height: 40px;
              color: #232a34;
              opacity: 0.86;
            }
          }
        }
        .content-item-price {
          width: 220px;
          line-height: 94px;
          font-size: 14px;
          font-weight: 800;
          color: #343434;
          opacity: 0.81;
        }
        .content-item-type {
          width: 228px;
          line-height: 94px;
          font-size: 14px;
          font-weight: 800;
          color: #343434;
          opacity: 0.81;
        }
        .content-item-del {
          line-height: 94px;
          font-size: 14px;
          color: #343434;
          opacity: 0.81;
          span {
            cursor: pointer;
            font-weight: 800;
          }
        }
      }
      .pay-order-price {
        height: 108px;
        border-top: 1px solid rgba(112, 112, 112, 0.2);
        ul {
          margin: 28px 0 0 830px;
          li {
            font-size: 14px;
            font-weight: bold;
            color: #434343;
            line-height: 26px;
            span {
              font-weight: bold;
              color: #ee943a;
            }
          }
        }
      }
    }
  }
  .pay-qr {
    width: 998px;
    height: 690px;
    border: 1px dashed rgba(112, 112, 112, 0.30196078431372547);
    margin-top: 41px;
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
          color: #ff5118;
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
          border: 1px solid #4cbf00;
          border-radius: 4px;
        }
        .pay-qr-sm-zfb {
          width: 200px;
          height: 200px;
          border: 1px solid #02a9f1;
          border-radius: 4px;
        }
        p {
          font-size: 16px;
          font-weight: 500;
          color: #191919;
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
      color: #a0a0a0;
      // opacity: 0.41;
      position: absolute;
      bottom: 30px;
      left: 40px;
      a {
        color: #a0a0a0;
      }
    }
  }
}
</style>
