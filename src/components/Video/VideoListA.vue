<template>
  <div class="video-list">
    <h1>最新视频素材</h1>
    <div class="list-content" v-for="articles in article" :key="articles.id">
      <router-link
        :to="{ path: '/VideoArticle/' + articles.id }"
        target="_blank"
      >
        <div class="list-icon">
          <img
            :src="articles.thumbnail_base_url + '/' + articles.thumbnail_path"
          />
          <span>#{{ articles.category.title }}</span>
        </div>
        <div class="list-details">
          <div class="details-title">
            <span>{{ articles.title }}</span>
          </div>
          <p>{{ articles.introduction.slice(0, 79) }}...</p>
          <div class="details-footer">
            <div class="footer-left">
              <span>来自主题：</span>
              <span>{{ articles.category.title }}</span>
              <span>｜</span>
              <span>超火引擎</span>
            </div>
            <i class="el-icon-time">{{ articles.published_at | formatDate }}</i>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { formatDate } from '../../plugins/filters'
import { AllArticle2 } from '../../services/video'
export default {
  // props: {
  //   article: {
  //     type: Array,
  //     default() {
  //       return []
  //     }
  //   }
  // },
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {
      article: []
    }
  },
  filters: {
    formatDate(time) {
      time = time * 1000
      var data = new Date(time)
      return formatDate(data, 'yyyy-MM-dd hh:mm')
    }
  },
  // 方法集合
  methods: {},
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    AllArticle2().then((res) => {
      // console.log(res.data.data)
      this.article = res.data.data.items
      // console.log(this.article[0].id)
    })
  },
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
}
</script>

<style lang="less" scoped>
.video-list {
  margin-top: 28px;
  a {
    display: flex;
  }
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
        padding: 0 5px;
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
        width: 452px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        span {
          font-weight: bold;
        }
      }
      p {
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        color: #a3a3a4;
        margin-top: 9px;
        width: 400px;
      }
      p:hover {
        color: #cc4b42;
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
