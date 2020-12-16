<template>
  <div class="shopping">
    <div class="shopping-order" @click="drawer = true">
      <img src="../assets/image/shopping-cart.png" alt="" />
      <p>我的订单</p>
      <span>{{ cartList.itemsCount }}</span>
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
        <ul
          class="drawer-item"
          v-for="item in cartList.products"
          :key="item.id"
        >
          <li class="drawer-details">
            <i class="el-icon-circle-close" @click="deleteProduct(item.order_item_id)"></i>
            <div class="drawer-box">
              <img
                :src="
                  item.avatar ||
                  'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=117012763,3643643580&fm=26&gp=0.jpg'
                "
                class="drawer-box-icon"
              />
              <ul>
                <!-- <li
                  v-for="(item, index) in platoptions"
                  :key="index"
                  class="drawer-box-name"
                >
                  <img
                    :src="item.thumbnail_base_url + '/' + item.thumbnail_path"
                    alt=""
                  /> -->
                <li class="drawer-box-name">
                  <img src="../assets/image/show/douyin.png" alt="" />
                  <p>|</p>
                  <span>{{ item.nickname }}</span>
                  <span>粉丝:{{ item.fan_count }}万</span>
                </li>
                <li class="drawer-box-case">案例：{{ item.cases }}</li>
                <li class="drawer-box-price">
                  <span>{{ item.name }}</span>
                  <span>￥{{ item.price }}</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="drawer-botton">
          <div class="drawer-all">
            <p>
              共选<span>{{ cartList.itemsCount }}</span
              >个网红
            </p>
            <p>
              共计：<span>￥{{ cartList.totalPrice }}</span>
            </p>
          </div>
          <div class="drawer-money">
            <p class="drawer-money-title">费用明细：</p>
            <div>
              <p>网红服务购买费用：<span>{{ cartList.totalPrice }}元</span></p>
              <p>平台手续费：<span>0.00元</span></p>
            </div>
          </div>
          <div class="drawer-btn">
            <button @click="dialogVisible = true" class="drawer-btn-service">
              联系客服
            </button>
            <el-dialog
              title="联系超火引擎"
              :visible.sync="dialogVisible"
              width="440px"
              :modal="false"
            >
              <img src="~assets/image/service.png" alt="" />
            </el-dialog>
            <!-- <button>立即推广</button> -->
            <router-link to="/pay" tag="button" class="drawer-btn-promotion">
              立即推广
            </router-link>
          </div>
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
import { getCookie, checkCookie } from '../utils/index'
export default {
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {
      drawer: false,
      size: '354px',
      dialogVisible: false,
      platoptions: [],
      cartList: [],
      token: ''
    }
  },
  // 方法集合
  methods: {
    async getCartList() {
      const { success, data } = await this.axios.get(
        `/cart?access-token=${this.token}`
      )
      this.cartList = data
      console.log('cartlist', data)
    },
    async deleteProduct(id) {
      const { success, data } = await this.axios({
        url: `/cart/${id}?access-token=${this.token}`,
        method: 'post'
      })
      if (success) {
        this.getCartList()
      } else {
        this.$message.error(data?.message || '删除失败！')
      }
    },
    async getPlatList() {
      const { data } = await this.axios.get('/plat')
      this.platoptions = data && data.items
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
    if (checkCookie('wx-token')) {
      this.token = getCookie('wx-token')?.replace(/\"/g, '')
    }
    if (checkCookie('phone-token')) {
      this.token = getCookie('phone-token')?.replace(/\"/g, '')
    }
    this.getCartList()
    this.getPlatList()
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
    background: #34b299;
    margin-top: 232px;
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
      color: #ffffff;
      line-height: 40px;
      letter-spacing: 10px;
    }
    span {
      display: block;
      width: 24px;
      height: 24px;
      background: #ffffff;
      border-radius: 50%;
      line-height: 24px;
      margin: 0 auto;
      font-size: 17px;
      font-weight: 800;
      color: #f79220;
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
        font-size: 16px;
        font-weight: bold;
        color: #00a581;
      }
      i {
        font-weight: bold;
        cursor: pointer;
        line-height: 55px;
        font-size: 14px;
      }
    }
    .drawer-have {
      .drawer-item {
        height: 158px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.2);
        .drawer-details:hover .el-icon-circle-close {
          opacity: 1;
        }
        .drawer-details {
          cursor: pointer;
          i {
            color: #d91818;
            cursor: pointer;
            margin: 8px 0 10px 0;
            opacity: 0;
            transition: 0.5s;
          }
          .drawer-box {
            display: flex;
            .drawer-box-icon {
              width: 50px;
              height: 50px;
              border-radius: 4px;
            }
            ul {
              margin-left: 8px;
              width: 254px;
              li {
                font-size: 14px;
                color: #9f9f9f;
                line-height: 20px;
              }
              .drawer-box-name {
                font-weight: 900;
                color: #232a34;
                display: flex;
                margin-bottom: 10px;
                img {
                  width: 20px;
                  height: 20px;
                  vertical-align: middle;
                }
                p {
                  margin: 0 8px;
                }
                span:nth-child(3) {
                  // margin-right: 10px;
                  width: 85px;
                  overflow: hidden; //超出文本隐藏
                  white-space: nowrap; //溢出不换行
                  text-overflow: ellipsis; //溢出省略号显示
                }
              }
              .drawer-box-price {
                margin-top: 20px;
                display: flex;
                justify-content: flex-end;
                span:nth-child(1) {
                  font-weight: 800;
                  color: #343434;
                  opacity: 0.81;
                }
                span:nth-child(2) {
                  font-size: 18px;
                  font-weight: 800;
                  color: #f79220;
                  opacity: 0.81;
                  margin-left: 25px;
                }
              }
            }
          }
        }
      }
      .drawer-botton {
        position: fixed;
        bottom: 0;
        right: 65px;
        width: 304px;
        height: 265px;
        background-color: #ffffff;
      }
      .drawer-all {
        height: 46px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.2);
        display: flex;
        justify-content: space-between;
        line-height: 46px;
        font-size: 14px;
        p:nth-child(1) {
          font-weight: 800;
          span {
            color: #db3e3e;
            font-weight: 800;
          }
        }
        p:nth-child(2) {
          font-weight: 800;
          span {
            font-size: 24px;
            color: #f9844f;
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
          justify-content: space-between;
          p {
            color: #aaaaaa;
            line-height: 32px;
            span {
              color: #676767;
              font-weight: bold;
            }
          }
        }
      }
      .drawer-btn {
        margin: 20px 0;
        text-align: center;
        .drawer-btn-service {
          width: 144px;
          height: 44px;
          border: 1px #f79220 solid;
          border-radius: 4px;
          background-color: #ffffff;
          outline: none;
          color: #f79220;
          font-size: 20px;
          font-weight: bold;
          margin-right: 10px;
          cursor: pointer;
          transition: 0.5s;
        }
        .drawer-btn-service:hover {
          border: 1px solid #e88311;
          color: #e88311;
        }
        .drawer-btn-promotion {
          width: 144px;
          height: 44px;
          border-radius: 4px;
          background-color: #f79220;
          color: #ffffff;
          outline: none;
          font-size: 20px;
          font-weight: bold;
          border: 0;
          cursor: pointer;
          transition: 0.5s;
        }
        .drawer-btn-promotion:hover {
          background: #e88311;
          color: #fff4ec;
        }
        img {
          width: 200px;
          height: 200px;
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
        border: 1px #f79220 solid;
        border-radius: 4px;
        background-color: #ffffff;
        outline: none;
        color: #f79220;
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
  padding: 72px 25px 265px;
  overflow-y: auto;
}
/deep/.el-drawer {
  margin-right: 40px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
}
</style>
