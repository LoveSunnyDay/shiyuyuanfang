<template>
  <div>
    <ul class="masonry" v-for="item in item" :key="item.id">
      <li class="masonry-item" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <img src="https://picsum.photos/348/580?random=1" alt="" />
        <p class="masonry-item-name">{{item.kol.nickname}}</p>
        <transition name="el-zoom-in-bottom">
          <div class="item-text" v-show="seen">
            <div class="item-text-left">
              <img src="../../assets/image/show/bilibili.png" alt="" />
              <p>{{item.kol.nickname}}</p>
              <p>{{item.kol.tags}}</p>
            </div>
            <span class="item-text-border"></span>
            <div class="item-text-right">
              <div class="item-text-right-one">
                <p>{{item.kol.fan_count}}W</p>
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
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      seen: false,
      item: []
    }
  },
  created() {
    // 全部KOL分类列表
    axios.get('https://api.dev.hiifire.com/v1/kol-plat').then(res => {
      // console.log(res.data.data)
      this.item = res.data.data
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
