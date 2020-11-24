<template>
  <div class="detail">
    <Header></Header>
    <Shopping></Shopping>
    <div class="detail-main">
      <DetailMainTitleBilibili></DetailMainTitleBilibili>
      <div class="detail-main-data">
        <div class="main-data-left">
          <DetailMainItem></DetailMainItem>
          <DetailMainSuggest></DetailMainSuggest>
          <DetailMainImportantBilibili></DetailMainImportantBilibili>
          <!-- <DetailMainPie></DetailMainPie> -->
        </div>
        <div class="main-data-right">
          <DetailMainPortrayalBilibili></DetailMainPortrayalBilibili>
          <!-- <DetailMainStudio></DetailMainStudio> -->
        </div>
      </div>
      <DetailMainDoublication></DetailMainDoublication>
    </div>
    <!-- 右侧 -->
    <div class="detail-operation">
      <DetailOperationDownload></DetailOperationDownload>
      <DetailOperationBuy></DetailOperationBuy>
      <DetailOperationOrdersBilibili></DetailOperationOrdersBilibili>
      <DetailOperationUpdate></DetailOperationUpdate>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Shopping from '@/components/Shopping'
import DetailMainTitleBilibili from '@/components/Detail/DetailMain/DetailMainTitleBilibili'
import DetailMainItem from '@/components/Detail/DetailMain/DetailMainItem'
import DetailMainPortrayalBilibili from '@/components/Detail/DetailMain/DetailMainPortrayalBilibili'
// import DetailMainPie from '@/components/Detail/DetailMain/DetailMainPie'
import DetailMainSuggest from '@/components/Detail/DetailMain/DetailMainSuggest'
import DetailMainImportantBilibili from '@/components/Detail/DetailMain/DetailMainImportantBilibili'
// import DetailMainStudio from '@/components/Detail/DetailMain/DetailMainStudio'
import DetailMainDoublication from '@/components/Detail/DetailMain/DetailMainDoublication'
import DetailOperationDownload from '@/components/Detail/DetailOperation/DetailOperationDownload'
import DetailOperationBuy from '@/components/Detail/DetailOperation/DetailOperationBuy'
import DetailOperationOrdersBilibili from '@/components/Detail/DetailOperation/DetailOperationOrdersBilibili'
import DetailOperationUpdate from '@/components/Detail/DetailOperation/DetailOperationUpdate'
export default {
  // 引入组件
  components: {
    Header,
    Shopping,
    DetailMainTitleBilibili,
    DetailMainItem,
    DetailMainPortrayalBilibili,
    // DetailMainPie,
    DetailMainSuggest,
    DetailMainImportantBilibili,
    // DetailMainStudio,
    DetailMainDoublication,
    DetailOperationDownload,
    DetailOperationBuy,
    DetailOperationOrdersBilibili,
    DetailOperationUpdate
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
      .setAttribute('style', 'background-color:#F3F3F3')
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
.detail {
  width: 1286px;
  margin: 123px auto 70px;
  display: flex;
  justify-content: space-between;
  .detail-main {
    width: 861px;
    background: #ffffff;
    .detail-main-data {
      padding: 22px 50px 0;
      display: flex;
      .main-data-left {
        width: 390px;
      }
      .main-data-right {
        width: 291px;
        margin-left: 80px;
      }
    }
  }
  .detail-operation {
    width: 400px;
  }
}
</style>
