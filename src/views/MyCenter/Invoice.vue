<template>
  <div class="open">
    <p class="open-title">开具发票</p>
    <ul class="open-type">
      <li @click="cur = 0" :class="{ 'order-type-active': cur == 0 }">
        历史发票
      </li>
      <li @click="cur = 1" :class="{ 'order-type-active': cur == 1 }">
        开发票
      </li>
    </ul>
    <div>
      <div v-show="cur == 0">
        <HistoryInvoice></HistoryInvoice>
      </div>
      <div v-show="cur == 1">
        <AwaitInvoice></AwaitInvoice>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryInvoice from '@/components/MyCenter/Invoice/HistoryInvoice'
import AwaitInvoice from '@/components/MyCenter/Invoice/AwaitInvoice'
export default {
  components: {
    HistoryInvoice,
    AwaitInvoice
  },
  data() {
    return {
      currentPage: 1,
      cur: 0 // Tab切换默认显示历史发票
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
  width: 1095px;
  // margin-left: 48px;
  // background-color: #fff;
  .open-title {
    margin: 0 0 23px 0;
    font-size: 16px;
    font-weight: bold;
    color: #171717;
  }
  .open-type {
    display: flex;
    li {
      height: 22px;
      padding: 9px 20px;
      font-size: 14px;
      font-weight: bold;
      color: #545454;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      border-radius: 20px;
      line-height: 22px;
      margin-right: 15px;
      cursor: pointer;
    }
    .order-type-active {
      background-color: #49bea6;
      color: #ffffff;
    }
  }
}
</style>
