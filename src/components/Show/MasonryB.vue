<template>
  <div>
    <ul class="masonry">
      <li class="masonry-item">
        <div @click="dialogVisible = true">
          <img
            src="../../assets/image/show/shou-one.png"
            alt=""
            class="masonry-item-image"
          />
          <h1>loading......</h1>
          <h2>距离您找到网红还有2分钟</h2>
          <p class="masonry-item-name">联系我们-超火引擎</p>
        </div>
        <el-dialog
          title="联系超火引擎"
          :visible.sync="dialogVisible"
          width="440px"
          :modal="false"
          class="masonry-dialog"
        >
          <img
            src="~assets/image/service.png"
            alt=""
            class="masonry-dialog-image"
          />
        </el-dialog>
      </li>
      <li
        class="masonry-item"
        v-for="(items, index) in item"
        :key="items.id"
        @mouseover="mouseOver(index)"
        @mouseleave="mouseLeave()"
      >
        <router-link
          :to="{ path: '/DetailKuaiShou/' + items.kol.id }"
          target="_blank"
        >
          <img
            :src="items.ad_base_url + '/' + items.ad_path"
            alt=""
            class="masonry-item-image"
          />

          <!-- 遮罩层 -->
          <!-- <div class="masonry-item-mask"></div> -->

          <p class="masonry-item-name">{{ items.kol.nickname }}</p>
          <transition name="el-zoom-in-bottom">
            <div class="item-text" v-show="seen && index == current">
              <img
                :src="
                  items.plat.thumbnail_base_url +
                  '/' +
                  items.plat.thumbnail_path
                "
                alt=""
                class="item-text-icon"
              />
              <div class="item-text-main">
                <div class="item-text-name">
                  <p>{{ items.kol.nickname }}</p>
                  <p>
                    <span> 粉丝量 </span>
                    <span>{{ items.kol.fan_count }}W</span>
                  </p>
                </div>
                <div class="item-text-tag">
                  <p v-if="items.kol.tags != ''">
                    {{ items.kol.tags.replace('、', ' | ') }}
                  </p>
                  <p v-else>更新中~</p>
                  <p>
                    <span>点赞量</span>
                    <span v-if="items.interact_count != '0.00'">
                      {{ items.interact_count }}W
                    </span>
                    <span v-else> - </span>
                  </p>
                </div>
              </div>
            </div>
          </transition>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: false,
      item: [],
      current: 0,
      dialogVisible: false
    }
  },
  created() {
    // 全部KOL分类列表
    this.axios.get('/kol-plat?plat_id=2').then((res) => {
      // console.log(res.data.items)
      this.item = res.data.items
    })
  },
  methods: {
    mouseOver(index) {
      this.seen = true
      this.current = index
    },
    mouseLeave(index) {
      this.seen = false
      this.current = null
    }
  }
}
</script>

<style lang="less" scoped>
.masonry {
  column-count: 5;
  column-gap: 0;
  margin: 12px 0 0 10px;
  width: 1366px;
  .masonry-item {
    padding-top: 10px;
    cursor: pointer;
    position: relative;
    .masonry-dialog {
      text-align: center;
    }
    .masonry-dialog-image {
      width: 200px;
      height: 200px;
      margin: 0 auto;
    }
    .masonry-item-image {
      width: 265px;
      height: 350px;
      // height: 100%;
    }

    h1 {
      position: absolute;
      top: 55px;
      left: 35px;
      font-size: 24px;
      font-weight: 400;
      line-height: 33px;
      color: #ffffff;
    }
    h2 {
      position: absolute;
      top: 92px;
      left: 35px;
      font-size: 16px;
      font-weight: 300;
      line-height: 26px;
      color: #ffffff;
    }
    .masonry-item-name {
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      position: absolute;
      bottom: 24px;
      left: 24px;
    }

    /* 遮罩层样式 */
    .masonry-item-mask:after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      background: #100f0f;
      opacity: 0.2;
      z-index: 1;
      width: 100%;
      height: 100%;
    }

    .item-text {
      width: 235px;
      height: 52px;
      background: #eeeeee;
      opacity: 0.9;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;

      padding: 14px 20px 12px 10px;
      display: flex;
      .item-text-icon {
        width: 34px;
        height: 34px;
        vertical-align: middle;
        margin-top: 10px;
      }
      .item-text-main {
        width: 190px;
        margin-left: 12px;
        font-size: 12px;
        line-height: 20px;
        display: flex;
        flex-flow: column; //垂直排列
        justify-content: space-between; //两端对齐
        .item-text-name {
          display: flex;
          justify-content: space-between;
          p:nth-child(1) {
            width: 65px;
            font-weight: bold;
            color: #1a1a1a;
            overflow: hidden; //超出文本隐藏
            white-space: nowrap; //溢出不换行
            text-overflow: ellipsis; //溢出省略号显示
          }
          p:nth-child(2) {
            span:nth-child(1) {
              font-size: 12px;
              font-weight: 500;
              color: #5e5e5e;
            }
            span:nth-child(2) {
              font-size: 14px;
              font-weight: bold;
              color: #1a1a1a;
            }
          }
        }
        .item-text-tag {
          display: flex;
          justify-content: space-between;
          p:nth-child(1) {
            color: #cc4b42;
            width: 65px;
            overflow: hidden; //超出文本隐藏
            white-space: nowrap; //溢出不换行
            text-overflow: ellipsis; //溢出省略号显示
          }
          p:nth-child(2) {
            span:nth-child(1) {
              font-size: 12px;
              font-weight: 500;
              color: #5e5e5e;
            }
            span:nth-child(2) {
              font-size: 14px;
              font-weight: bold;
              color: #1a1a1a;
            }
          }
        }
      }
    }
  }
  .masonry-item:nth-child(2) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(3) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(4) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(5) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(6) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(7) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(8) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(9) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(10) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(11) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(12) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(13) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(14) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(15) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(16) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(17) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(18) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(19) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(20) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
}
a {
  display: block;
}
</style>
