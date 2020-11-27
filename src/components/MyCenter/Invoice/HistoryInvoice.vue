<template>
  <div class="open-content">
    <ul class="open-content-title">
      <li>名称</li>
      <li>数量</li>
      <li>服务类型</li>
      <li>金额</li>
      <li>状态</li>
    </ul>
    <div class="open-item" v-for="item in 4" :key="item">
      <p class="open-item-title">
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
        <li>￥36800.00</li>
        <li>已开发票</li>
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
  </div>
</template>

<script>
export default {
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {
      currentPage: 1
    }
  },
  // 方法集合
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
}
</script>

<style lang='less' scoped>
.open-content {
  margin-top: 22px;
  .open-content-title {
    display: flex;
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
      width: 306px;
    }
    li:nth-child(2) {
      width: 226px;
    }
    li:nth-child(3) {
      width: 236px;
    }
    li:nth-child(4) {
      width: 215px;
    }
  }
  .open-item {
    height: 160px;
    background-color: #ffffff;
    // margin-top: 20px;
    margin-bottom: 10px;
    .open-item-title {
      height: 30px;
      font-size: 14px;
      font-weight: 400;
      line-height: 30px;
      color: #979797;
      border-bottom: 1px solid #eef0f6;
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
        width: 306px;
        p:nth-child(2) {
          color: #8e8e8e;
          margin-top: 4px;
        }
      }
      li:nth-child(2) {
        width: 226px;
      }
      li:nth-child(3) {
        width: 236px;
      }
      li:nth-child(4) {
        width: 215px;
      }
      li:nth-child(5) {
        color: #24b981;
      }
    }
  }
  .open-page {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
