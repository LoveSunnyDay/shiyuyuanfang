<template>
  <div class="data-portrayal">
    <div class="data-item-title">
      <img src="../../../assets/image/detail/title-pink.png" alt="" />
      <p>该网红粉丝画像</p>
    </div>
    <el-timeline>
      <el-timeline-item timestamp="性别分布" placement="top">
        <span>女性居多</span>
      </el-timeline-item>
      <el-timeline-item timestamp="年龄分布" placement="top">
        <span>18-23岁居多</span>
      </el-timeline-item>
      <el-timeline-item timestamp="粉丝城市分布" placement="top">
        <span>南京</span>
        <span>广州</span>
        <span>上海</span>
      </el-timeline-item>
      <el-timeline-item timestamp="星座分布" placement="top">
        <ul>
          <li v-for="item in 12" :key="item">
            <p>白羊座</p>
            <el-progress
              :percentage="50"
              :stroke-width="12"
              color="#7B7B7B"
            ></el-progress>
          </li>
        </ul>
      </el-timeline-item>
      <el-timeline-item timestamp="" placement="top"> </el-timeline-item>
    </el-timeline>
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
.data-portrayal {
  width: 291px;
  .data-item-title {
    display: flex;
    line-height: 34px;
    margin-bottom: 20px;
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
  .el-timeline {
    margin-left: 10px;
    span {
      margin-right: 10px;
      font-size: 14px;
      background: #ececec;
      padding: 3px 12px;
      border-radius: 13px;
      font-weight: bold;
      color: #313131;
    }
    ul {
      li {
        margin-bottom: 18px;
        display: flex;
        justify-content: space-between;
        p:nth-child(1) {
          font-size: 14px;
          font-weight: 500;
          color: #666666;
        }
        .el-progress {
          width: 200px;
        }
        /deep/.el-progress__text {
          margin-left: 20px;
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
  /deep/.el-timeline-item__timestamp.is-top {
    margin-bottom: 20px;
  }
}
</style>
