
<template>
  <div class="right-material">
    <p class="material-title">精选热度素材</p>
    <div class="material-main" v-for="material in materials" :key="material.id">
      <router-link
        :to="{ path: '/VideoArticle/' + material.id }"
        target="_blank"
      >
        <img
          :src="material.thumbnail_base_url + '/' + material.thumbnail_path"
          alt=""
        />
        <div class="material-text">
          <!-- slice 截取字符串 -->
          <p>{{ material.introduction.slice(0, 30) }}...</p>
          <i class="el-icon-view">
            <span>{{ material.view_count }}</span>
          </i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { VideoMaterial } from '../../services/video'
export default {
  // props: {
  //   material: {
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
      materials: []
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
    VideoMaterial().then((res) => {
      console.log(res.data.data.items)
      this.materials = res.data.data.items
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
.right-material {
  margin-left: 40px;
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
    a {
      display: flex;
    }
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
        color: #cc4b42;
        cursor: pointer;
      }
      i {
        font-size: 12px;
        font-weight: 500;
        color: #8e9090;
        position: absolute;
        left: 0;
        bottom: 0;
        span {
          margin-left: 3px;
        }
      }
    }
  }
}
</style>
