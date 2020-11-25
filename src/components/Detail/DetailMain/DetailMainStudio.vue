<template>
  <div class="data-studio">
    <div class="data-item-title">
      <img src="../../../assets/image/detail/title-blue.png" alt="" />
      <p>该网红直播间数据</p>
    </div>
    <div id="chart_2" class="echart"></div>
    <div class="data-studio-text">
      <p>最近15个直播中最低观看人数为<span>1W</span></p>
      <p>最高观看人数为<span>21W</span></p>
    </div>
  </div>
</template>

<script>
const echarts = require('echarts')
export default {
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {}
  },
  // 方法集合
  methods: {
    echart_2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart_2'))
      // 绘制图表
      myChart.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      })
    }
  },
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
  mounted() {
    this.echart_2()
  },
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
.data-studio {
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
      color: #1a98d9;
      margin: 0 10px;
    }
  }
  #chart_2 {
    height: 400px;
  }
  .data-studio-text {
    font-size: 12px;
    font-weight: bold;
    color: #919191;
    display: flex;
    justify-content: space-between;
    span {
      color: #373737;
    }
  }
}
</style>
