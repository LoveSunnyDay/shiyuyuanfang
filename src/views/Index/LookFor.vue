<template>
  <div class="lookfor">
     <div class="header">
       <img src="../../assets/image/banner.png" alt="" class="header-img" />
    </div>
    <div class="lookfor-nav">
      <img class="img" src="../../assets/image/show/quanbu.png" alt="1111" />
    <el-select v-model="value" clearable placeholder="全部分类" class="filter-select">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      </el-option>
    </el-select>
      <el-row>
      <el-button round>
        <img src="../../assets/image/show/douyin.png" alt=""/>
        <p>抖音网红</p>
      </el-button>
      <el-button round>
        <img src="../../assets/image/show/xiaohongshu.png" alt="" />
        <p>小红书网红</p>
      </el-button>
      <el-button round>
         <img src="../../assets/image/show/bilibili.png" alt="" />
        <p>B站网红</p>
      </el-button>
      <el-button round>
        <img src="../../assets/image/show/kuaishou.png" alt="" />
        <p>快手网红</p>
      </el-button>
      <el-button round>
        <img src="../../assets/image/show/taobao.png" alt="" />
        <p>淘宝网红</p>
      </el-button>
    </el-row>
    </div>
    <Main></Main>
  </div>
</template>

<script>
import Main from '@/components/LookFor/Main.vue'
export default {
  data() {
    return {
      options: [{
        value: '选项一',
        label: '美妆'
      }, {
        value: '选项二',
        label: '电商带货'
      }, {
        value: '选项三',
        label: '汽车达人'
      }, {
        value: '选项四',
        label: '网红打卡'
      }, {
        value: '选项五',
        label: '美食餐饮'
      }, {
        value: '选项六',
        label: '大快销品'
      }, {
        value: '选项七',
        label: '服饰箱包'
      }, {
        value: '选项八',
        label: '母婴亲子'
      }, {
        value: '选项九',
        label: '游戏网络'
      }, {
        value: '选项十',
        label: '食品达人'
      }
      ],
      value: ''
    }
  },
  components: {
    Main
  }
}
</script>

<style lang="less" scoped>
.lookfor {
  width: 1059px;
  margin: 30px auto 0;
   .header-img{
  width: 100%;
  height: 504px;
  position:absolute;
  top:0px;
  left: 0;
  z-index: -100;
}
  .lookfor-nav {
    .img{
      height: 20px;
      width: 20px;
      position: absolute;
      margin: 10px;
      z-index: 10;
    }
      /deep/ .filter-select{
        float: left;
    width: 125px;
    height: 40px;
    margin-right: 20px;
    opacity: 0.84;
    border-radius: 25px;
    /deep/ .el-input__inner{
      color: #5E5E5E;
      font-size: 14px;
      text-indent: 20px;
        text-align: center;
        font-weight: bold;
        border-radius: 25px;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.10);
        border:none;
    }
    /deep/ .el-input__inner::placeholder{
          color: #5E5E5E;
          font-size:14px
        }
  }
    /deep/ .el-input__inner:hover{
        background: #EFEFEF;
    }
    .el-row{
    display: flex;
    margin-bottom: 30px;
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
}
</style>
