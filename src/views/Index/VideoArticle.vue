<template>
  <div class="article">
    <Header></Header>
    <h1>{{ items.title }}</h1>
    <span>{{ (items.published_at * 1000) | formatDate }}</span>
    <p v-html="items.body"></p>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { ArticleDetails } from '../../services/video'
import { formatDate } from '../../plugins/filters'
export default {
  // 引入组件
  components: {
    Header
  },
  data() {
    // 这里存放数据
    return {
      id: null,
      items: {}
    }
  },
  filters: {
    formatDate(time) {
      var data = new Date(time)
      return formatDate(data, 'yyyy-MM-dd')
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
.article {
  width: 800px;
  margin: 100px auto;
  h1 {
    font-size: 25px;
    font-weight: bold;
    line-height: 36px;
    color: #212121;
  }
  span {
    font-size: 12px;
    font-weight: 800;
    line-height: 30px;
    color: #617de3;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;
    color: #495158;
  }
}
</style>
