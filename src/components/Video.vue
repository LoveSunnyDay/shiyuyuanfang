<template>
  <div class="video">
    <div>
      <img class="video-img" src="../assets/image/video.png" >
      <!-- <video class="video-img" autoplay="" loop="" muted="" poster="https://www.pexels.com/assets/videos/free-videos-7daa2ef41a140f70c757ce91913a4ecb90570b7d7cd2b401bae868350e02c83a.jpg">
<source src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4">
<source src="https://static.pexels.com/lib/videos/free-videos.webm" type="video/webm">
</video> -->
    </div>
    <div class="video-nav">
      <img src="../assets/image/video/navLogo.png" alt="" />
      <ul>
        <li>全部素材</li>
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
            <!-- <h3 class="small">{{ item }}</h3> -->
          </el-carousel-item>
        </el-carousel>
        <span>商业策划</span>
      </div>
      <div class="video-list">
        <h1>最新视频素材</h1>
        <div class="list-content" v-for="list in 10" :key="list">
          <div class="list-icon">
            <img
              src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1813774034,322794393&fm=26&gp=0.jpg"
              alt=""
            />
            <span>#美妆</span>
          </div>
          <div class="list-details">
            <div class="details-title">
              <span>市场要闻</span>
              <span>｜</span>
              <span>周小川：年轻一代储蓄率在明显下调 内循环更加畅通</span>
            </div>
            <p>双闪高光温馨提醒，慎用远光灯平安人一生</p>
            <div class="details-footer">
              <div class="footer-left">
                <span>来自主题：</span>
                <span>双闪高光眼盘</span>
                <span>｜</span>
                <span>超火引擎</span>
              </div>
              <i class="el-icon-time">8分钟前</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="video-right">
      <div class="right-list">
        <div class="list-title">
          <p>24小时网红热榜</p>
          <span>查看更多榜单</span>
        </div>
        <div class="right-icon" v-for="list in 3" :key="list">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2694204666,1804596294&fm=26&gp=0.jpg"
            alt=""
            class="icon-content"
          />
          <!-- <img src="../assets/image/video/top1.png" alt="" class="icon-top" /> -->
          <span class="icon-top"></span>
        </div>
      </div>
      <div class="right-material">
        <p class="material-title">精选热度素材</p>
        <div class="material-main" v-for="list in 5" :key="list">
          <img
            src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3807427310,283445384&fm=26&gp=0.jpg"
            alt=""
          />
          <div class="material-text">
            <p>题材：双闪高光温馨提醒，慎用远光灯平安人一生</p>
            <i class="el-icon-view">1296</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.video {
  width: 1224px;
  margin: 43px auto 0;
  display: flex;
   .video-img{
  width: 100%;
  height: 504px;
  position:absolute;
  top:0;
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
    .video-list {
      margin-top: 28px;
      h1 {
        font-size: 30px;
        font-weight: 800;
        color: #21201e;
      }
      .list-content:hover {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        transition: 0.5s;
      }
      .list-content {
        width: 688px;
        height: 144px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.0784313725490196);
        margin-top: 10px;
        padding: 17px 20px 19px 12px;
        display: flex;
        cursor: pointer;
        .list-icon {
          position: relative;
          img {
            width: 216px;
            height: 144px;
          }
          span {
            display: inline-block;
            width: 44px;
            height: 20px;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            color: #ffffff;
            background-color: #038659;
            position: absolute;
            top: 3px;
            left: -1px;
            text-align: center;
          }
        }
        .list-details {
          margin-left: 20px;
          position: relative;
          .details-title {
            font-size: 18px;
            color: rgba(26, 26, 28, 0.7);
            line-height: 25px;
            span {
              font-weight: bold;
            }
          }
          p {
            font-size: 14px;
            font-weight: 500;
            line-height: 24px;
            color: #a3a3a4;
            margin-top: 9px;
          }
          p:hover {
            color: #94b7f8;
          }
          .details-footer {
            width: 452px;
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #9d9d9d;
            opacity: 0.59;
            margin-top: 50px;
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }
      }
    }
  }
  .video-right {
    margin-left: 40px;
    width: 310px;
    .right-list {
      .right-icon:nth-child(2) {
        .icon-top {
          background: url(../assets/image/video/top1.png);
        }
      }
      .right-icon:nth-child(3) {
        .icon-top {
          background: url(../assets/image/video/top2.png);
        }
      }
      .right-icon:nth-child(4) {
        .icon-top {
          background: url(../assets/image/video/top3.png);
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
        span {
          font-size: 12px;
          font-weight: 800;
          line-height: 24px;
          color: #656366;
          opacity: 0.7;
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
    .right-material {
      margin-top: 40px;
      .material-title {
        font-size: 18px;
        font-weight: 800;
        color: #414141;
        border-left: 4px #35c4ba solid;
        padding-left: 4px;
        line-height: 24px;
        cursor: pointer;
      }
      .material-main {
        margin: 20px 0 0 10px;
        display: flex;
        cursor: pointer;
        img {
          width: 110px;
          height: 70px;
        }
        .material-text {
          margin-left: 10px;
          position: relative;
          p {
            font-size: 12px;
            font-weight: 800;
            color: #414141;
            opacity: 0.85;
            line-height: 17px;
          }
          p:hover {
            color: #6295f6;
            cursor: pointer;
          }
          i {
            font-size: 12px;
            font-weight: 500;
            color: #8e9090;
            position: absolute;
            left: 0;
            bottom: 0;
          }
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
