<template>
  <div class="fail">
    <Header></Header>
    <img src="../assets/image/fail.png" alt="" />
    <p>404警告！很不幸，您探索了一个未知领域！</p>
    <router-link to="/index" tag="button">返回首页</router-link>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  // 引入组件
  components: {
    Header
  },
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
.fail {
  margin: 332px 0 387px 0;
  text-align: center;
  p {
    font-size: 20px;
    font-weight: bold;
    color: #808080;
    margin: 148px 0 119px 0;
  }
  button {
    width: 136px;
    height: 44px;
    border: 1px solid #707070;
    border-radius: 4px;
    font-weight: 800;
    color: #808080;
    font-size: 18px;
    outline: none;
    background-color: #ffffff;
    cursor: pointer;
  }
  button:hover {
    transition: 0.5s;
    background-color: #ff7519;
    color: #ffffff;
    border: 0;
  }
}
</style>
