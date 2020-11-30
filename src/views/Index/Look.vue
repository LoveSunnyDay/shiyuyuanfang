<template>
  <div>
    <div class="header">
      <img src="../../assets/image/banner.png" alt="" class="header-img" />
    </div>
    <Content></Content>
  </div>
</template>

<script>
import Content from '@/components/Look/Content.vue'
export default {
  components: {
    Content
  }
}
</script>

<style lang="less" scoped>
.header-img {
  width: 100%;
  height: 504px;
  position: absolute;
  top: 0px;
  z-index: -100;
}
</style>
