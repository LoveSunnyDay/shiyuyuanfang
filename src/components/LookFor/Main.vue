<template>
  <div class="lookfor-main">
    <div></div>
    <h1>{{ list.length > 0 && list.name }}</h1>
    <div
      class="lookfor-item"
      v-for="list in list"
      :key="list.id"
      :class="Background(list)"
    >
      <div class="lookfor-item-left">
        <img
          :src="
            list.avatar_base_url
              ? list.avatar_base_url + '/' + list.avatar_path
              : require('../../assets/image/myCenter/icon.png')
          "
          alt=""
        />
        <p class="lookfor-item-left-name">{{ list.nickname }}</p>
        <p class="lookfor-item-left-list">平台：{{ list.plat.name }}</p>
        <p class="lookfor-item-left-list">粉丝数：{{ list.fan_count }}W</p>
      </div>
      <div class="lookfor-item-content">
        <div class="lookfor-item-content-top">
          <div class="lookfor-item-content-top-left">
            <div class="content-top-suggest">
              <p>投放建议：</p>
              <ul v-if="list.tags != ''">
                <!-- <li>垂类美妆</li>
                <li>美食</li> -->
                <li v-for="(item, key) in list.tags.split('、')" :key="key">
                  {{ item }}
                </li>
              </ul>
              <p v-else>更新中~~~</p>
              <!-- <span>{{ list.tags }}</span> -->
            </div>
            <div class="content-top-fans">
              <p>粉丝状况：</p>
              <p>
                特征：
                <span>女粉丝偏多</span>
              </p>
              <p>
                分布：
                <span>河南</span>
                <span>河北</span>
                <span>浙江</span>
              </p>
              <p>
                年龄：
                <span>18-30岁</span>
              </p>
            </div>
          </div>
          <div class="content-top-price">
            <p>{{ list.products[0] && list.products[0].name }}</p>
            <!-- <p>直播一小时</p> -->
            <p>
              <span>￥</span>
              <span>{{ list.products[0] && list.products[0].price }}</span>
              <!-- <span>1111</span> -->
              <span>元</span>
            </p>
          </div>
        </div>
        <div class="lookfor-item-content-bottom">
          <div class="item-content-bottom-left">
            <span>
              网红链接：
              <a
                :href="list.home_url"
                target="_blank"
                v-if="list.home_url != ''"
              >
                {{ list.home_url }}
              </a>
              <span v-else>更新中~~~</span>
            </span>
            <p v-if="list.introduce != ''">
              {{ list.introduce }}
            </p>
            <p v-else>更新中~~~</p>
          </div>
          <!-- <div class="item-content-bottom-right" @click="detailsClick">
            找TA推广
          </div> -->
          <router-link
            :to="{ path: '/DetailKuaiShou/' + list._id }"
            class="item-content-bottom-right"
            target="_blank"
            >找TA推广
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LookForHandel } from '../../services/video'
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      // 商品详情
      category_id: null,
      plat_id: null
    }
  },
  methods: {
    // 根据id判断小边框颜色
    Background(list) {
      // console.log(list.category[0]._id)
      if (list.category.id === 1) {
        return 'Background1'
      } else if (list.category.id === 2) {
        return 'Background2'
      } else if (list.category.id === 3) {
        return 'Background3'
      } else if (list.category.id === 4) {
        return 'Background4'
      } else if (list.category.id === 5) {
        return 'Background5'
      } else if (list.category.id === 6) {
        return 'Background6'
      } else if (list.category.id === 7) {
        return 'Background7'
      } else if (list.category.id === 8) {
        return 'Background8'
      } else if (list.category.id === 9) {
        return 'Background9'
      } else if (list.category.id === 10) {
        return 'Background10'
      }
    }
    // detailsClick() {
    //   // this.$router.push('/DetailKuaiShou/' + 111)
    //   console.log(this.list[0]._id)
    // }
  },
  created() {
    // 保存category_id
    // console.log(this.$route.query.category_id)
    // this.category_id = this.$route.query.category_id
    // LookForHandel(this.category_id,this.plat_id).then((data) => {
    //   // console.log(data.data.data.items)
    //   this.list = data.data.data.items
    //    console.log("this.list",this.list)
    // })
  }
}
</script>

<style lang="less" scoped>
.lookfor-main {
  margin-top: 28px;
  h1 {
    font-size: 18px;
    font-weight: 800;
    color: #1a1a1a;
  }
  .Background1 {
    background: url(../../assets/image/show/meizhuang.png);
  }
  .Background2 {
    background: url(../../assets/image/show/dianshang.png);
  }
  .Background3 {
    background: url(../../assets/image/show/qiche.png);
  }
  .Background4 {
    background: url(../../assets/image/show/daka.png);
  }
  .Background5 {
    background: url(../../assets/image/show/canyin.png);
  }
  .Background6 {
    background: url(../../assets/image/show/kuaixiao.png);
  }
  .Background7 {
    background: url(../../assets/image/show/fushi.png);
  }
  .Background8 {
    background: url(../../assets/image/show/muying.png);
  }
  .Background9 {
    background: url(../../assets/image/show/youxi.png);
  }
  .Background10 {
    background: url(../../assets/image/show/meishi.png);
  }
  .lookfor-item {
    width: 1059px;
    height: 290px;
    // background: url(../../assets/image/show/meizhuang.png);
    margin-top: 19px;
    padding-top: 25px;
    display: flex;
    .lookfor-item-left {
      width: 191px;
      img {
        width: 122px;
        height: 122px;
        border-radius: 50%;
        border: 7px solid #ffffff;
        margin: 0 auto;
        display: block;
      }
      .lookfor-item-left-name {
        font-size: 14px;
        font-weight: 800;
        color: #ffffff;
        text-align: center;
        margin: 20px 0 10px 0;
      }
      .lookfor-item-left-list {
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        color: #ffffff;
        text-align: center;
      }
    }
    .lookfor-item-content {
      margin-left: 34px;
      .lookfor-item-content-top {
        display: flex;
        font-weight: 800;
        color: #5d5d5d;
        height: 147px;
        width: 799px;
        margin-top: 9px;
        justify-content: space-between;
        .lookfor-item-content-top-left {
          display: flex;
          .content-top-suggest {
            width: 170px;
            p {
              font-size: 16px;
              font-weight: 800;
            }
            ul {
              display: flex;
              white-space: nowrap;
              word-break: break-all;
              // overflow-x: auto;
              text-overflow: ellipsis;
              display: -webkit-box;
              li {
                font-size: 14px;
                font-weight: 400;
                color: #4a5c75;
                margin: 10px 10px 0 0;
                background-color: #dde4e2;
                line-height: 25px;
                border-radius: 15px;
                padding: 0 10px;
              }
            }
          }
          .content-top-fans {
            font-size: 14px;
            margin-left: 50px;
            p:nth-child(1) {
              font-size: 16px;
              font-weight: 800;
            }
            p:nth-child(2) {
              font-size: 14px;
              color: #eb6694;
              font-weight: Bold;
              margin-top: 16px;
              span {
                color: #606060;
              }
            }
            p:nth-child(3) {
              font-size: 14px;
              color: #4f8bde;
              font-weight: Bold;
              margin-top: 15px;
              span {
                color: #606060;
                margin-right: 8px;
              }
            }
            p:nth-child(4) {
              font-size: 14px;
              color: #e18360;
              font-weight: Bold;
              margin-top: 15px;
              span {
                color: #606060;
                margin-right: 8px;
              }
            }
          }
        }
        .content-top-price {
          margin-top: 30px;
          text-align: center;
          p:nth-child(1) {
            min-width: 100px;
            font-size: 18px;
            font-weight: 800;
            color: #5d5d5d;
          }
          p:nth-child(2) {
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            line-height: 20px;
            color: rgba(93, 93, 93, 0.6);
            margin-top: 4px;
            span:nth-child(2) {
              font-size: 17px;
              font-family: Arial;
              font-weight: bold;
              line-height: 20px;
              color: #de8d3c;
            }
          }
        }
      }
      .lookfor-item-content-bottom {
        margin-top: 16px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        .item-content-bottom-left {
          width: 523px;
          span {
            font-weight: 400;
            color: rgba(120, 120, 120, 0.6);
            display: block;
            display: flex;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            a {
              font-weight: 400;
              color: rgba(120, 120, 120, 0.6);
              cursor: pointer;
            }
            a:hover {
              color: #0064f9;
            }
          }
          p {
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            color: #1a1a1a;
            margin-top: 14px;
          }
        }
        .item-content-bottom-right {
          width: 110px;
          height: 32px;
          border-radius: 2px;
          border: 2px solid #05a081;
          text-align: center;
          line-height: 32px;
          color: #05a081;
          margin-top: 35px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 800;
        }
      }
    }
  }
}
</style>
