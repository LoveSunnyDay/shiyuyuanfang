<template>
  <div class="open">
    <p class="open-title">我的订单</p>
    <ul class="open-type">
      <li>所有发票</li>
      <li>开发票</li>
    </ul>
    <div class="open-content">
      <ul class="open-content-title">
        <li>名称</li>
        <li>数量</li>
        <li>服务类型</li>
        <li>金额</li>
        <li>状态</li>
        <li>操作</li>
      </ul>
      <div class="open-item" v-for="item in 4" :key="item">
        <p class="open-item-title">
          <!-- <span>订单号：124566777645313212</span> -->
          <span>时间：2020年10月31日</span>
          <span>16:31</span>
        </p>
        <ul>
          <li>
            <p>一条小团团</p>
            <p>平台：抖音</p>
            <p>交易订单号：124566777645313212</p>
          </li>
          <li>X1</li>
          <li>直播2小时</li>
          <li>￥36800.00</li>
          <li>待开</li>
          <li>
            <input type="checkbox" />
          </li>
        </ul>
      </div>
      <el-pagination
        class="open-page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="100"
        :total="400"
      >
      </el-pagination>
      <div class="make-btn">
        <div>
          <p>可开票金额：<span>￥3423.00</span></p>
          <p>已选发票金额：<span>￥3423.00</span></p>
        </div>
        <button>立即开票</button>
      </div>
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
.open {
  width: 1200px;
  margin-left: 48px;
  // background-color: #fff;
  .open-title {
    margin: 20px 0 23px 0;
    font-size: 20px;
    font-weight: bold;
    color: #171717;
  }
  .open-type {
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
      margin-right: 24px;
      cursor: pointer;
    }
  }
  .open-content {
    margin-top: 22px;
    .open-content-title {
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
    .open-item {
      width: 1200px;
      height: 160px;
      background-color: #ffffff;
      margin-top: 20px;
      .open-item-title {
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
          p:nth-child(3) {
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
          color: #fb6a1f;
        }
        li:nth-child(5) {
          width: 152px;
        }
        li:nth-child(6) {
          input {
            margin-top: 25px;
            width: 30px;
            height: 30px;
            // color: #18c199;
          }
        }
      }
    }
    .open-page {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
    }
    .make-btn {
      width: 1200px;
      height: 68px;
      background-color: #ffffff;
      border-radius: 2px;
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-weight: bold;
      color: #8b8b8b;
      line-height: 68px;
      div {
        display: flex;
      }
      p {
        font-weight: bold;
      }
      span {
        color: #292929;
        font-weight: bold;
      }
      p:first-child {
        margin-left: 50px;
        width: 295px;
      }
      button {
        width: 334px;
        height: 68px;
        border-radius: 2px;
        background-color: #18c199;
        border: 0;
        outline: none;
        color: #ffffff;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
