<template>
  <div class="about-koubei">
    <div class="about-koubei-title">
      <p>平台服务口碑</p>
      <p>26万+一线品牌客户共同选择</p>
    </div>
    <div class="about-koubei-content">
      <div class="koubei-content-left">
        <p>雅培</p>
        <p>实力派 | 雅培CEO连续九年蝉联“全球最佳CEO”榜单</p>
        <p>
          雅培公司首席执行官白千里（Miles
          White）先生今年再次入选《巴伦周刊》该榜单，并且是连续第九年蝉联该榜单，而在所有30名入选的CEO当中，能够达到此成就的仅有七人。
        </p>
      </div>
      <div class="koubei-content-right">
        <div class="content-right-top">
          <p>中国移动</p>
          <p>
            三大通讯巨头之一.有相关数据调查显示中国移动都是
            居于首位，显示电信第二、联通第三，2017年中国移
            动营运收入7405亿元，经营收入3662亿元，联通营业
            收入为2748亿元，相比较而言，中国移动的经济实力 是最强的。
          </p>
        </div>
        <div class="content-right-bottom">
          <p>名片全能王</p>
          <p>
            创始人兼CEO镇立新，人工智能与模式识别博士，拥有 超过 100
            项发明专利，曾任摩托罗拉全球实验室主要负
            责人；联合创始人陈飒曾在上海文广传媒集团（SMG） 担任主持人、制片人。
          </p>
        </div>
      </div>
    </div>
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
.about-koubei {
  width: 1198px;
  margin: 97px auto 170px;
  .about-koubei-title {
    width: 456px;
    height: 200px;
    background: url(../../assets/image/about/koubei-title.png);
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    p:nth-child(1) {
      font-size: 45px;
      font-weight: 500;
      color: #363636;
      margin-top: 85px;
    }
    p:nth-child(2) {
      font-size: 20px;
      font-weight: 500;
      color: #757474;
      margin-top: 45px;
    }
  }
  .about-koubei-content {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    .koubei-content-left {
      width: 410px;
      height: 574px;
      background: url(../../assets/image/about/koubei1.png);
      overflow: hidden;
      font-size: 14px;
      line-height: 30px;
      color: #ffffff;
      p:nth-child(1) {
        width: 152px;
        height: 61px;
        background: url(../../assets/image/about/koubei4.png);
        font-size: 38px;
        font-weight: 500;
        color: #ffffff;
        text-align: center;
        line-height: 61px;
        margin: 52px auto 0;
      }
      p:nth-child(2) {
        width: 323px;
        margin: 36px auto 0;
        text-indent: 2em;
      }
      p:nth-child(3) {
        width: 323px;
        margin: 0 auto;
        text-indent: 2em;
      }
    }
    .koubei-content-right {
      font-size: 14px;
      line-height: 24px;
      color: #ffffff;
      .content-right-top {
        width: 754px;
        height: 270px;
        background: url(../../assets/image/about/koubei2.png);
        overflow: hidden;
        p:nth-child(1) {
          width: 204px;
          height: 61px;
          background: url(../../assets/image/about/koubei5.png);
          font-size: 30px;
          font-weight: 500;
          line-height: 61px;
          color: #ffffff;
          margin: 42px 0 0 40px;
          text-align: center;
        }
        p:nth-child(2) {
          width: 333px;
          margin: 31px 0 0 40px;
        }
      }
      .content-right-bottom {
        width: 754px;
        height: 270px;
        margin-top: 34px;
        background: url(../../assets/image/about/koubei3.png);
        overflow: hidden;
        p:nth-child(1) {
          width: 204px;
          height: 61px;
          background: url(../../assets/image/about/koubei6.png);
          font-size: 30px;
          font-weight: 500;
          line-height: 61px;
          color: #ffffff;
          margin: 42px 0 0 40px;
          text-align: center;
        }
        p:nth-child(2) {
          width: 333px;
          margin: 31px 0 0 40px;
        }
      }
    }
  }
}
</style>
