<template>
  <div>
    <ul class="masonry">
      <li class="masonry-item">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=274952928,879286923&fm=26&gp=0.jpg"
          alt=""
        />
        <h1>找网红做广告</h1>
        <h2>如遇问题请联系超火客服</h2>
        <p class="masonry-item-name">超火客服</p>
      </li>
      <li
        class="masonry-item"
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
        v-for="items in item"
        :key="items.id"
      >
        <!-- v-for="items in item" :key="items.id" -->
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3288873043,3914514780&fm=26&gp=0.jpg"
          alt=""
        />
        <p class="masonry-item-name">{{ items.kol.nickname }}</p>
        <transition name="el-zoom-in-bottom">
          <div class="item-text" v-show="seen">
            <div class="item-text-left">
              <img src="../../assets/image/show/bilibili.png" alt="" />
              <p>{{ items.kol.nickname }}</p>
              <p>{{ items.kol.tags }}</p>
            </div>
            <span class="item-text-border"></span>
            <div class="item-text-right">
              <div class="item-text-right-one">
                <p>{{ items.kol.fan_count }}W</p>
                <p>{{ items.ability }}</p>
              </div>
              <div class="item-text-right-two">
                <p>粉丝量</p>
                <p>种草能力得分</p>
              </div>
              <div class="item-text-right-one">
                <p>{{ items.play_count }}W</p>
                <p>{{ items.interact_count }}W</p>
              </div>
              <div class="item-text-right-two">
                <p>预计播放量</p>
                <p>预计互动量</p>
              </div>
            </div>
          </div>
        </transition>
      </li>
      <!-- <li class="masonry-item">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1235603096,1102356358&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660509671,3471117234&fm=15&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2752148155,155093617&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188755981,3099070149&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3665502566,4066182875&fm=15&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=118353950,2226426098&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3192923591,134493481&fm=15&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3197802539,71734146&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3316307702,2217101271&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3543666205,3763985446&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=117402550,3524737531&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1116313726,3874542020&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1300003980,2178758242&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1079686308,4274782743&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1733582215,4186515281&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3904644935,268508794&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597741797,1693092302&fm=26&gp=0.jpg"
          alt=""
        />
      </li>
      <li class="masonry-item">
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1908051107,2093176700&fm=26&gp=0.jpg"
          alt=""
        />
      </li> -->
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
    this.axios
      .get('https://api.dev.hiifire.com/v1/kol-plat?plat_id=3')
      .then((res) => {
        console.log(res.data.items)
        this.item = res.data.items
      })
  },
  methods: {
    mouseOver() {
      this.seen = true
    },
    mouseLeave() {
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
  width: 1366px;
  .masonry-item {
    padding-top: 10px;
    cursor: pointer;
    position: relative;
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
          overflow: hidden;
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
