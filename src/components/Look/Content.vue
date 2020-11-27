<template>
<div>
        <div class="content-look" v-for="list in list" :key="list.id" @click="LookForHandel(list.id)">
      <router-link to="">
        <div class="content-look-title">
          <span class="list-title" :class="BorderLeft(list)" >{{list.title}}</span>
          <div class="list-main">
            <span>{{list.subtitle}}</span>
            <!-- <span class="list-name">美妆博主</span>
            <span>再次等候，为您提供推广。</span> -->
          </div>
        </div>
        <div class="content-look-introduce">
          {{list.body}}
        </div>
        <div class="content-look-detail">
          <div class="detail-box" v-for="list in list.kols" :key="list._id">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606288023066&di=7f9c720eebe94c83fd56fbb29caf2da7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa5a8c0adf1ed1bea019e304ce4f6f9365925e04559b7d-uJQJDV_fw658" alt="" />
            <div class="detail-name">{{list.nickname}}</div>
            <div class="detail-from">
              平台：
              <span>抖音</span>
            </div>
            <div class="detail-fans">
              粉丝数：
              <span>{{list.fan_count}}</span>
              <span>W</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
</div>
</template>
<script>
import { ContentList } from '../../services/video'
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    // 根据id判断小边框颜色
    BorderLeft(list) {
      if (list.id === 1) {
        // console.log(list.id)
        return 'list-title1'
      } else if (list.id === 2) {
        return 'list-title2'
      } else if (list.id === 3) {
        return 'list-title3'
      } else if (list.id === 4) {
        return 'list-title4'
      } else if (list.id === 5) {
        return 'list-title5'
      } else if (list.id === 6) {
        return 'list-title6'
      } else if (list.id === 7) {
        return 'list-title7'
      } else if (list.id === 8) {
        return 'list-title8'
      } else if (list.id === 8) {
        return 'list-title8'
      } else if (list.id === 9) {
        return 'list-title9'
      } else if (list.id === 10) {
        return 'list-title10'
      }
    },
    async ContentList() {
      const res = await ContentList()
      // console.log(data)
      console.log(res.data.data.items)
      this.list = res.data.data.items
    },
    // 跳转详情页
    LookForHandel(list) {
      console.log(list)
      this.$router.push({
        path: 'LookFor',
        query: { id: list }
      })
    }

  },
  created() {
    this.ContentList()
  }
}

</script>
<style lang="less" scoped>
    .content-look:hover {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  transition: 0.5s;
  background-color: #EEEEEE;
}
.content-look {
  overflow: hidden;
  width: 1010px;
  margin: 42px auto 0;
  padding: 20px 20px 0;
  .content-look-title {
    display: flex;
    height: 27px;
    .list-title1{
      border-left: 3px #8C9EB1FF solid;
      // border-image: linear-gradient(#E2E6E8FF,#8C9EB1FF) 20 20;
    }
    .list-title2{
      border-left: 3px #FFB8FAFF solid;
    }
    .list-title3{
      border-left: 3px #646364FF solid;
    }
    .list-title4{
      border-left: 3px #79242FFF solid;
    }
    .list-title5{
      border-left: 3px #D63458FF solid;
    }
    .list-title6{
      border-left: 3px#E6BB8BFF solid;
    }
    .list-title7{
      border-left: 3px #3A89A7FF solid;
    }
    .list-title8{
      border-left: 3px #FFD5DEFF solid;
    }
    .list-title9{
      border-left: 3px #8EBAE5FF solid;
    }
    .list-title10{
      border-left: 3px #EA964DFF solid;
    }
    .list-title {
      font-size: 20px;
      font-family: Source 'Han Sans SC';
      font-weight: bold;
      line-height: 27px;
      color: #1a1a1c;
      // border-left: 3px #ffb8fa solid;
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
      margin-right: 13px;
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
