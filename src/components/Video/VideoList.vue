<template>
    <div class="video-list">
        <h1>最新视频素材</h1>
        <div class="list-content" v-for="list in 10" :key="list">
          <div class="list-icon">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606279578554&di=84cac7e1a3394091660af1670edcd15e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F17%2F20161117225743_xruNU.gif"
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
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
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
</style>
