<template>
  <div class="operation-orders">
    <button class="orders-btn">立即下单</button>
    <div class="orders-xian"></div>
    <ul>
      <li>
        <p>请单选或多选服务项:</p>
      </li>
      <li>
        <p>非快接单价格:</p>
        <p>
          <button>￥3600</button>
        </p>
      </li>
      <li>
        <p>快接单价格:</p>
        <p>
          <button>￥3600</button>
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
.operation-orders {
  background: #ffffff;
  border-radius: 4px;
  padding: 30px 35px;
  margin-bottom: 30px;
  .orders-btn {
    width: 330px;
    height: 70px;
    font-size: 20px;
    font-weight: 500;
    color: #00a581;
    background: #ffffff;
    border: 1px #00a581 solid;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
  }
  .orders-xian {
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
