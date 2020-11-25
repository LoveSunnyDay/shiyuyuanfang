<template>
  <div class="data-item">
    <div class="data-item-title">
      <img src="../../../assets/image/detail/title-pink.png" alt="" />
      <p>服务项目</p>
      <p>可多选</p>
    </div>
    <ul class="data-item-main">
      <li>
        <p>直播1小时</p>
        <p>￥3000</p>
      </li>
      <li>
        <p>直播10分钟</p>
        <p>￥3000</p>
      </li>
      <li>
        <p>线下探店</p>
        <p>￥5000</p>
      </li>
      <li>
        <p>非快接单</p>
        <p>￥5000</p>
      </li>
      <li>
        <p>短视频60S</p>
        <p>￥5000</p>
      </li>
      <li>
        <p>额外补贴</p>
        <p>￥5000</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {}
  },
  // 方法集合
  methods: {},
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
.data-item {
  margin-bottom: 20px;
  .data-item-title {
    display: flex;
    line-height: 34px;
    img {
      width: 34px;
      height: 34px;
    }
    p:nth-child(2) {
      font-size: 18px;
      font-weight: bold;
      color: #e5657e;
      margin: 0 10px;
    }
    p:nth-child(3) {
      font-size: 14px;
      font-weight: 500;
      color: #bebdbd;
    }
  }
  .data-item-main {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 97px;
      text-align: center;
      font-size: 14px;
      margin-top: 15px;
      p:nth-child(1) {
        font-weight: 500;
        line-height: 20px;
        color: #535353;
        opacity: 0.81;
      }
      p:nth-child(2) {
        font-weight: 800;
        line-height: 20px;
        color: #292929;
        opacity: 0.81;
      }
    }
  }
}
</style>
