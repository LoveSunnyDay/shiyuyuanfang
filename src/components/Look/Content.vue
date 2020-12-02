<template>
  <div>
    <div
      class="content-look"
      v-for="list in list"
      :key="list.id"
      @click="LookForHandel(list.id)"
    >
      <!-- <router-link to=""> -->
      <div class="content-look-title">
        <span class="list-title" :class="BorderLeft(list)">
          {{ list.title }}
        </span>
        <!-- <div class="list-main"> -->
        <span class="list-main">{{ list.subtitle }}</span>
        <!-- <span class="list-name">美妆博主</span>
            <span>再次等候，为您提供推广。</span> -->
        <!-- </div> -->
      </div>
      <div class="content-look-introduce">
        {{ list.body }}
      </div>
      <div class="content-look-detail">
        <div class="detail-box" v-for="list in list.kols" :key="list._id">
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3160269277,4211240727&fm=26&gp=0.jpg"
            alt=""
          />
          <div class="detail-name">{{ list.nickname }}</div>
          <div class="detail-from">
            平台：
            <span>抖音</span>
          </div>
          <div class="detail-fans">
            粉丝数：
            <span>{{ list.fan_count }}</span>
            <span>W</span>
          </div>
        </div>
      </div>
      <!-- </router-link> -->
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
  background-color: #eeeeee;
}
.content-look:hover .content-look-title span {
  color: #0a5cff;
}
.content-look {
  width: 1010px;
  margin: 42px auto 0;
  padding: 20px 20px 0;
  cursor: pointer;
  .content-look-title {
    display: flex;
    height: 27px;
    .list-title1 {
      border-left: 3px #8c9eb1ff solid;
    }
    .list-title2 {
      border-left: 3px #ffb8faff solid;
    }
    .list-title3 {
      border-left: 3px #646364ff solid;
    }
    .list-title4 {
      border-left: 3px #79242fff solid;
    }
    .list-title5 {
      border-left: 3px #d63458ff solid;
    }
    .list-title6 {
      border-left: 3px #e6bb8bff solid;
    }
    .list-title7 {
      border-left: 3px #3a89a7ff solid;
    }
    .list-title8 {
      border-left: 3px #ffd5deff solid;
    }
    .list-title9 {
      border-left: 3px #8ebae5ff solid;
    }
    .list-title10 {
      border-left: 3px #ea964dff solid;
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
      // cursor: pointer;
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
      width: 158px;
      margin-right: 13px;
      img {
        width: 158px;
        height: 198px;
      }
      .detail-name {
        font-size: 14px;
        font-weight: 800;
        line-height: 20px;
        color: #1a1a1c;
        margin-top: 10px;
      }
      .detail-from {
        margin-top: 4px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #5e5e5e;
      }
      .detail-fans {
        margin-top: 4px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #5e5e5e;
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
