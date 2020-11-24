<template>
  <div class="data-suggest">
    <div class="data-item-title">
      <img src="../../../assets/image/detail/title-pink.png" alt="" />
      <p>广告投放建议</p>
    </div>
    <p>
      适合内容
      <span>搞笑图片</span>
      <span>搞笑段子</span>
    </p>
    <p>
      发布时间
      <span>14-16点</span>
    </p>
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
.data-suggest {
  .data-item-title {
    display: flex;
    line-height: 34px;
    margin-bottom: 20px;
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
  }
  p {
    font-size: 14px;
    font-weight: bold;
    color: #5b5a5a;
    margin-bottom: 25px;
    margin-left: 10px;
    span {
      background: #ececec;
      padding: 3px 12px;
      font-size: 14px;
      font-weight: bold;
      color: #343434;
      margin-left: 10px;
      border-radius: 13px;
    }
  }
}
</style>
