<template>
  <div class="operation-download">
    <button class="download-btn">
      <i class="el-icon-download"></i>
      立即下载
    </button>
    <div class="download-xian"></div>
    <ul>
      <li>
        <p>价格</p>
        <p>8元/一份</p>
      </li>
      <li>
        <p>说明</p>
        <p>无论以何种方式购买过该报告 不会重复计费，可以多次下载该日期报告。</p>
      </li>
      <li>
        <p>水印</p>
        <p>下载的网红数据报告会带有“来源于超火引擎”。</p>
      </li>
      <li>
        <p>企业客服</p>
        <p>
          <button>咨询企业客服</button>
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
.operation-download {
  background: #ffffff;
  border-radius: 4px;
  padding: 30px 35px;
  margin-bottom: 30px;
  .download-btn {
    width: 330px;
    height: 70px;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    background: #00a581;
    border: 0;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
  }
  .download-xian {
    height: 1px;
    background: #f0f0f0;
    margin: 30px 0;
  }
  ul {
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 22px;
      font-size: 14px;
      line-height: 22px;
      p:nth-child(1) {
        color: #262626;
        font-weight: bold;
      }
      p:nth-child(2) {
        color: #838383;
        width: 160px;
        button {
          width: 156px;
          height: 30px;
          border: 1px solid #888888;
          background: #ffffff;
          border-radius: 4px;
          outline: none;
          font-weight: bold;
          color: #333333;
          cursor: pointer;
        }
      }
    }
    li:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
