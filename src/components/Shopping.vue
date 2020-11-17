<template>
  <div class="shopping">
    <div class="shopping-order" @click="drawer = true">
      <img src="../assets/image/shopping-cart.png" alt="" />
      <p>我的订单</p>
      <span>3</span>
    </div>
    <el-drawer
      :visible.sync="drawer"
      :with-header="false"
      :modal="false"
      :size="size"
      custom-class="drawer"
      ><!-- custom-class="drawer" 添加类名drawer -->
      <p class="drawer-title">
        <span>我的订单</span>
        <i class="el-icon-close" @click="drawer = false"></i>
      </p>
      <div class="drawer-have">
        <ul class="drawer-item" v-for="item in 2" :key="item">
          <li class="drawer-details">
            <i class="el-icon-circle-close"></i>
            <div class="drawer-box">
              <img
                src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3570507390,331748755&fm=26&gp=0.jpg"
              />
              <ul>
                <li>
                  <span>[一条小团团]</span>
                  <span>粉丝：45万</span>
                </li>
                <li>案例:奥迪/比亚迪/哈佛/五菱</li>
                <li>
                  <p>剧情</p>
                  <p>搞笑</p>
                  <p>颜值</p>
                  <p>音乐</p>
                </li>
                <li>
                  <span>直播2小时</span>
                  <span>￥3600</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="drawer-all">
          <p>共选<span>3</span>个网红</p>
          <p>共计：<span>￥3600</span></p>
        </div>
        <div class="drawer-money">
          <p class="drawer-money-title">费用明细：</p>
          <div>
            <p>网红费：<span>35000.00元</span></p>
            <p>星图费：<span>35000.00元</span></p>
            <p>超火平台：<span>35000.00元</span></p>
          </div>
        </div>
        <div class="drawer-btn">
          <button>联系客服</button>
          <button>立即推广</button>
        </div>
      </div>
      <!-- <div class="drawer-no">
        <div class="no-content">
          <img src="../assets/image/fail.png" alt="" />
          <p>订单区空空如也，</p>
          <p>海量网红等待您的挑选，快去挑选推广吧~</p>
        </div>
        <button>查看已购订单</button>
      </div> -->
    </el-drawer>
  </div>
</template>

<script>
export default {
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {
      drawer: false,
      size: '440px'
    }
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
.shopping {
  width: 40px;
  height: 100%;
  background-color: #101720;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  .shopping-order {
    width: 40px;
    height: 203px;
    background: #34B299;
    margin-top: 160px;
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
      margin: 17px 8px 9px;
    }
    p {
      writing-mode: tb-rl;
      font-size: 18px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 40px;
      letter-spacing: 10px;
    }
    span {
      display: block;
      width: 24px;
      height: 24px;
      background: #FFFFFF;
      border-radius: 50%;
      line-height: 24px;
      margin: 0 auto;
      font-size: 17px;
      font-weight: 800;
      color: #F79220;
      text-align: center;
    }
  }
  .drawer {
    .drawer-title {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      color: #808080;
      border-bottom: 1px solid rgba(112, 112, 112, 0.2);
      height: 55px;
      line-height: 55px;
      span {
        font-weight: bold;
      }
      i {
        font-weight: bold;
        cursor: pointer;
        line-height: 55px;
      }
    }
    .drawer-have {
      // .drawer-item:hover i {
      //   opacity: 1;
      // }
      .drawer-item {
        height: 190px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.2);
        padding-left: 21px;
        .drawer-details {
          i {
            color: #D91818;
            cursor: pointer;
            margin: 18px 0 0 -21px;
            // opacity: 0;
          }
          // i:hover {
          //   color: #D91818;
          // }
          .drawer-box {
            display: flex;
            img {
              width: 50px;
              height: 70px;
              border-radius: 4px;
            }
            ul {
              margin-left: 8px;
              li {
                font-size: 14px;
                color: #9F9F9F;
                line-height: 22px;
              }
              li:nth-child(1) {
                font-weight: bold;
                color: #232A34;
              }
              li:nth-child(3) {
                display: flex;
                p {
                  width: 52px;
                  height: 24px;
                  background: #F4F4F4;
                  border-radius: 18px;
                  text-align: center;
                  line-height: 24px;
                  margin-right: 2px;
                }
              }
              li:nth-child(4) {
                margin: 39px 0 0 130px;
                span:nth-child(1) {
                  font-weight: 800;
                  color: #343434;
                  opacity: 0.81;
                }
                span:nth-child(2) {
                  font-size: 18px;
                  font-weight: 800;
                  color: #F79220;
                  opacity: 0.81;
                  margin-left: 25px;
                }
              }
            }
          }
        }
      }
      .drawer-all {
        height: 90px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.2);
        display: flex;
        justify-content: space-between;
        line-height: 90px;
        font-size: 14px;
        p:nth-child(1) {
          font-weight: 800;
          span {
            color: #DB3E3E;
            font-weight: 800;
          }
        }
        p:nth-child(2) {
          font-weight: 800;
          span {
            font-size: 24px;
            color: #F9844F;
          }
        }
      }
      .drawer-money {
        height: 113px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.2);
        font-size: 14px;
        .drawer-money-title {
          color: #111111;
          opacity: 0.71;
          font-weight: 800;
          margin: 20px 0 15px 0;
        }
        div {
          display: flex;
          flex-wrap: wrap;
          p {
            width: 190px;
            color: #AAAAAA;
            line-height: 32px;
            span {
              color: #676767;
              font-weight: bold;
            }
          }
        }
      }
      .drawer-btn {
        margin: 30px 0;
        text-align: center;
        button:nth-child(1) {
          width: 170px;
          height: 44px;
          border: 1px #F79220 solid;
          border-radius: 4px;
          background-color: #FFFFFF;
          outline: none;
          color: #F79220;
          font-size: 20px;
          font-weight: bold;
          margin-right: 10px;
          cursor: pointer;
        }
        button:nth-child(2) {
          width: 170px;
          height: 44px;
          border-radius: 4px;
          background-color: #F79220;
          color: #FFFFFF;
          outline: none;
          font-size: 20px;
          font-weight: bold;
          border: 0;
          cursor: pointer;
        }
      }
    }
    .drawer-no {
      text-align: center;
      .no-content {
        height: 760px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.2);
        img {
          margin: 200px 0 71px;
        }
        P {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          color: #646261;
        }
      }
      button {
        width: 170px;
        height: 44px;
        border: 1px #F79220 solid;
        border-radius: 4px;
        background-color: #FFFFFF;
        outline: none;
        color: #F79220;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 27px;
      }
    }
  }
}
//抽屉 去掉element-ui的drawer标题选中状态
/deep/ :focus {
  outline: 0;
}
/deep/ .el-drawer__body {
  padding: 15px 25px 0;
  overflow-y: auto;
}
/deep/.el-drawer {
  margin-right: 40px;
}
</style>
