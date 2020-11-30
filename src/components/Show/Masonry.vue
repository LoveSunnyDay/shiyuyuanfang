<template>
  <div>
    <ul class="masonry">
      <li class="masonry-item" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <img src="https://picsum.photos/348/580?random=1" alt="" />
        <p class="masonry-item-name">我是你的cc啊</p>
        <transition name="el-zoom-in-bottom">
          <div class="item-text" v-show="seen">
            <div class="item-text-left">
              <img src="../../assets/image/show/bilibili.png" alt="" />
              <p>我是你的cc啊</p>
              <p>段子手/搞笑</p>
            </div>
            <span class="item-text-border"></span>
            <div class="item-text-right">
              <div class="item-text-right-one">
                <p>3766W</p>
                <p>88</p>
              </div>
              <div class="item-text-right-two">
                <p>粉丝量</p>
                <p>种草能力得分</p>
              </div>
              <div class="item-text-right-one">
                <p>51W</p>
                <p>51W</p>
              </div>
              <div class="item-text-right-two">
                <p>预计播放量</p>
                <p>预计互动量</p>
              </div>
            </div>
          </div>
        </transition>
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/420?random=2" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/530?random=3" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/470?random=4" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/390?random=5" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/410?random=6" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/460?random=7" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/430?random=8" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/500?random=9" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/480?random=10" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/520?random=11" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/460?random=12" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/490?random=13" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/560?random=14" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/510?random=15" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/420?random=16" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/500?random=17" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/420?random=18" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/510?random=19" alt="" />
      </li>
      <li class="masonry-item">
        <img src="https://picsum.photos/348/450?random=20" alt="" />
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
      item: []
    }
  },
  created() {
    // 全部KOL分类列表
    this.axios.get('https://api.dev.hiifire.com/v1/kol-plat').then((res) => {
      console.log(res)
      this.item = res.data
    })
  },
  methods: {
    mouseOver() {
      this.seen = true
    },
    mouseLeave(item) {
      this.seen = false
    }
  }
}
</script>
<style lang="less" scoped>
.masonry {
  column-count: 4;
  column-gap: 0;
  margin: 12px 0 0 10px;
  width: 1440px;
  .masonry-item {
    padding-top: 10px;
    cursor: pointer;
    position: relative;
    img {
      display: block;
      height: auto;
      width: 348px;
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
      width: 348px;
      height: 120px;
      background: #e5e6e5;
      opacity: 0.86;
      padding-top: 24px;
      position: absolute;
      bottom: 0;
      left: 0;
      // padding: 24px 42px 0 0;
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
        }
      }
      .item-text-border {
        width: 1px;
        height: 84px;
        background-color: rgba(112, 112, 112, 0.10196078431372549);
        margin-top: 7px;
      }
      .item-text-right {
        padding: 0 42px 0 27px;
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
      }
    }
  }
}
</style>
