<template>
  <div>
    <div class="header">
      <img src="../../assets/image/banner.png" alt="" class="header-img" />
    </div>
    <Content></Content>
    <p class="bottom-warn">没有了哦</p>
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
.bottom-warn {
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  color: #565252;
  margin: 70px 0;
  text-align: center;
}
</style>
