<template>
  <div>
    <div class="header">
      <img src="~assets/image/look-banner.png" alt="" class="header-img" />
    </div>
    <Content class="content"></Content>
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
  min-width: 1200px;
  height: 504px;
  position: absolute;
  top: 0px;
  z-index: -100;
}
.content {
  margin-bottom: 70px;
}
</style>
