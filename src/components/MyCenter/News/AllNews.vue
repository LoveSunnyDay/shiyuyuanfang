<template>
  <div>
    <ul class="news-content">
      <li v-for="item in 6" :key="item">
        <img src="../../../assets/image/myCenter/news1.png" alt="" />
        <div class="news-content-main">
          <div class="content-main-tag">
            <span>项目进度提醒</span>
            <span>11/30 14:30</span>
          </div>
          <p>订单号：125168761791970000</p>
          <p>
            您已经支付完订单的所有款项，目前项目进入策划期，如果在该项目中产生任何疑问，直接与负责该项目的MCN公司联系！
          </p>
        </div>
        <i class="el-icon-delete"></i>
      </li>
    </ul>
    <el-pagination
      class="news-page"
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
