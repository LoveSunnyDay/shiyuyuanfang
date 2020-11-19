<template>
  <div class="filter">
    <Header></Header>
    <div class="filter-crumbs">
      <button size="mini" class="button_mini">
         <span class="el-icon-arrow-left"></span>
         <span class="mini_i">返回</span>
       </button>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="crumbs-nav">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>按需求筛选</el-breadcrumb-item>
      <el-breadcrumb-item>网红筛选</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
    <el-row>
      <el-button round>
        <img src="../assets/image/show/douyin.png" alt=""/>
        <p>抖音网红</p>
      </el-button>
      <el-button round>
        <img src="../assets/image/show/xiaohongshu.png" alt="" />
        <p>小红书网红</p>
      </el-button>
      <el-button round>
         <img src="../assets/image/show/bilibili.png" alt="" />
        <p>B站网红</p>
      </el-button>
      <el-button round>
        <img src="../assets/image/show/kuaishou.png" alt="" />
        <p>快手网红</p>
      </el-button>
      <el-button round>
        <img src="../assets/image/show/taobao.png" alt="" />
        <p>淘宝直播</p>
      </el-button>
      <el-button round>
       <img src="../assets/image/show/tongyi.png" alt="" />
        <p>同一经济公司</p>
      </el-button>
    </el-row>
    <el-select v-model="value" clearable placeholder="全部分类" class="filter-select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <el-select v-model="value" clearable placeholder="选择地区" class="filter-select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <el-select v-model="value" clearable placeholder="选择性别" class="filter-select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <el-select v-model="value" clearable placeholder="好评排序" class="filter-select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <el-select v-model="value" clearable placeholder="价格排序" class="filter-select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <el-select v-model="value" clearable placeholder="粉丝排序" class="filter-select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <el-button round>
     <span  class="select-btn">抖音购物车</span>
   </el-button>
    <p class="filter-warn">提醒：为了减少沟通成本，最好选择5家经济公司</p>
    <div class="filter-list" v-for="list in 5" :key="list">
      <div class="list-left">
        <div class="list-left-main">
          <div class="left-main-icon">
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=179057337,2765188365&fm=26&gp=0.jpg"
              alt=""
            />
            <p>粉丝数：51W</p>
          </div>
          <div class="left-main-item">
            <div class="main-item-name">
              <p>一条小团团</p>
              <ul>
                <li>剧情</li>
                <li>家庭</li>
                <li>搞笑</li>
                <li>颜值</li>
                <li>音乐</li>
                <li>上海地区</li>
              </ul>
            </div>
            <div class="main-item-case">
              <p>案例：</p>
              <ul>
                <li>奥迪</li>
                <li>/</li>
                <li>比亚迪</li>
                <li>/</li>
                <li>哈弗</li>
                <li>/</li>
                <li>五菱</li>
              </ul>
            </div>
            <p class="main-item-text">
              只接受上海地区的，中国好声音学院，搞笑音乐人，鸡汤段子手，全网最迷人的猪猪宝藏女友对口型段子达人哦
            </p>
            <p class="main-item-url">
              访问TA的抖音链接：https://v.douyin.com/JJj79Xu/
            </p>
          </div>
        </div>
      </div>
      <div class="list-right">
        <ul>
          <li>
            <p>直播1小时</p>
            <p>￥3600</p>
          </li>
          <li>
            <p>直播2小时</p>
            <p>￥3600</p>
          </li>
          <li>
            <p>直播3小时</p>
            <p>￥3600</p>
          </li>
          <li>
            <p>直播4小时</p>
            <p>￥3600</p>
          </li>
          <li>
            <p>直播5小时</p>
            <p>￥3600</p>
          </li>
          <li>
            <p>直播6小时</p>
            <p>￥3600</p>
          </li>
        </ul>
        <button>找TA推广</button>
      </div>
    </div>
    <Shopping></Shopping>
  </div>
</template>

<script>
import Shopping from '@/components/Shopping.vue'
import Header from '@/components/Header.vue'
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
    Shopping,
    Header
  }
}
</script>

<style lang="less" scoped>
.filter {
  width: 1100px;
  margin: 100px auto 0;
  .filter-crumbs{
    margin-bottom: 40px;
    .button_mini{
      width: 70px;
    height: 26px;
    border-radius: 13px;
      float: left;
      color:#3D3A3A;
      background: #EFEFEF;
      margin-right: 20px;
      border: none;
    }
    .crumbs-nav{
      padding-top:8px;
      color: #888888;
    }
  }
  .el-row{
    display: flex;
    margin-bottom: 30px;
    /deep/ .el-button{

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
  }
  /deep/ .el-button{
      background: #FFFFFF;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      font-size:14px;
      font-weight: 500;
      height: 40px;
      margin-right: 20px;
      cursor: pointer;
      text-align: center;
      border:none;
      .select-btn{
        color:#757070;
        font-size: 14px;
        font-weight: bold;
      }
    }
    /deep/ .el-button:hover{
      background: #f1eeee;
      color: #2d2d2d ;
    }
  /deep/ .filter-select{
    width: 98px;
    height: 40px;
    margin-right: 20px;
    opacity: 0.84;
    border-radius: 25px;
    /deep/ .el-input__inner{
      color: #5E5E5E;
      font-size: 6px;
        text-align: center;
        font-weight: bold;
        border-radius: 25px;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.10);
        border:none;
    }
    /deep/ .el-input__inner::placeholder{
          color: #5E5E5E;
          font-size:8px
        }
  }
    /deep/ .el-input__inner:hover{
        background: #EFEFEF;
    }
  .filter-warn {
    font-size: 12px;
    font-weight: 400;
    color: #2d2d2d;
    margin: 45px 0 10px 0;
  }
  .filter-list {
    width: 1100px;
    height: 230px;
    background: #fbfbfb;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .list-left {
      overflow: hidden;
      .list-left-main {
        margin-left: 30px;
        display: flex;
        .left-main-icon {
          margin-top: 37px;
          img {
            width: 106px;
            height: 102px;
            border-radius: 12px;
          }
          p {
            width: 109px;
            height: 32px;
            line-height: 32px;
            background: #232a34;
            font-size: 14px;
            font-weight: 800;
            color: #ffffff;
            text-align: center;
            border-radius: 4px;
            margin-top: 20px;
          }
        }
        .left-main-item {
          margin: 42px 0 0 34px;
          .main-item-name {
            display: flex;
            p {
              font-size: 20px;
              font-weight: 800;
              color: #1a1a1a;
            }
            ul {
              display: flex;
              li {
                font-size: 14px;
                font-weight: 500;
                height: 24px;
                line-height: 24px;
                border-radius: 18px;
                padding: 0 12px;
                margin-left: 10px;
                cursor: pointer;
              }
              li:nth-child(1) {
                background-color: #fceeca;
                color: #d97f19;
              }
              li:nth-child(2) {
                background-color: #faecec;
                color: #d91919;
              }
              li:nth-child(3) {
                background-color: #fceeca;
                color: #d97f19;
              }
              li:nth-child(4) {
                background-color: #f1ecfb;
                color: #7319d9;
              }
              li:nth-child(5) {
                background-color: #eaf0f9;
                color: #193fd9;
              }
              li:nth-child(6) {
                background-color: #fceeca;
                color: #d97f19;
              }
            }
          }
          .main-item-case {
            margin-top: 16px;
            font-size: 14px;
            display: flex;
            p {
              font-size: 14px;
              font-weight: 500;
              color: #de7070;
            }
            ul {
              display: flex;
              color: #777777;
              li:nth-child(odd) {
                cursor: pointer;
              }
              li:nth-child(even) {
                //even表示偶数
                margin: 0 10px;
              }
            }
          }
          .main-item-text {
            width: 449px;
            font-size: 14px;
            font-weight: bold;
            line-height: 20px;
            color: #777777;
            margin-top: 14px;
          }
          .main-item-url {
            font-size: 12px;
            font-weight: 400;
            color: #4c525a;
            margin-top: 20px;
            cursor: pointer;
          }
          .main-item-url:hover {
            color: #0064f9;
          }
        }
      }
    }
    .list-right {
      margin: 21px 40px 0 0;
      ul {
        width: 324px;
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        li:hover {
          transition: 0.5s;
          border: 1px solid #34B299;
        }
        li {
          width: 90px;
          height: 56px;
          border: 1px solid #ffffff;
          border-radius: 2px;
          font-size: 14px;
          text-align: center;
          margin-left: 24px;
          cursor: pointer;
          p:nth-child(1) {
            font-weight: 500;
            color: #2b2b2b;
            line-height: 34px;
          }
          p:nth-child(2) {
            font-weight: 800;
            color: #34b299;
          }
        }
        li:nth-child(1) {
          margin: 0 0 20px 0;
        }
        li:nth-child(2) {
          margin-bottom: 20px;
        }
        li:nth-child(2) {
          margin-bottom: 20px;
        }
        li:nth-child(4) {
          margin-left: 0;
        }
      }
      button {
        width: 208px;
        height: 40px;
        background: #ff7519;
        border-radius: 2px;
        font-size: 14px;
        font-weight: 800;
        line-height: 40px;
        color: #ffffff;
        outline: none;
        border: 0;
        cursor: pointer;
        margin: 15px 0 0 116px;
      }
      button:hover {
        transition: 0.5s;
        background-color: #E36713;
        color: #FFD7C2;
      }
    }
  }
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
