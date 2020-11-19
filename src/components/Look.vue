<template>
  <div>
     <div class="header">
       <img src="../assets/image/banner.png" alt="" class="header-img" />
    </div>
    <div class="content-look" v-for="item in 10" :key="item">
      <router-link to="/index/lookfor">
        <div class="content-look-title">
          <span class="list-title">美妆达人</span>
          <div class="list-main">
            <span>300+抖音、快手、B站、小红书.....的</span>
            <span class="list-name">美妆博主</span>
            <span>再次等候，为您提供推广。</span>
          </div>
        </div>
        <div class="content-look-introduce">
          与兰蔻、雅诗兰黛、迪奥、资生堂、倩碧、海蓝之谜、SK2、香奈儿......等10万品牌用户深度合作
          超百亿流量覆盖，累计美妆产品完成亿万次曝光
        </div>
        <div class="content-look-detail">
          <div class="detail-box" v-for="list in 6" :key="list">
            <img src="../assets/image/icon.jpg" alt="" />
            <div class="detail-name">彩允Unee</div>
            <div class="detail-from">
              平台：
              <span>抖音</span>
            </div>
            <div class="detail-fans">
              粉丝数：
              <span>51</span>
              <span>W</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header-img{
    width: 100%;
  height: 504px;
  position:absolute;
  top:0px;
  z-index: -100;
}
.content-look:hover {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  transition: 0.5s;
  background-color: #EEEEEE;
}
.content-look {
  width: 1010px;
  margin: 42px auto 0;
  padding: 20px 20px 0;
  .content-look-title {
    display: flex;
    height: 27px;
    .list-title {
      font-size: 20px;
      font-family: Source 'Han Sans SC';
      font-weight: bold;
      line-height: 27px;
      color: #1a1a1c;
      border-left: 3px #ffb8fa solid;
      padding-left: 2px;
      margin-right: 40px;
      cursor: pointer;
    }
    .list-title:hover {
      color: #0A5CFF;
    }
    .list-name {
      font-size: 12px;
      font-weight: bold;
      line-height: 27px;
      color: #c77dff;
    }

    .list-main {
      font-size: 12px;
      font-weight: bold;
      line-height: 27px;
      color: #a7a7a7;
      cursor: pointer;
    }
    .list-main:hover > span {
      color: #0064f9;
    }
  }
  .content-look-introduce {
    margin-top: 25px;
    width: 597px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #474747;
  }
  .content-look-detail {
    margin-top: 19px;
    border-bottom: 1px solid rgba(112, 112, 112, 0.0784313725490196);
    padding-bottom: 41px;
    display: flex;
    .detail-box:nth-child(1) {
      .detail-fans {
        span {
          color: #d32dc8;
        }
      }
    }
    .detail-box:nth-child(2) {
      .detail-fans {
        span {
          color: #f18d59;
        }
      }
    }
    .detail-box:nth-child(3) {
      .detail-fans {
        span {
          color: #efbf3a;
        }
      }
    }
    .detail-box:nth-child(4) {
      .detail-fans {
        span {
          color: #272727;
        }
      }
    }
    .detail-box:nth-child(5) {
      .detail-fans {
        span {
          color: #d22bc7;
        }
      }
    }
    .detail-box:nth-child(6) {
      .detail-fans {
        span {
          color: #d22bc7;
        }
      }
    }
    .detail-box {
      width: 160px;
      margin-right: 10px;
      img {
        width: 160px;
        height: 198px;
        cursor: pointer;
      }
      .detail-name {
        font-size: 14px;
        font-weight: 800;
        line-height: 20px;
        color: #1a1a1c;
        margin-top: 10px;
        cursor: pointer;
      }
      .detail-from {
        margin-top: 4px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #5e5e5e;
        cursor: pointer;
      }
      .detail-fans {
        margin-top: 4px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #5e5e5e;
        cursor: pointer;
        // span {
        //   color: #d32dc8;
        // }
        span:nth-child(1) {
          font-size: 16px;
          font-family: Arial;
          font-weight: bold;
        }
        span:nth-child(2) {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
