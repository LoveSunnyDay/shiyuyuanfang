<template>
  <div class="video">
    <div>
      <img class="video-img" src="../../assets/image/video.png" />
    </div>
    <div class="video-nav">
      <img src="../../assets/image/video/navLogo.png" alt="" />
      <ul>
        <li>电商带货</li>
        <li>汽车达人</li>
        <li>网红打卡</li>
        <li>餐饮美食</li>
        <li>大快销品</li>
        <li>服饰箱包</li>
        <li>母婴亲子</li>
        <li>游戏网络</li>
        <li>食品达人</li>
        <li>美妆达人</li>
      </ul>
    </div>
    <div class="video-main">
      <div class="block">
        <el-carousel height="260px">
          <el-carousel-item v-for="item in 5" :key="item">
            <img
              style="width: 100%"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606282239700&di=c1b9477ce7a2d445ef52a489780e8102&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180912%2F6e295e5cc30f4dd89558d5572f08c072.gif"
              alt=""
            />
          </el-carousel-item>
        </el-carousel>
        <span>商业策划</span>
      </div>
      <VideoList></VideoList>
    </div>
    <div class="video-right">
      <div class="right-list">
        <div class="list-title">
          <p>24小时网红热榜</p>
        </div>
        <div class="right-icon" v-for="list in 3" :key="list">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606282196602&di=66b3bb958738fc1ec8b3b7ec3501067b&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170329%2Fe5c7183e1696478ab9ff093474ae4d45_th.jpg"
            alt=""
            class="icon-content"
          />
          <span class="icon-top"></span>
        </div>
      </div>
      <RightMaterial></RightMaterial>
    </div>
  </div>
</template>

<script>
import VideoList from '@/components/Video/VideoList.vue'
import RightMaterial from '@/components/Video/RightMaterial.vue'
export default {
  data() {
    return {}
  },
  created() {},
  components: {
    VideoList,
    RightMaterial
  }
}
</script>

<style lang="less" scoped>
.video {
  width: 1224px;
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
      li:nth-child(1) {
        height: 48px;
        background: #e4f3ff;
        line-height: 48px;
        color: #2178f9;
        font-weight: 500;
        border-top-left-radius: 2px; // 左上角圆角
        border-top-right-radius: 2px; // 右上角圆角
      }
      li:hover {
        color: #2178f9;
      }
    }
  }
  .video-main {
    width: 720px;
    margin-left: 34px;
    .block {
      position: relative;
      span {
        display: inline-block;
        width: 69px;
        height: 21px;
        background-color: #038659;
        line-height: 21px;
        // text-align: center;
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
  .video-right {
    margin-left: 40px;
    width: 310px;
    .right-list {
      .right-icon:nth-child(2) {
        .icon-top {
          background: url(../../assets/image/video/top1.png);
        }
      }
      .right-icon:nth-child(3) {
        .icon-top {
          background: url(../../assets/image/video/top2.png);
        }
      }
      .right-icon:nth-child(4) {
        .icon-top {
          background: url(../../assets/image/video/top3.png);
        }
      }
      .list-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        cursor: pointer;
        p {
          font-size: 18px;
          font-weight: 800;
          color: #414141;
          border-left: 4px #35c4ba solid;
          padding-left: 4px;
          line-height: 24px;
        }
      }
      .right-icon {
        position: relative;
        margin: 20px 0 0 10px;
        cursor: pointer;
        .icon-content {
          width: 300px;
          height: 170px;
        }
        .icon-top {
          width: 60px;
          height: 40px;
          position: absolute;
          top: 0;
          left: -8px;
        }
      }
    }
  }
}
//这里是element-ui轮播图样式
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>>
