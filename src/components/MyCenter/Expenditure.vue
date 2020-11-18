<template>
  <div class="expenditure">
    <div class="expenditure-title">
      <div class="expenditure-title-left">
        <p>支出明细</p>
        <ul>
          <li>全部</li>
          <li>时间</li>
          <li>平台</li>
        </ul>
      </div>
      <p class="expenditure-title-right">支出总金额：<span>3678.00</span>元</p>
    </div>
    <ul class="expenditure-type">
      <li>创建时间</li>
      <li>流水号</li>
      <li>服务类型</li>
      <li>推广网红名称</li>
      <li>平台</li>
      <li>支出金额</li>
    </ul>
    <div class="expenditure-content">
      <ul v-for="item in 8" :key="item">
        <li>2020/10/31</li>
        <li>1234567897777444</li>
        <li>直播2小时</li>
        <li>一条小团团</li>
        <li>抖音</li>
        <li>35000.00元</li>
      </ul>
      <el-pagination
        class="expenditure-page"
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
.expenditure {
  width: 1200px;
  margin-left: 48px;
  // background-color: chartreuse;
  .expenditure-title {
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
    .expenditure-title-left {
      display: flex;
      p {
        font-size: 20px;
        font-weight: bold;
        color: #171717;
        line-height: 32px;
      }
      ul {
        display: flex;
        li {
          width: 70px;
          height: 32px;
          background: #ffffff;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
          color: #7b7b7b;
          line-height: 32px;
          text-align: center;
          margin-left: 22px;
        }
      }
    }
    .expenditure-title-right {
      font-size: 16px;
      font-weight: bold;
      color: #303030;
      line-height: 32px;
      span {
        font-size: 30px;
        font-weight: 500;
        color: #f08750;
      }
    }
  }
  .expenditure-type {
    display: flex;
    margin: 20px 0;
    height: 40px;
    background-color: #dee2ed;
    border-radius: 0px;
    padding-left: 24px;
    li {
      font-size: 14px;
      font-weight: bold;
      line-height: 40px;
      color: #2b2b2b;
    }
    li:nth-child(1) {
      width: 176px;
    }
    li:nth-child(2) {
      width: 272px;
    }
    li:nth-child(3) {
      width: 224px;
    }
    li:nth-child(4) {
      width: 188px;
    }
    li:nth-child(5) {
      width: 190px;
    }
  }
  .expenditure-content {
    ul:nth-child(odd) {
      background: #ffffff;
    }
    ul {
      display: flex;
      // margin: 20px 0;
      height: 64px;
      border-radius: 0px;
      padding-left: 24px;
      li {
        font-size: 14px;
        font-weight: bold;
        color: #2b2b2b;
        opacity: 0.6;
        line-height: 64px;
      }
      li:nth-child(1) {
        width: 176px;
      }
      li:nth-child(2) {
        width: 272px;
      }
      li:nth-child(3) {
        width: 224px;
      }
      li:nth-child(4) {
        width: 188px;
      }
      li:nth-child(5) {
        width: 190px;
      }
    }
    .expenditure-page {
      margin-top: 121px;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
