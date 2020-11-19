<template>
  <div class="show">
    <div class="header">
       <img src="../../assets/image/show.png" alt="" class="header-img" />
    </div>
    <el-row>
         <el-button round>
        <p>全部网红</p>
      </el-button>
      <el-button round>
        <img src="../../assets/image/show/douyin.png" alt=""/>
        <p>抖音网红</p>
      </el-button>
      <el-button round>
        <img src="../../assets/image/show/xiaohongshu.png" alt="" />
        <p>小红书网红</p>
      </el-button>
      <el-button round>
        <img src="../../assets/image/show/kuaishou.png" alt="" />
        <p>快手网红</p>
      </el-button>
      <el-button round>
         <img src="../../assets/image/show/bilibili.png" alt="" />
        <p>B站网红</p>
      </el-button>
    </el-row>
    <Masonry></Masonry>
  </div>
</template>

<script>
import Masonry from '@/components/Show/Masonry.vue'
export default {
  components: {
    Masonry
  }
}
</script>

<style lang="less" scoped>
.show {
  width: 1806px;
  margin: 0 auto;
  // padding: 0 57px;
   .header-img{
    width: 100%;
   height: 504px;
  position:absolute;
  left:0;
  top:0px;
  z-index: -100;
}
  .el-row{
    display: flex;
    margin-left: 10px;
    margin-top:20px;
    /deep/ .el-button{
      border:none;
      background: #ffffff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      display: flex;
      margin-right: 20px;
      cursor: pointer;
      text-align: center;
      /deep/ .is-round{
        padding: 0;
      }
      img {
        float:left;
        width: 20px;
        height: 20px;
        margin-left: -13px;
        margin-top: -3px;
        margin-right: 4px;
      }
      p {
        font-size: 14px;
        font-weight: bold;
        color: #5e5e5e;
        // line-height: 40px;
      }
    }
    /deep/ .el-button:hover{
      background: #f1eeee;
    }
  }
}
</style>>
