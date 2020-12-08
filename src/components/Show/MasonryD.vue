<template>
  <div>
    <ul class="masonry">
      <li class="masonry-item">
        <div @click="dialogVisible = true">
          <img src="../../assets/image/show/shou-one.png" alt="" />

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
        <!-- <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3288873043,3914514780&fm=26&gp=0.jpg"
          alt=""
        /> -->
        <img :src="items.ad_base_url + '/' + items.ad_path" alt="" />
        <p class="masonry-item-name">{{ items.kol.nickname }}</p>
        <transition name="el-zoom-in-bottom">
          <div class="item-text" v-show="seen && index == current">
            <div class="item-text-left">
              <img src="../../assets/image/show/bilibili.png" alt="" />
              <p>{{ items.kol.nickname }}</p>
              <p>{{ items.kol.tags }}</p>
            </div>
            <span class="item-text-border"></span>
            <div class="item-text-right">
              <div class="item-text-right-one">
                <p>{{ items.kol.fan_count }}W</p>
                <p>{{ items.interact_count }}W</p>
              </div>
              <div class="item-text-right-two">
                <p>粉丝量</p>
                <p>点赞量</p>
              </div>
              <div class="item-text-right-one item-text-right-three">
                <p>-</p>
                <p>-</p>
              </div>
              <div class="item-text-right-two">
                <p>种草能力</p>
                <p>预计播放</p>
              </div>
            </div>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  data() {
    return {
      seen: false,
      item: [],
      current: 0, //复制成功提示显示或者隐藏
      dialogVisible: false
    }
  },
  created() {
    // 全部KOL分类列表
    this.axios.get('/kol-plat?plat_id=4').then((res) => {
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
  column-count: 4;
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
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 450px;
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
    .item-text {
      width: 330px;
      height: 120px;
      background: #eeeeee;
      padding-top: 24px;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      .item-text-left {
        width: 152px;
        text-align: center;
        img {
          width: 30px;
          height: 30px;
          margin: 0 auto;
        }
        p:nth-child(2) {
          font-size: 14px;
          font-weight: 800;
          color: #1a1a1a;
          margin-top: 10px;
        }
        p:nth-child(3) {
          width: 66px;
          height: 16px;
          background: rgba(185, 185, 185, 0.4);
          border-radius: 14px;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          color: #5e5e5e;
          margin: 0 auto;
          padding: 6px 11px;
          margin-top: 10px;
          overflow: hidden; //超出文本隐藏
          white-space: nowrap; //溢出不换行
          text-overflow: ellipsis; //溢出省略号显示
        }
      }
      .item-text-border {
        width: 1px;
        height: 84px;
        background-color: rgba(112, 112, 112, 0.10196078431372549);
        margin-top: 7px;
      }
      .item-text-right {
        margin: 0 20px;
        width: 210px;
        div {
          display: flex;
          justify-content: space-between;
        }
        .item-text-right-one {
          font-size: 16px;
          font-family: Arial;
          color: #1a1a1a;
          margin-bottom: 4px;
          p {
            font-weight: bold;
          }
        }
        .item-text-right-two {
          font-size: 14px;
          color: #5e5e5e;
          margin-bottom: 24px;
          p {
            font-weight: 400;
          }
        }
        .item-text-right-three {
          p {
            width: 56px;
            text-align: center;
          }
        }
      }
    }
  }
  .masonry-item:nth-child(2) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(3) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 430px;
    }
  }
  .masonry-item:nth-child(4) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 470px;
    }
  }
  .masonry-item:nth-child(5) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 420px;
    }
  }
  .masonry-item:nth-child(6) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(7) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(8) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 420px;
    }
  }
  .masonry-item:nth-child(9) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(10) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 430px;
    }
  }
  .masonry-item:nth-child(11) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 470px;
    }
  }
  .masonry-item:nth-child(12) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 420px;
    }
  }
  .masonry-item:nth-child(13) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(14) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 450px;
    }
  }
  .masonry-item:nth-child(15) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 430px;
    }
  }
  .masonry-item:nth-child(16) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 470px;
    }
  }
  .masonry-item:nth-child(17) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(18) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 420px;
    }
  }
  .masonry-item:nth-child(19) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 450px;
    }
  }
  .masonry-item:nth-child(20) {
    img {
      display: block;
      height: auto;
      width: 330px;
      height: 470px;
    }
  }
}
</style>
