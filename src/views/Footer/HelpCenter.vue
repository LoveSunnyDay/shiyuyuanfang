<template>
  <div class="help-center">
    <Header></Header>
    <p><b>帮助中心FAQ</b></p>
    <p>Q：请问搜索栏应该怎么填才会搜到我想要搜到的KOL？</p>
    <p>A：例：服装 抖音 3000元</p>
    <p>Q：请问这个下单后我该如何联系KOL？</p>
    <p>
      A：您可以在下单成功后的页面上对应KOL的联系方式，您可直接联系KOL，也可联系超火引擎的商务帮您免费去联系。
    </p>
    <p>Q：请问搜索后推荐的KOL为什么就是我需要的呢？</p>
    <p>
      A：因为您在搜索的时候，我们的大数据系统，会根据您提供的关键字，在数据库内搜索，这个是我们产品的特色哦。
    </p>
    <p>Q：请问这个网红动态简历是什么？</p>
    <p>
      A：网红动态简历是网红的详细数据，您在迷茫怎么选择我们根据您的需求推给您的网红时，您可以根据网红动态简历来判断哪个更适合您，不过这个功能是需要您付一点点钱的哦。
    </p>
    <p>Q：请问下单后网红没做咋办啊？</p>
    <p>
      A：如果下单后网红没有完成，会给您全额退款，请您放心，我们平台对于这方面是有保障的！
    </p>
    <p>Q：请问贵平台的特色是什么？</p>
    <p>A：简单易用，自动匹配，快速联系，网红KOL实名认证的。</p>
    <p>Q：还有其他问题？</p>
    <p>A：可直接超火引擎平台联系客服，人工回答。</p>
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
  beforeCreate() {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:#EBEBEB')
  },
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
  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  },
  // 生命周期 - 销毁完成
  destroyed() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
}
</script>

<style lang='less' scoped>
.help-center {
  width: 1060px;
  background: #ffffff;
  border-radius: 4px;
  margin: 100px auto 70px;
  padding: 40px 70px 85px;
  line-height: 30px;
}
</style>
