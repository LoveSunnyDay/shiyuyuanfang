<template>
  <div class="video">
    <div>
      <img class="video-img" src="~assets/image/video-banner.png" />
    </div>
    <div class="video-nav">
      <img src="../../assets/image/logo.png" alt="" />
      <ul>
        <!-- <li
          v-for="(classifys, index) in classify"
          :key="classifys.id"
          @click="classifyClick(index)"
          :class="{ classifyActive: index === classifyIndex }"
        >
          {{ classifys.title }}
        </li> -->
        <li @click="cur = 0" :class="{ 'order-type-active': cur == 0 }">
          时尚美妆
        </li>
        <li @click="cur = 1" :class="{ 'order-type-active': cur == 1 }">
          打卡探店
        </li>
        <li @click="cur = 2" :class="{ 'order-type-active': cur == 2 }">
          美食食品
        </li>
        <li @click="cur = 3" :class="{ 'order-type-active': cur == 3 }">
          母婴亲子
        </li>
        <li @click="cur = 4" :class="{ 'order-type-active': cur == 4 }">
          游戏动漫
        </li>
        <li @click="cur = 5" :class="{ 'order-type-active': cur == 5 }">
          服饰周边
        </li>
        <li @click="cur = 6" :class="{ 'order-type-active': cur == 6 }">
          知识教育
        </li>
        <li @click="cur = 7" :class="{ 'order-type-active': cur == 7 }">
          文体文娱
        </li>
        <li @click="cur = 8" :class="{ 'order-type-active': cur == 8 }">
          数码产品
        </li>
        <li @click="cur = 9" :class="{ 'order-type-active': cur == 9 }">
          其他
        </li>
      </ul>
    </div>
    <div class="video-main">
      <div class="block">
        <el-carousel height="260px">
          <el-carousel-item v-for="banners in banner" :key="banners.id">
            <!-- <img :src="banners.ad_base_url + '/' + banners.ad_path" alt="" /> -->
            <router-link to="/VideoArticle" target="_blank">
              <router-link
                :to="{ path: '/VideoArticle/' + banners.article_id }"
                target="_blank"
              >
                <img
                  :src="banners.ad_base_url + '/' + banners.ad_path"
                  alt=""
                />
              </router-link>
            </router-link>
          </el-carousel-item>
        </el-carousel>
        <span>商业策划</span>
      </div>
      <!-- <VideoList :article="article"></VideoList> -->
      <VideoList v-show="cur == 0"></VideoList>
      <VideoListA v-show="cur == 1"></VideoListA>
      <VideoListB v-show="cur == 2"></VideoListB>
      <VideoListC v-show="cur == 3"></VideoListC>
      <VideoListD v-show="cur == 4"></VideoListD>
      <VideoListE v-show="cur == 5"></VideoListE>
      <VideoListF v-show="cur == 6"></VideoListF>
      <VideoListG v-show="cur == 7"></VideoListG>
      <VideoListH v-show="cur == 8"></VideoListH>
      <VideoListI v-show="cur == 9"></VideoListI>
    </div>
    <!-- <RightMaterial :material="material"></RightMaterial> -->
    <RightMaterial></RightMaterial>
  </div>
</template>

<script>
import VideoList from '@/components/Video/VideoList.vue'
import RightMaterial from '@/components/Video/RightMaterial.vue'

import VideoListA from '@/components/Video/VideoListA.vue'
import VideoListB from '@/components/Video/VideoListB.vue'
import VideoListC from '@/components/Video/VideoListC.vue'
import VideoListD from '@/components/Video/VideoListD.vue'
import VideoListE from '@/components/Video/VideoListE.vue'
import VideoListF from '@/components/Video/VideoListF.vue'
import VideoListG from '@/components/Video/VideoListG.vue'
import VideoListH from '@/components/Video/VideoListH.vue'
import VideoListI from '@/components/Video/VideoListI.vue'

// import axios from 'axios'

import {
  // AllArticle,
  VideoClassify,
  VideoBanner
  // VideoMaterial
} from '../../services/video'
export default {
  data() {
    return {
      // article: [],
      classify: [],
      classifyIndex: 0,
      banner: [],
      // material: [],
      cur: 0
    }
  },
  created() {
    // AllArticle().then((res) => {
    //   // console.log(res.data.data)
    //   this.article = res.data.data.items
    // })
    VideoClassify().then((res) => {
      // console.log(res.data.data)
      this.classify = res.data.data.items
    })
    VideoBanner().then((res) => {
      // console.log(res.data.data)
      this.banner = res.data.data.items
    })

    // 精选热度素材
    // VideoMaterial().then((res) => {
    //   // console.log(res.data.data.items)
    //   this.material = res.data.data.items
    // })

    // axios.post('https://api.dev.hiifire.com/v1/tool/send_sms').then((res) => {
    //   console.log(res)
    // })
  },
  components: {
    VideoList,
    RightMaterial,
    VideoListA,
    VideoListB,
    VideoListC,
    VideoListD,
    VideoListE,
    VideoListF,
    VideoListG,
    VideoListH,
    VideoListI
  },
  methods: {
    classifyClick(index) {
      this.classifyIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.video {
  width: 1224px;
  padding-bottom: 70px;
  margin: 43px auto 0;
  display: flex;
  .video-img {
    width: 100%;
    height: 504px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
  }
  .video-nav {
    width: 110px;
    img {
      width: 106px;
      height: 33px;
      margin-bottom: 12px;
    }
    ul {
      width: 110px;
      // margin-left: 10px;
      font-size: 14px;
      text-align: center;
      border-radius: 2px;
      box-shadow: 1px 1px 5px #d0d0d0;
      li {
        color: #808080;
        line-height: 40px;
        font-weight: 500;
        cursor: pointer;
      }
      .classifyActive {
        color: #cc4b42;
        background-color: #f7e2e0;
      }
      li:hover {
        color: #cc4b42;
      }
      .order-type-active {
        color: #cc4b42;
        background-color: #f7e2e0;
      }
    }
  }
  .video-main {
    width: 720px;
    margin-left: 34px;
    .block {
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      span {
        display: inline-block;
        width: 69px;
        height: 21px;
        background-color: #038659;
        line-height: 21px;
        font-size: 12px;
        font-weight: 400;
        color: #ffffff;
        font-weight: 600;
        position: absolute;
        top: -11px;
        left: 0;
        text-align: center;
        z-index: 10;
      }
    }
  }
}
</style>>
