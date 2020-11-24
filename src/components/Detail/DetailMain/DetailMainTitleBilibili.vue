<template>
  <div>
    <div class="detail-main-title">
      <div class="main-title-synopsis">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1441836571,2166773131&fm=26&gp=0.jpg"
          class="synopsis-icon"
          alt=""
        />
        <ul>
          <li>一条小团团</li>
          <li>
            <img src="../../../assets/image/show/bilibili.png" alt="" />
            <p>快手平台</p>
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
            <p>
              “美妆博主里最温柔的少女”温柔标专业知识，虏获800w+粉丝有
              众多大牌合作背景,有众多线下品牌活动经验。
            </p>
          </div>
          <div class="synopsis-jj-tag">
            <span>垂类美妆</span>
            <span>美食</span>
          </div>
        </div>
        <img
          src="../../../assets/image/detail/synopsis-bilibili.png"
          alt=""
          class="synopsis-douyin"
        />
      </div>
    </div>
    <div class="main-title-link">
      <ul class="link-left">
        <li>
          <p>452W</p>
          <p>点赞总数</p>
        </li>
        <li>
          <p>452W</p>
          <p>收藏总数</p>
        </li>
        <li>
          <p>452W</p>
          <p>粉丝数</p>
        </li>
        <li>
          <p>452W</p>
          <p>投币数</p>
        </li>
        <li>
          <p>452W</p>
          <p>视频总数</p>
        </li>
      </ul>
      <div class="link-right">
        <p>个人主页</p>
        <p>https://v.douyin.com/JJj79Xu/</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {}
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
  // height: 226px;
  padding: 40px 0 0 40px;
  display: flex;
  flex-flow: column; //垂直排列
  justify-content: space-between; //两端对齐
  .main-title-synopsis {
    position: relative;
    display: flex;
    .synopsis-icon {
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
      }
      li:nth-child(2) {
        margin-top: 11px;
        display: flex;
        font-size: 20px;
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
          margin-right: 10px;
        }
      }
    }
    .synopsis-douyin {
      width: 226px;
      height: 89px;
      position: absolute;
      right: 46px;
      bottom: 0;
    }
  }
}
.main-title-link {
  margin-top: 50px;
  height: 86px;
  display: flex;
  .link-left {
    width: 572px;
    background: url(../../../assets/image/detail/link-bilibili-left.png);
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
    li {
      text-align: center;
      width: 70px;
      margin-top: 23px;
      p:nth-child(1) {
        font-size: 22px;
        font-weight: 800;
        color: #ffffff;
      }
      p:nth-child(2) {
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
      }
    }
    li:first-child {
      margin-left: 42px;
    }
    li:last-child {
      margin-right: 59px;
    }
  }
  .link-right {
    width: 282px;
    background: url(../../../assets/image/detail/link-bilibili-right.png);
    p:nth-child(1) {
      font-size: 16px;
      font-weight: bold;
      color: #1a98d9;
      margin: 22px 0 4px 42px;
    }
    p:nth-child(2) {
      font-size: 14px;
      font-weight: 400;
      color: #1a98d9;
      margin-left: 42px;
    }
  }
}
</style>
