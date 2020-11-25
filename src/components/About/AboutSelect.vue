<template>
  <div class="about-select">
    <p class="about-select-title">为何选择超火引擎推广平台</p>
    <p class="about-select-text">
      VIP项目小组全程跟进，个性化定制推广策略，权威保障数据明细化，投放效果可查真实流量资源，智能投放大数据锁定目标受众，精准投放，多维度账号智能筛选高性价比超全一手资源，绝对价格
    </p>
    <p class="about-select-text-two">
      优势与主流媒体长期合作，效果监测，实时优化，不浪费资源
    </p>
    <ul>
      <li><img src="../../assets/image/about/select1.png" alt="" /></li>
      <li><img src="../../assets/image/about/select2.png" alt="" /></li>
      <li><img src="../../assets/image/about/select3.png" alt="" /></li>
      <li><img src="../../assets/image/about/select4.png" alt="" /></li>
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
.about-select {
  width: 100%;
  height: 700px;
  background: url(../../assets/image/about/select.png);
  overflow: hidden;
  margin-top: 142px;
  .about-select-title {
    width: 420px;
    height: 49px;
    font-size: 35px;
    font-weight: bold;
    line-height: 49px;
    color: #01d0d8;
    margin: 150px auto 57px;
  }
  .about-select-text {
    width: 1218px;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    margin: 0 auto 10px;
  }
  .about-select-text-two {
    width: 436px;
    font-weight: 400;
    color: #ffffff;
    margin: 0 auto;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 1024px;
    margin: 120px auto 0;
  }
}
</style>
