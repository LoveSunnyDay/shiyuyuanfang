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
    <ExpandMore :isLastPage="isLastPage" @expandMore="expandMore"></ExpandMore>
  </div>
</template>

<script>
import ExpandMore from '@/components/ExpandMore'
export default {
  components: {
    ExpandMore
  },
  data() {
    return {
      seen: false,
      item: [],
      current: 0,
      dialogVisible: false,
      page: 1,
      pageCount: '',
      isLastPage: false
    }
  },
  created() {},
  // watch: {
  //   handler() {
  //     this.page = 1
  //     this.isLastPage = false
  //     this.queryKol()
  //   }
  // },
  mounted() {
    this.queryKol()
  },
  methods: {
    mouseOver(index) {
      this.seen = true
      this.current = index
    },
    mouseLeave(index) {
      this.seen = false
      this.current = null
    },
    queryKol() {
      // 全部KOL分类列表
      this.axios.get('/kol-plat?plat_id=1&page=' + this.page).then((res) => {
        // this.item = res.data.items
        this.pageCount = res.data._meta.pageCount
        this.item = this.item.concat(res.data.items) //点击加载更多，不清空老数据，拼接老数据
      })
    },
    expandMore() {
      console.log('this.pageCount', this.pageCount)
      console.log('this.page', this.page)
      if (this.page < this.pageCount) {
        this.page += 1
        this.queryKol()
      } else {
        this.isLastPage = true
      }
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
  .masonry-item:nth-child(21) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(22) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(23) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(24) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
  .masonry-item:nth-child(25) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(26) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(27) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(28) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(29) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(30) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(31) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(32) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(33) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(34) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(35) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
  .masonry-item:nth-child(36) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(37) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(38) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(39) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(40) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(41) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(42) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
  .masonry-item:nth-child(43) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(44) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(45) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(46) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(47) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(48) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(49) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(50) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(51) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(52) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(53) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(54) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(55) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(56) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(57) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(58) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(59) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(60) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(61) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(62) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(63) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(64) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(65) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
  .masonry-item:nth-child(66) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(67) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(68) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(69) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(70) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(71) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(72) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(73) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(74) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(75) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(76) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
  .masonry-item:nth-child(77) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(78) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(79) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(80) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(81) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(82) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(83) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
  .masonry-item:nth-child(84) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(85) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(86) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(87) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(88) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(89) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(90) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(91) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(92) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(93) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(94) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(95) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(96) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(97) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(98) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(99) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(100) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(101) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(102) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(103) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(104) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(105) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(106) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
  .masonry-item:nth-child(107) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(108) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(109) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(110) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(111) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(112) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(113) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(114) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(115) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(116) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(117) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
  .masonry-item:nth-child(118) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(119) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(120) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(121) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(122) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(123) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(124) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
  .masonry-item:nth-child(125) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(126) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(127) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(128) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(129) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(130) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(131) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(132) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(133) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(134) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(135) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(136) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(137) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(138) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(139) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(140) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(141) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(142) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(143) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(144) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(145) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(146) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(147) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
  .masonry-item:nth-child(148) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(149) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(150) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(151) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 360px;
    }
  }
  .masonry-item:nth-child(152) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 320px;
    }
  }
  .masonry-item:nth-child(153) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(154) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(155) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(156) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(157) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 370px;
    }
  }
  .masonry-item:nth-child(158) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
  .masonry-item:nth-child(159) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 390px;
    }
  }
  .masonry-item:nth-child(160) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 340px;
    }
  }
  .masonry-item:nth-child(161) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 330px;
    }
  }
  .masonry-item:nth-child(162) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 380px;
    }
  }
  .masonry-item:nth-child(163) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 410px;
    }
  }
  .masonry-item:nth-child(164) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 350px;
    }
  }
  .masonry-item:nth-child(165) {
    img {
      display: block;
      height: auto;
      width: 265px;
      height: 400px;
    }
  }
}
a {
  display: block;
}
</style>
