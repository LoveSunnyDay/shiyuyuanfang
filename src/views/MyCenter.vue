<template>
  <div class="myCenter">
    <Header></Header>
    <div class="myCenter-nav">
      <div class="myCenter-nav-icon">
        <img
          src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4276219045,4194292839&fm=111&gp=0.jpg"
        />
        <p>15736876884</p>
      </div>
      <ul class="myCenter-nav-list">
        <li class="nav-list-title">
          <img src="../assets/image/myCenter/order.png" />
          订单中心
        </li>
        <router-link
          to="/MyCenter/MyOrder"
          tag="li"
          class="nav-list-item"
          active-class="myCenter-active"
        >
          <i class="iconfont icon-wodedingdan"></i>
          我的订单
        </router-link>
        <li class="nav-list-title">
          <img src="../assets/image/myCenter/finance.png" />
          财务中心
        </li>
        <router-link
          to="/MyCenter/Expenditure"
          tag="li"
          class="nav-list-item"
          active-class="myCenter-active"
        >
          <i class="iconfont icon-zuomingxi"></i>
          支出明细
        </router-link>
        <router-link
          to="/MyCenter/Invoice"
          tag="li"
          class="nav-list-item"
          active-class="myCenter-active"
        >
          <i class="iconfont icon-fapiao"></i>
          开具发票
        </router-link>
        <li class="nav-list-title">
          <img src="../assets/image/myCenter/data.png" />
          资料设置
        </li>
        <router-link
          to="/MyCenter/MyProfile"
          tag="li"
          class="nav-list-item"
          active-class="myCenter-active"
        >
          <i class="iconfont icon-gerenxinxi"></i>
          我的资料
        </router-link>
        <router-link
          to="/MyCenter/News"
          tag="li"
          class="nav-list-item"
          active-class="myCenter-active"
        >
          <i class="iconfont icon-xiaoxi"></i>
          站内消息
        </router-link>
        <router-link
          to="/MyCenter/CompanyInformation"
          tag="li"
          class="nav-list-item"
          active-class="myCenter-active"
        >
          <i class="iconfont icon-kefujingli-"></i>
          公司资料
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  },
  beforeCreate() {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:#F5F6FA')
  },
  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  }
}
</script>

<style lang="less" scoped>
.myCenter {
  width: 1500px;
  margin: 100px auto 80px;
  display: flex;
  .myCenter-nav {
    width: 252px;
    height: 778px;
    background-color: #fff;
    overflow: hidden;
    .myCenter-nav-icon {
      margin-top: 32px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      p {
        font-size: 14px;
        font-weight: 500;
        color: #3d3d3d;
        margin-top: 12px;
      }
    }
    .myCenter-nav-list {
      li {
        height: 56px;
        line-height: 56px;
      }
      .nav-list-title {
        margin-left: 41px;
        font-size: 16px;
        font-weight: bold;
        color: #212121;
        img {
          width: 14px;
          height: 14px;
          margin-right: 4px;
        }
      }
      .nav-list-item {
        font-size: 16px;
        font-weight: bold;
        color: #949494;
        padding-left: 60px;
        cursor: pointer;
        i {
          margin-right: 4px;
        }
      }
    }
  }
}
.myCenter-active {
  background-color: #eafaf8;
  color: #0daf99;
  border-left: 4px solid #32ccb7;
}
</style>
