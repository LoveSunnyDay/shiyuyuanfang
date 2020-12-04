<template>
  <div class="article">
    <Header></Header>
    <h1>妻子因病不愿拖累家人，提出离婚！</h1>
    <p class="article-time">
      <span>秀才有料</span>
      <span>2020-10-26</span>
    </p>
    <h2>一、离婚场景带入</h2>
    <p class="article-details">
      出门南行约35米，左转弯进入二巷右拐，这是通向大路金河路的一个出口。刚拐过去不久，一辆橘红色的环卫小三轮车挡在面前。环卫小车上一位环卫工人正缓慢地用力蹬着三轮车。超车是不可能了，我只好在后面缓慢地跟着走，心里虽然急，却也无可奈何。生活就是这样，无论你遇事心里多么急，无论你遇事心里多么气愤，无论你遇事遭受多大挫折，事情的解决方法不可能都随你的意，情绪激动也不能帮助解决问题，生活总是让人们学会接受，以平静的心去解决，让人们学会面对现实，学会等待，学会聆听，学会沉默，学会拼搏。
    </p>
    <img
      src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=364397611,3916868751&fm=26&gp=0.jpg"
      alt=""
    />
    <h2>二、忽然住院</h2>
    <p class="article-details">
      出门南行约35米，左转弯进入二巷右拐，这是通向大路金河路的一个出口。刚拐过去不久，一辆橘红色的环卫小三轮车挡在面前。环卫小车上一位环卫工人正缓慢地用力蹬着三轮车。超车是不可能了，我只好在后面缓慢地跟着走，心里虽然急，却也无可奈何。生活就是这样，无论你遇事心里多么急，无论你遇事心里多么气愤，无论你遇事遭受多大挫折，事情的解决方法不可能都随你的意，情绪激动也不能帮助解决问题，生活总是让人们学会接受，以平静的心去解决，让人们学会面对现实，学会等待，学会聆听，学会沉默，学会拼搏。
    </p>
    <img
      src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2981971983,3738870601&fm=26&gp=0.jpg"
      alt=""
    />
    <h2>三、希望</h2>
    <p class="article-details">
      出门南行约35米，左转弯进入二巷右拐，这是通向大路金河路的一个出口。刚拐过去不久，一辆橘红色的环卫小三轮车挡在面前。环卫小车上一位环卫工人正缓慢地用力蹬着三轮车。超车是不可能了，我只好在后面缓慢地跟着走，心里虽然急，却也无可奈何。生活就是这样，无论你遇事心里多么急，无论你遇事心里多么气愤，无论你遇事遭受多大挫折，事情的解决方法不可能都随你的意，情绪激动也不能帮助解决问题，生活总是让人们学会接受，以平静的心去解决，让人们学会面对现实，学会等待，学会聆听，学会沉默，学会拼搏。
    </p>
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
.article {
  width: 800px;
  margin: 100px auto 70px;
  h1 {
    font-size: 25px;
    font-weight: bold;
    line-height: 36px;
    color: #212121;
  }
  .article-time {
    font-size: 12px;
    font-weight: 800;
    line-height: 17px;
    color: #617de3;
    margin: 22px 0 38px;
    span:nth-child(1) {
      margin-right: 20px;
    }
  }
  .article-details {
    font-size: 16px;
    font-weight: bold;
    line-height: 28px;
    color: #495158;
    text-align: justify;
    text-indent: 2em;
  }
  h2 {
    font-size: 18px;
    font-weight: 800;
    line-height: 25px;
    color: #212121;
    text-align: center;
    margin: 40px 0;
  }
  img {
    width: 700px;
    height: 270px;
    margin: 30px 0 30px 50px;
    border-radius: 5px;
  }
}
</style>
