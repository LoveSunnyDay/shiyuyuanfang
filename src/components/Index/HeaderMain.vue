<template>
  <div class="header-main">
    <div class="header-text">超火引擎，两分钟 找到对的网红！</div>
    <div class="main-search">
      <input
        type="text"
        placeholder="请输入您想推广的产品或相关网红，精确匹配"
        class="search-input"
        v-model="searchContent"
      />
      <img src="../../assets/image/sousuo.png" class="search-sousuo" @click="searchWangHong"/>
      <router-link to="/editor">
        <div class="search-shaixuan"></div>
      </router-link>
    </div>
    <div class="main-cont">
      <span>热门：</span>
      <ul>
        <li>美妆达人</li>
        <li>，</li>
        <li>时尚达人</li>
        <li>，</li>
        <li>手表带货</li>
        <li>，</li>
        <li>抖音网红</li>
        <li>，</li>
        <li>一条小团团</li>
        <li>，</li>
        <li>小红书</li>
        <li>，</li>
        <li>快手</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      searchContent:''
    }
  },
  methods:{
    searchWangHong(){
      this.$router.push({
        path:`/Filter/${this.searchContent}`
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
