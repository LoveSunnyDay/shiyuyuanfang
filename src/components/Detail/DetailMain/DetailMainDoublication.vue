<template>
  <div class="detail-main-doublication">
    <div class="data-item-title">
      <img src="../../../assets/image/detail/title-pink.png" alt="" />
      <p>粉丝重合度</p>
    </div>
    <ul>
      <li>
        <p>排行</p>
        <p>相似达人</p>
        <p>内容分类</p>
        <p>粉丝数</p>
        <p>粉丝重合度</p>
      </li>
      <li v-for="item in 5" :key="item">
        <p>1</p>
        <p>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1441836571,2166773131&fm=26&gp=0.jpg"
            alt=""
          />
          <span>小小明儿</span>
        </p>
        <p>
          <span>美妆</span>
        </p>
        <p>
          <span>2W</span>
        </p>
        <p>
          <el-progress :percentage="50"></el-progress>
        </p>
      </li>
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
.detail-main-doublication {
  padding: 0 50px 0;
  margin: 20px 0 50px;
  .data-item-title {
    display: flex;
    line-height: 34px;
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
  ul {
    margin-left: 10px;
    li {
      display: flex;
      height: 52px;
      border-bottom: 1px solid #e5e5e5;
      font-size: 14px;
      line-height: 52px;
      p:nth-child(1) {
        width: 54px;
      }
      p:nth-child(2) {
        width: 183px;
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 10px;
        }
        span {
          color: #666666;
        }
      }
      p:nth-child(3) {
        width: 134px;
        span {
          color: #bebdbd;
        }
      }
      p:nth-child(4) {
        width: 206px;
        span {
          color: #bebdbd;
        }
      }
      p:nth-child(5) {
        width: 184px;
        .el-progress {
          margin-top: 20px;
        }
      }
    }
    li:nth-child(1) {
      p {
        font-weight: bold;
        color: #3b3b3b;
      }
    }
  }
}
</style>
