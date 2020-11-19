<template>
  <div class="myOrder">
    <p class="order-title">我的订单</p>
    <ul class="order-type">
      <li>全部订单</li>
      <li>待付款</li>
      <li>进行中</li>
      <li>已完成</li>
    </ul>
    <div class="order-content">
      <ul class="order-content-title">
        <li>名称</li>
        <li>数量</li>
        <li>服务类型</li>
        <li>订单状态</li>
        <li>价格</li>
        <li>操作</li>
      </ul>
      <div class="order-item" v-for="item in 4" :key="item">
        <p class="order-item-title">
          <span>订单号：124566777645313212</span>
          <span>时间：2020年10月31日</span>
          <span>16:31</span>
        </p>
        <ul>
          <li>
            <p>一条小团团</p>
            <p>平台：抖音</p>
          </li>
          <li>X1</li>
          <li>直播2小时</li>
          <li>
            <p>待付款</p>
            <p>查看订单</p>
          </li>
          <li>￥36800.00</li>
          <li>
            <button>立即支付</button>
            <button>取消订单</button>
          </li>
        </ul>
      </div>
      <el-pagination
        class="order-page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="100"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped>
.myOrder {
  width: 1200px;
  margin-left: 48px;
  // background-color: #fff;
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
