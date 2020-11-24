<template>
  <div class="data-pie">
    <div class="data-item-title">
      <img src="../../../assets/image/detail/title-pink.png" alt="" />
      <p>该网红粉丝手机分布</p>
    </div>
    <p>苹果手机占比46%,粉丝消费能力较好</p>
    <div id="chart_1" class="echart"></div>
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
    echart_1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart_1'))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: '用户统计：',
            type: 'pie',
            radius: ['40%', '80%'],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: { color: '#666666', fontSize: '14' },
                  formatter: function (val) {
                    return val.name.split('-').join('\n')
                  }
                },
                labelLine: {
                  show: true,
                  lineStyle: { color: '#666666' }
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                textColor: '#000'
              }
            },
            data: [
              { value: 50, name: '苹果-20%' },
              { value: 25, name: '华为-20%' },
              { value: 25, name: '小米-20%' },
              { value: 25, name: '三星-20%' }
            ],
            color: ['#51CEC6', '#FFB703', '#5FA0FA', '#E5657E']
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
    this.echart_1()
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
.data-pie {
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
  p:nth-child(2) {
    font-size: 14px;
    font-weight: 500;
    color: #bebdbd;
    text-align: center;
    margin-bottom: 20px;
  }
  #chart_1 {
    width: 291px;
    height: 170px;
  }
}
</style>
