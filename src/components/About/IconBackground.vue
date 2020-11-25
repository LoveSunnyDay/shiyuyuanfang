<template>
  <div class="icon-background-content">
    <img src="../../assets/image/about/xian.png" alt="" class="xian" />
    <ul>
      <li>
        <img src="../../assets/image/about/wai1.png" alt="" class="wai1" />
      </li>
      <li>
        <img src="../../assets/image/about/wai2.png" alt="" class="wai2" />
      </li>
      <li>
        <img src="../../assets/image/about/wai3.png" alt="" class="wai3" />
      </li>
      <li>
        <img src="../../assets/image/about/wai4.png" alt="" class="wai4" />
      </li>
      <li>
        <img src="../../assets/image/about/wai5.png" alt="" class="wai5" />
      </li>
      <li>
        <img src="../../assets/image/about/wai6.png" alt="" class="wai6" />
      </li>
      <li>
        <img src="../../assets/image/about/wai7.png" alt="" class="wai7" />
      </li>
      <li>
        <img src="../../assets/image/about/wai8.png" alt="" class="wai8" />
      </li>
      <li>
        <img src="../../assets/image/about/nei1.png" alt="" class="nei1" />
      </li>
      <li>
        <img src="../../assets/image/about/nei2.png" alt="" class="nei2" />
      </li>
      <li>
        <img src="../../assets/image/about/nei3.png" alt="" class="nei3" />
      </li>
      <li>
        <img src="../../assets/image/about/nei4.png" alt="" class="nei4" />
      </li>
      <li>
        <img src="../../assets/image/about/nei5.png" alt="" class="nei5" />
      </li>
    </ul>
    <div class="icon-content">
      <div class="icon-chatr">
        <div id="chart_1" class="echart"></div>
        <div id="chart_2" class="echart"></div>
      </div>
      <div class="icon-data">
        <ul class="data-btn">
          <li>抖音</li>
          <li>小红书</li>
          <li>微信</li>
          <li>淘宝</li>
          <li>快手</li>
        </ul>
        <ul class="data-content">
          <li>
            <div>
              <span class="progress1">总用户量</span>
              <span class="progress2">2.5亿</span>
            </div>
            <img src="../../assets/image/about/progress.png" alt="" />
          </li>
          <li>
            <div>
              <span class="progress1">曝光率</span>
              <span class="progress2">2.5亿</span>
            </div>
            <img src="../../assets/image/about/progress.png" alt="" />
          </li>
          <li>
            <div>
              <span class="progress1">转化率</span>
              <span class="progress2">85%</span>
            </div>
            <img src="../../assets/image/about/progress.png" alt="" />
          </li>
          <li>
            <div>
              <span class="progress1">影响力</span>
              <span class="progress2">65%</span>
            </div>
            <img src="../../assets/image/about/progress.png" alt="" />
          </li>
        </ul>
      </div>
      <div class="icon-ren">
        <img src="../../assets/image/about/ren1.png" alt="" class="ren1" />
        <img src="../../assets/image/about/ren2.png" alt="" class="ren2" />
        <img src="../../assets/image/about/ren3.png" alt="" class="ren3" />
        <img src="../../assets/image/about/ren4.png" alt="" class="ren4" />
      </div>
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
    echart_1() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart_1'))
      // 绘制图表
      myChart.setOption({
        series: [
          {
            name: '年龄占比',
            type: 'pie', // 设置图表类型为饼图
            radius: '80%', // 饼图的半径
            data: [
              // 数据数组，name 为数据项名称，value 为数据项值
              { value: 235, name: '24~35岁' },
              { value: 274, name: '23岁以下' },
              { value: 310, name: '45岁以上' },
              { value: 335, name: '35~45岁' }
            ]
          }
        ]
      })
    },
    echart_2() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart_2'))
      // 绘制图表
      myChart.setOption({
        series: [
          {
            name: '男女占比',
            type: 'pie', // 设置图表类型为饼图
            radius: '80%', // 饼图的半径
            data: [
              // 数据数组，name 为数据项名称，value 为数据项值
              { value: 235, name: '男' },
              { value: 274, name: '女' }
            ]
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
.icon-background-content {
  li {
    cursor: pointer;
  }
  .xian {
    position: absolute;
    bottom: 0;
    left: 134px;
  }
  .wai1 {
    position: absolute;
    bottom: 36px;
    left: 0;
    transition: all 0.6s;
  }

  .wai2 {
    position: absolute;
    bottom: 234px;
    left: 0;
    transition: all 0.6s;
  }
  .wai3 {
    position: absolute;
    bottom: 374px;
    left: 197px;
    transition: all 0.6s;
  }
  .wai4 {
    position: absolute;
    bottom: 558px;
    left: 449px;
    transition: all 0.6s;
  }
  .wai5 {
    position: absolute;
    bottom: 558px;
    left: 878px;
    transition: all 0.6s;
  }
  .wai6 {
    position: absolute;
    bottom: 374px;
    left: 1128px;
    transition: all 0.6s;
  }
  .wai7 {
    position: absolute;
    bottom: 234px;
    left: 1294px;
    transition: all 0.6s;
  }
  .wai8 {
    position: absolute;
    bottom: 36px;
    left: 1294px;
    transition: all 0.6s;
  }
  .nei1 {
    position: absolute;
    bottom: 65px;
    left: 147px;
    transition: all 0.6s;
  }
  .nei2 {
    position: absolute;
    bottom: 295px;
    left: 322px;
    transition: all 0.6s;
  }
  .nei3 {
    position: absolute;
    bottom: 383px;
    left: 612px;
    transition: all 0.6s;
  }
  .nei4 {
    position: absolute;
    bottom: 295px;
    left: 883px;
    transition: all 0.6s;
  }
  .nei5 {
    position: absolute;
    bottom: 65px;
    left: 1040px;
    transition: all 0.6s;
  }
  .wai1:hover {
    transform: scale(1.2);
  }
  .wai2:hover {
    transform: scale(1.2);
  }
  .wai3:hover {
    transform: scale(1.2);
  }
  .wai4:hover {
    transform: scale(1.2);
  }
  .wai5:hover {
    transform: scale(1.2);
  }
  .wai6:hover {
    transform: scale(1.2);
  }
  .wai7:hover {
    transform: scale(1.2);
  }
  .wai8:hover {
    transform: scale(1.2);
  }
  .nei1:hover {
    transform: scale(1.2);
  }
  .nei2:hover {
    transform: scale(1.2);
  }
  .nei3:hover {
    transform: scale(1.2);
  }
  .nei4:hover {
    transform: scale(1.2);
  }
  .nei5:hover {
    transform: scale(1.2);
  }
  .icon-content {
    width: 860px;
    height: 340px;
    background: #ffffff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    opacity: 1;
    border-radius: 15px;
    position: absolute;
    bottom: -29px;
    left: 228px;
    display: flex;
    .icon-data {
      width: 500px;
      height: 268px;
      border-left: 1px solid #707070;
      margin-top: 36px;
      display: flex;
      .data-btn {
        margin-left: 29px;
        width: 54px;
        height: 210px;
        li {
          background: #f6f6f6;
          border-radius: 13px;
          width: 54px;
          height: 26px;
          font-size: 14px;
          font-weight: bold;
          line-height: 26px;
          color: #545454;
          text-align: center;
          margin-bottom: 20px;
          cursor: pointer;
        }
        li:first-child {
          background: #88ffe7;
        }
      }
      .data-content {
        li {
          margin-bottom: 25px;
          div {
            display: flex;
            justify-content: space-between;
            .progress1 {
              margin-left: 49px;
              font-size: 14px;
              font-weight: 500;
              color: #292929;
            }
            .progress2 {
              height: 16px;
              font-size: 12px;
              font-weight: 500;
              color: #292929;
            }
          }
          img {
            margin: 22px 0 0 22px;
          }
        }
      }
    }
    .icon-ren {
      .ren1 {
        position: absolute;
        bottom: -78px;
        left: 0;
      }
      .ren2 {
        position: absolute;
        bottom: -200px;
        left: 120px;
      }
      .ren3 {
        position: absolute;
        bottom: -220px;
        right: 120px;
      }
      .ren4 {
        position: absolute;
        bottom: -144px;
        right: 0;
      }
    }
  }
  #chart_1 {
    width: 360px;
    height: 170px;
  }
  #chart_2 {
    width: 360px;
    height: 170px;
  }
}
</style>
