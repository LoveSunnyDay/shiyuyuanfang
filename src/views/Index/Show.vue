<template>
  <div class="show">
    <div class="header">
      <img src="~assets/image/show-banner.png" alt="" class="header-img" />
    </div>
    <el-row>
      <el-button
        round
        @click="cur = 0"
        :class="{ 'order-type-active': cur == 0 }"
      >
        <p>全部网红</p>
      </el-button>
      <el-button
        round
        @click="cur = 1"
        :class="{ 'order-type-active': cur == 1 }"
      >
        <img src="../../assets/image/show/douyin.png" alt="" />
        <p>抖音网红</p>
      </el-button>
      <el-button
        round
        @click="cur = 2"
        :class="{ 'order-type-active': cur == 2 }"
      >
        <img src="../../assets/image/show/kuaishou.png" alt="" />
        <p>快手网红</p>
      </el-button>
      <el-button
        round
        @click="cur = 3"
        :class="{ 'order-type-active': cur == 3 }"
      >
        <img src="../../assets/image/show/bilibili.png" alt="" />
        <p>B站网红</p>
      </el-button>
      <el-button
        round
        @click="cur = 4"
        :class="{ 'order-type-active': cur == 4 }"
      >
        <img src="../../assets/image/show/weibo.png" alt="" />
        <p>微博网红</p>
      </el-button>
      <el-button
        round
        @click="cur = 5"
        :class="{ 'order-type-active': cur == 5 }"
      >
        <img src="../../assets/image/show/xiaohongshu.png" alt="" />
        <p>小红书网红</p>
      </el-button>
    </el-row>
    <Masonry v-show="cur == 0"></Masonry>
    <MasonryA v-show="cur == 1"></MasonryA>
    <MasonryB v-show="cur == 2"></MasonryB>
    <MasonryC v-show="cur == 3"></MasonryC>
    <MasonryD v-show="cur == 4"></MasonryD>
    <MasonryE v-show="cur == 5"></MasonryE>
  </div>
</template>

<script>
import Masonry from '@/components/Show/Masonry.vue'
import MasonryA from '@/components/Show/MasonryA.vue'
import MasonryB from '@/components/Show/MasonryB.vue'
import MasonryC from '@/components/Show/MasonryC.vue'
import MasonryD from '@/components/Show/MasonryD.vue'
import MasonryE from '@/components/Show/MasonryE.vue'
export default {
  components: {
    Masonry,
    MasonryA,
    MasonryB,
    MasonryC,
    MasonryD,
    MasonryE
  },
  data() {
    return {
      cur: 0
    }
  }
}
</script>

<style lang="less" scoped>
.show {
  width: 1366px;
  margin: 0 auto 70px;
  // padding: 0 57px;
  .header-img {
    width: 100%;
    height: 504px;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: -100;
  }
  .el-row {
    display: flex;
    margin-left: 10px;
    margin-top: 20px;
    /deep/ .el-button {
      border: none;
      background: #ffffff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      display: flex;
      margin-right: 20px;
      cursor: pointer;
      text-align: center;
      /deep/ .is-round {
        padding: 0;
      }
      img {
        float: left;
        width: 20px;
        height: 20px;
        margin-left: -13px;
        margin-top: -3px;
        margin-right: 4px;
      }
      p {
        font-size: 14px;
        font-weight: bold;
        color: #5e5e5e;
        // line-height: 40px;
      }
    }
    /deep/ .el-button:hover {
      background: #f1eeee;
    }
    .order-type-active {
      background: #f1eeee;
    }
  }
}
</style>>
