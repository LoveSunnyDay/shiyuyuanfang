const { keyFor } = require("core-js/fn/symbol")

<template>
  <div class="header-main">
    <div class="header-text">超火引擎，两分钟找到对的网红！</div>
    <div class="main-search">
      <input
        type="text"
        placeholder="请输入您想推广的产品或相关网红，精确匹配"
        class="search-input"
        v-model="searchContent"
        @keyup.enter="onSubmit"
      />
      <router-link :to="{ path: '/Filter', query: { search: searchContent } }">
        <img src="../../assets/image/sousuo.png" class="search-sousuo" />
      </router-link>
      <router-link to="/editor">
        <div class="search-shaixuan"></div>
      </router-link>
    </div>
    <div class="main-cont">
      <span>热门：</span>
      <ul>
        <li 
          v-for="(tag,key) in hotTags"
          :key="key"
          style="margin-right:5px"
          @click="hotSearch(tag)"
        >
        {{tag}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: '',
      hotTags: []
    }
  },
  mounted() {
    this.getHotTags()
  },
  methods: {
    onSubmit() {
      this.$router.push({
        //核心语句
        path: '/Filter', //跳转的路径
        query: {
          //路由传参时push和query搭配使用 ，作用时传递参数
          search: this.searchContent
        }
      })
    },
    async getHotTags() {
      const { data } = await this.axios.get('/tool/hot-tags')
      this.hotTags =data&&data.map((item) => {
          return item.tag
        })
        console.log(" this.hotTags", this.hotTags)
    },
    hotSearch(tag){
      this.$router.push({
        //核心语句
        path: '/Filter', //跳转的路径
        query: {
          //路由传参时push和query搭配使用 ，作用时传递参数
          search: tag
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.header-main {
  width: 730px;
  margin: 127px auto 0;
  .header-text {
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 24px;
  }
  .main-search {
    height: 60px;
    position: relative;
    .search-input {
      width: 452px;
      height: 25px;
      outline: none;
      border-top-left-radius: 5px; // 左上角圆角
      border-bottom-left-radius: 5px; // 左下角圆角
      padding: 18px 0 17px 24px;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      color: #5e5e5e;
    }
    .search-sousuo {
      position: absolute;
      top: 0;
      right: 164;
      width: 90px;
      height: 60px;
      cursor: pointer;
    }
    .search-sousuo:hover {
      transition: 0.5s;
      opacity: 0.8;
    }
    .search-shaixuan {
      position: absolute;
      top: 0;
      right: -8px;
      width: 164px;
      height: 60px;
      cursor: pointer;
      background: url('~assets/image/shaixuan_1.png');
    }
    .search-shaixuan:hover {
      // background: url('../../assets/image/shaixuan.png');
      transition: 0.5s;
      opacity: 0.8;
    }
  }
  .main-cont {
    margin-top: 16px;
    display: flex;
    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #f7f7f7;
    }
    ul {
      display: flex;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      // opacity: 0.7;
      li {
        cursor: pointer;
        color: #b5b6b5;
      }
      li:hover {
        color: #ffffff;
      }
    }
  }
}
</style>
