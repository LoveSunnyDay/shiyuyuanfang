<template>
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
</style>
