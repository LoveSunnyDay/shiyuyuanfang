<template>
  <div class="channel-header">
    <router-link to="/Index">
      <img src="~assets/image/logo.png" />
    </router-link>
    <router-link to="/Index/Look" tag="p">网红达人</router-link>
    <router-link to="/Index/Show" tag="p">网红T台</router-link>
    <router-link to="/Index/Video" tag="p">视频素材</router-link>
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
.channel-header {
  height: 93px;
  display: flex;
  line-height: 93px;
  padding-left: 32px;
  img {
    width: 106px;
    height: 33px;
    margin-top: 30px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    color: #202020;
    margin-left: 64px;
    cursor: pointer;
  }
  p:hover {
    color: #cc4b42;
  }
}
</style>
