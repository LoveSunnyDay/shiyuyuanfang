<template>
  <div class="more" v-if="isLastPage">没有更多了</div>
  <div class="more" v-else @click="expandMore">展开更多</div>
</template>
<script>
export default {
  props: {
    //数据是否是最后一页
    isLastPage: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  methods: {
    expandMore() {
      //展开更多，需要传入接口依赖
      this.$emit('expandMore')
    }
  }
}
</script>
<style lang="less" scoped>
.more {
  padding: 23px 0;
  background: #f6f6f6;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 800;
  text-align: center;
  color: #808080;
  margin: 70px 0;
  cursor: pointer;
}
</style>