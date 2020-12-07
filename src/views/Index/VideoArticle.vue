<template>
  <div class="article">{{ items.body }}</div>
</template>

<script>
import { ArticleDetails } from '../../services/video'

export default {
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {
      id: null,
      items: {}
    }
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
  created() {
    // 保存id
    this.id = this.$route.params.id

    //根据id请求详情数据
    ArticleDetails(this.id).then((res) => {
      // console.log(res.data.data)
      this.items = res.data.data
    })
  },
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
