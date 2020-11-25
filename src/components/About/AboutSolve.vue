<template>
  <div class="about-solve">
    <h2>行业解决方案</h2>
    <div class="about-solve-main">
      <ul class="about-solve-list">
        <li>美妆达人</li>
        <li>电商带货</li>
        <li>汽车达人</li>
        <li>网红打卡</li>
        <li>美食餐饮</li>
        <li>大快销品</li>
        <li>更多行业</li>
      </ul>
      <div class="about-solve-content">
        <li class="solve-content-td">
          <div class="td-icon">
            <img src="../../assets/image/about/solve1.png" alt="" />
            <span>痛点</span>
          </div>
          <ul class="td-top">
            <li class="td-top-one">
              <p>市场潜力大</p>
              <p>竞争激烈</p>
            </li>
            <li>
              <p>营销环境复杂</p>
              <p>渠道选择困难</p>
            </li>
          </ul>
          <ul class="td-top td-top-two">
            <li class="td-top-one">
              <p>对产品不了解</p>
              <p>缺乏购买动因</p>
            </li>
            <li>
              <p>推广成本不易把控</p>
              <p>流量获取难</p>
            </li>
          </ul>
        </li>
        <li class="solve-content-jj">
          <div class="td-icon">
            <img src="../../assets/image/about/solve2.png" alt="" />
            <span>解决方案</span>
          </div>
          <ul>
            <li>
              <p>短视频</p>
              <p>20%</p>
            </li>
            <li>
              <p>直播</p>
              <p>10%</p>
            </li>
            <li>
              <p>微信</p>
              <p>10%</p>
            </li>
            <li>
              <p>小视频</p>
              <p>60%</p>
            </li>
          </ul>
        </li>
        <li class="solve-content-cy">
          <div class="td-icon">
            <img src="../../assets/image/about/solve3.png" alt="" />
            <span>预算充裕</span>
          </div>
          <ul>
            <li>头部明星(1-2个)</li>
            <li>头部和腰部KOL(50-100个)</li>
            <li>素人(200-300个)</li>
          </ul>
        </li>
        <li class="solve-content-yx">
          <div class="td-icon">
            <img src="../../assets/image/about/solve4.png" alt="" />
            <span>预算有限</span>
          </div>
          <ul>
            <li>头部和腰部KOL(5-20个)</li>
            <li>素人(30-100个)</li>
          </ul>
        </li>
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
.about-solve {
  width: 1249px;
  margin: 328px auto 0;
  h2 {
    font-size: 35px;
    font-weight: bold;
    color: #333333;
    text-align: center;
  }
  .about-solve-main {
    display: flex;
    margin-top: 74px;
    .about-solve-list {
      width: 110px;
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
      border-radius: 14px;
      li {
        height: 52px;
        width: 64px;
        font-size: 16px;
        font-weight: 400;
        color: #808080;
        // text-align: center;
        line-height: 64px;
        margin: 0 auto;
        cursor: pointer;
      }
      li:hover {
        color: #2178f9;
      }
    }
    .about-solve-content {
      width: 1092px;
      height: 300px;
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
      border-radius: 14px;
      margin-left: 31px;
      padding-top: 68px;
      display: flex;
      li {
        width: 273px;
        // height: 300px;
        .td-icon {
          display: flex;
          justify-content: space-between;
          img {
            width: 40px;
            height: 40px;
          }
          span {
            font-size: 23px;
            font-weight: bold;
            color: #585858;
            display: block;
            // height: 40px;
            line-height: 40px;
          }
        }
      }
      .solve-content-td {
        // background-color: cornsilk;
        .td-icon {
          width: 100px;
          height: 40px;
          margin: 0 auto;
          cursor: pointer;
        }
        .td-top {
          display: flex;
          font-size: 14px;
          font-weight: 500;
          color: #585858;
          line-height: 20px;
          text-align: center;
          margin-top: 45px;
          height: 40px;
          li:first-child {
            border-right: 1px solid #707070;
          }
          p {
            cursor: pointer;
          }
        }
        .td-top-two {
          margin-top: 62px;
        }
      }
      .solve-content-jj {
        // background-color: #eaf3e4;
        .td-icon {
          width: 147px;
          height: 40px;
          margin: 0 auto;
          cursor: pointer;
        }
        ul {
          display: flex;
          font-size: 14px;
          text-align: center;
          position: relative;
          li {
            cursor: pointer;
            transition: all 0.3s;
          }
          li:hover {
            transform: scale(1.2);
          }
          li:nth-child(1) {
            width: 63px;
            height: 63px;
            background: #f5e49f;
            border-radius: 50%;
            opacity: 0.77;
            position: absolute;
            top: 55px;
            left: 70px;
            p:nth-child(1) {
              margin-top: 20px;
            }
          }
          li:nth-child(2) {
            width: 45px;
            height: 45px;
            background: #cbe5ff;
            border-radius: 50%;
            opacity: 0.74;
            position: absolute;
            top: 42px;
            left: 140px;
            p:nth-child(1) {
              margin-top: 10px;
            }
          }
          li:nth-child(3) {
            width: 45px;
            height: 45px;
            background: #cbffdc;
            border-radius: 50%;
            opacity: 0.74;
            position: absolute;
            top: 140px;
            left: 85px;
            p:nth-child(1) {
              margin-top: 10px;
            }
          }
          li:nth-child(4) {
            width: 71px;
            height: 71px;
            background: #ffcbcb;
            border-radius: 50%;
            opacity: 0.71;
            position: absolute;
            top: 88px;
            left: 145px;
            p:nth-child(1) {
              margin-top: 25px;
            }
          }
        }
      }
      .solve-content-cy {
        // background-color: #e4e7f3;
        .td-icon {
          width: 147px;
          height: 40px;
          margin: 0 auto;
          cursor: pointer;
        }
        ul {
          margin-top: 18px;
          font-size: 14px;
          line-height: 60px;
          color: #585858;
          text-align: center;
          li {
            cursor: pointer;
          }
        }
      }
      .solve-content-yx {
        // background-color: #f3eae4;
        .td-icon {
          width: 147px;
          height: 40px;
          margin: 0 auto;
          cursor: pointer;
        }
        ul {
          margin-top: 18px;
          font-size: 14px;
          line-height: 60px;
          color: #585858;
          text-align: center;
          li {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
