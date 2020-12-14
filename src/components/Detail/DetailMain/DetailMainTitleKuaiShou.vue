<template>
  <div class="detail-main-title">
    <div class="main-title-synopsis">
      <!-- <img
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1441836571,2166773131&fm=26&gp=0.jpg"
        alt=""
      /> -->
      <img
        :src="
          items.avatar_base_url
            ? items.avatar_base_url + '/' + items.avatar_path
            : require('../../../assets/image/myCenter/icon.png')
        "
        alt=""
      />
      <ul>
        <!-- <li>一条小团团</li> -->
        <li :title="items.nickname">{{ items.nickname }}</li>
        <li>
          <!-- <img src="../../../assets/image/show/kuaishou.png" alt="" />
          <p>快手平台</p> -->
          <img
            :src="
              items.plat.thumbnail_base_url + '/' + items.plat.thumbnail_path
            "
            alt=""
          />
          <p>{{ items.plat.name }}平台</p>
          <img src="../../../assets/image/detail/nv.png" alt="" />
        </li>
        <li>
          <img src="../../../assets/image/detail/weizhi.png" alt="" />
          <p>天津</p>
        </li>
        <li>
          <span>ID：</span>
          80023534653465
        </li>
      </ul>
      <div class="synopsis-jj">
        <div class="synopsis-jj-text">
          <p>简介：</p>
          <!-- <p>
            “美妆博主里最温柔的少女”温柔标专业知识，虏获800w+粉丝有
            众多大牌合作背景,有众多线下品牌活动经验。
          </p> -->
          <p v-if="items.introduce != ''">{{ items.introduce }}</p>
          <p v-else>更新中~~~</p>
        </div>
        <div class="synopsis-jj-tag">
          <!-- <span>垂类美妆</span>
          <span>美食</span>
          <span>餐饮</span> -->
          <p v-if="items.tags != ''">
            <span v-for="(tag, key) in items.tags.split('、')" :key="key">
              {{ tag }}
            </span>
          </p>
          <p v-else>更新中~</p>
        </div>
      </div>
    </div>
    <div class="main-title-link">
      <p>
        <span>该网红主页</span>
        <a :href="items.home_url" target="_blank" v-if="items.home_url != ''">
          {{ items.home_url }}
        </a>
        <span v-else>更新中~~~</span>
      </p>
      <p>
        <span>数据更新时间：</span
        ><span>{{ items.updated_at | formatDate }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { formatDate } from '../../../plugins/filters'
export default {
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {}
  },
  props: {
    items: {
      type: Object,
      default() {
        return {}
      }
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
  created() {},
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

<style lang='less' scoped>
.detail-main-title {
  width: 821px;
  height: 226px;
  background: url(../../../assets/image/detail/kuaishou-title.png);
  padding: 40px 0 0 40px;
  display: flex;
  flex-flow: column; //垂直排列
  justify-content: space-between; //两端对齐
  .main-title-synopsis {
    display: flex;
    img {
      width: 149px;
      height: 149px;
      border-radius: 50%;
    }
    ul {
      margin-left: 20px;
      width: 150px;
      li:nth-child(1) {
        font-size: 30px;
        font-weight: 800;
        line-height: 42px;
        color: #3d3d3d;
        width: 150px;
        height: 42px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      li:nth-child(2) {
        margin-top: 11px;
        display: flex;
        font-size: 20px;
        // line-height: 22px;
        color: #3d3d3d;
        p {
          font-weight: 500;
          margin: 0 10px;
        }
        img:nth-child(1) {
          width: 22px;
          height: 22px;
        }
        img:nth-child(3) {
          width: 26px;
          height: 18px;
          // vertical-align:bottom;
        }
      }
      li:nth-child(3) {
        display: flex;
        margin: 15px 0;
        img {
          width: 20px;
          height: 24px;
          margin-right: 10px;
        }
        p {
          font-size: 20px;
          font-weight: 500;
          line-height: 24px;
          color: #3d3d3d;
        }
      }
      li:nth-child(4) {
        font-size: 14px;
        line-height: 20px;
        color: #59595a;
        span {
          color: #e5758c;
        }
      }
    }
    .synopsis-jj {
      width: 394px;
      height: 150px;
      margin-left: 55px;
      display: flex;
      flex-flow: column; //垂直排列
      justify-content: space-between; //两端对齐
      .synopsis-jj-text {
        p:nth-child(1) {
          font-size: 19px;
          font-weight: bold;
          line-height: 42px;
          color: #3d3d3d;
        }
        p:nth-child(2) {
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          color: #1a1a1a;
        }
      }
      .synopsis-jj-tag {
        span {
          padding: 4.5px 10px;
          background: #7c7889;
          font-size: 14px;
          font-weight: 400;
          line-height: 28px;
          color: #ffffff;
          border-radius: 18px;
          margin-right: 20px;
        }
      }
    }
  }
  .main-title-link {
    height: 48px;
    display: flex;
    line-height: 48px;
    p:nth-child(1) {
      width: 530px;
      color: #1a98d9;
      display: flex;
      span:nth-child(1) {
        font-size: 19px;
        font-weight: bold;
      }
      span:nth-child(2) {
        font-size: 14px;
        font-weight: 400;
        margin-left: 10px;
      }
      a {
        color: #1a98d9;
        font-size: 14px;
        font-weight: 400;
        margin-left: 10px;
        display: block;
        width: 300px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    p:nth-child(2) {
      font-size: 14px;
      font-weight: 500;
      color: #8f8f8f;
    }
  }
}
</style>
