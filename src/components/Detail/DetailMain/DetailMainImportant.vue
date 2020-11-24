<template>
  <div class="data-important">
    <div class="data-item-title">
      <img src="../../../assets/image/detail/title-blue.png" alt="" />
      <p>重点数据</p>
    </div>
    <el-timeline>
      <el-timeline-item timestamp="擅长推广的行业" placement="top">
        <p class="important-one">
          快速消费品-化妆品、快速消费品-日化 用品、3C及电器消费类电子产品。
        </p>
      </el-timeline-item>
      <el-timeline-item timestamp="直播数据" placement="top">
        <ul class="important-two">
          <li>
            <p>452W</p>
            <p>任务</p>
            <p>完成度</p>
          </li>
          <li>
            <p>452W</p>
            <p>预期</p>
            <p>观看人数</p>
          </li>
          <li>
            <p>452W</p>
            <p>周均</p>
            <p>直播场次</p>
          </li>
          <li>
            <p>452W</p>
            <p>预估在线</p>
            <p>最高人数</p>
          </li>
        </ul>
      </el-timeline-item>
      <el-timeline-item timestamp="短视频数据" placement="top">
        <ul class="important-two">
          <li>
            <p>452个</p>
            <p>任务完成数</p>
          </li>
          <li>
            <p>452W</p>
            <p>平均点赞</p>
          </li>
          <li>
            <p>452W</p>
            <p>平均转发</p>
          </li>
          <li>
            <p>452W</p>
            <p>平均播放量</p>
          </li>
          <li>
            <p>452W</p>
            <p>平均制作周期</p>
          </li>
          <li>
            <p>452W</p>
            <p>千元播放量</p>
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
.data-important {
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
      color: #1a98d9;
      margin: 0 10px;
    }
  }
  .el-timeline {
    margin-left: 10px;
    .important-one {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: #9a9a9a;
    }
    .important-two {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 88px;
        text-align: center;
        p:nth-child(1) {
          font-size: 16px;
          font-weight: 800;
          line-height: 22px;
          color: #3a3a3a;
        }
        p {
          font-size: 14px;
          font-weight: 500;
          color: #9a9a9a;
          line-height: 20px;
        }
      }
    }
  }
  /deep/.el-timeline-item__timestamp.is-top {
    margin-bottom: 20px;
  }
}
</style>
