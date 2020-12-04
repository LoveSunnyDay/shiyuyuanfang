<template>
  <div class="video">
    <div>
      <img class="video-img" src="../../assets/image/video.png" />
    </div>
    <div class="video-nav">
      <img src="../../assets/image/video/navLogo.png" alt="" />
      <ul>
        <li
          v-for="(classifys, index) in classify"
          :key="classifys.id"
          @click="classifyClick(index)"
          :class="{ classifyActive: index === classifyIndex }"
        >
          {{ classifys.title }}
        </li>
      </ul>
    </div>
    <div class="video-main">
      <div class="block">
        <el-carousel height="260px">
          <el-carousel-item v-for="banners in banner" :key="banners.id">
            <img :src="banners.ad_base_url + '/' + banners.ad_path" alt="" />
          </el-carousel-item>
        </el-carousel>
        <span>商业策划</span>
      </div>
      <VideoList :article="article"></VideoList>
    </div>
    <RightMaterial :material="material"></RightMaterial>
  </div>
</template>

<script>
import VideoList from '@/components/Video/VideoList.vue'
import RightMaterial from '@/components/Video/RightMaterial.vue'

import {
  AllArticle,
  VideoClassify,
  VideoBanner,
  VideoMaterial
} from '../../services/video'
export default {
  data() {
    return {
      article: [],
      classify: [],
      classifyIndex: 0,
      banner: [],
      material: []
    }
  },
  created() {
    AllArticle().then((res) => {
      // console.log(res.data.data)
      this.article = res.data.data.items
    })
    VideoClassify().then((res) => {
      // console.log(res.data.data)
      this.classify = res.data.data.items
    })
    VideoBanner().then((res) => {
      // console.log(res.data.data)
      this.banner = res.data.data.items
    })
    VideoMaterial().then((res) => {
      // console.log(res.data.data.items)
      this.material = res.data.data.items
    })
  },
  components: {
    VideoList,
    RightMaterial
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
    width: 120px;
    img {
      width: 120px;
      height: 21px;
      margin-bottom: 12px;
    }
    ul {
      width: 110px;
      margin-left: 10px;
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
        color: #0daf99;
        background-color: #eafaf8;
      }
      li:hover {
        color: #0daf99;
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
