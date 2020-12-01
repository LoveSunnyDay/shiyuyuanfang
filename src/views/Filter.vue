<template>
  <div class="filter">
    <Header></Header>
    <div class="filter-crumbs">
      <button size="mini" class="button_mini">
        <span class="el-icon-arrow-left"></span>
        <span class="mini_i" @click="$router.back(-1)">返回</span>
      </button>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="crumbs-nav">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/editor' }">
          按需求筛选
        </el-breadcrumb-item>
        <el-breadcrumb-item>网红筛选</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-button round>
        <img src="../assets/image/show/douyin.png" alt="" />
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
      <!-- <el-button round>
        <img src="../assets/image/show/tongyi.png" alt="" />
        <p>同一经济公司</p>
      </el-button> -->
    </el-row>
    <el-select
      v-model="id"
      clearable
      placeholder="全部分类"
      class="filter-select"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.title"
        :value="item.id"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="id"
      clearable
      placeholder="选择地区"
      class="filter-select"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.title"
        :value="item.id"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="id"
      clearable
      placeholder="选择性别"
      class="filter-select"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.title"
        :value="item.id"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="id"
      clearable
      placeholder="好评排序"
      class="filter-select"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.title"
        :value="item.id"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="id"
      clearable
      placeholder="价格排序"
      class="filter-select"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.title"
        :value="item.id"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="id"
      clearable
      placeholder="粉丝排序"
      class="filter-select"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.title"
        :value="item.id"
      >
      </el-option>
    </el-select>
    <el-button round>
      <span class="select-btn">抖音购物车</span>
    </el-button>
    <p class="filter-warn">提醒：为了减少沟通成本，最好选择5家经济公司</p>
    <FilterList></FilterList>
    <Shopping></Shopping>
  </div>
</template>

<script>
import Shopping from '@/components/Shopping.vue'
import Header from '@/components/Header.vue'
import FilterList from '@/components/Filter/FilterList.vue'
// import axios from 'axios'
export default {
  data() {
    return {
      options: [],
      id: ''
    }
  },
  created() {
    // 全部KOL分类列表
    this.axios
      .get('https://api.dev.hiifire.com/v1/kol-category')
      .then((res) => {
        console.log(res.data.data)
        this.options = res.data.data
      })
  },
  components: {
    Shopping,
    Header,
    FilterList
  }
}
</script>

<style lang="less" scoped>
.filter {
  width: 1100px;
  margin: 100px auto 0;
  .filter-crumbs {
    margin-bottom: 40px;
    .button_mini {
      width: 70px;
      height: 26px;
      border-radius: 13px;
      float: left;
      color: #3d3a3a;
      background: #efefef;
      margin-right: 20px;
      border: none;
    }
    .crumbs-nav {
      padding-top: 8px;
      color: #888888;
      /deep/ .el-breadcrumb__inner:hover {
        color: #888888;
      }
    }
  }
  .el-row {
    display: flex;
    margin-bottom: 20px;
    /deep/ .el-button {
      background: #ffffff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09);
      border-radius: 20px;
      display: flex;
      margin-right: 10px;
      cursor: pointer;
      text-align: center;
      /deep/ .is-round {
        padding: 0;
      }
      img {
        float: left;
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
      }
    }
  }
  /deep/ .el-button {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09);
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    margin-right: 20px;
    cursor: pointer;
    text-align: center;
    border: none;
    .select-btn {
      color: #757070;
      font-size: 14px;
      font-weight: bold;
    }
  }
  /deep/ .el-button:hover {
    background: #f1eeee;
    color: #2d2d2d;
  }
  /deep/ .filter-select {
    width: 98px;
    height: 40px;
    margin-right: 20px;
    opacity: 0.84;
    border-radius: 25px;
    /deep/ .el-input__inner {
      color: #5e5e5e;
      font-size: 6px;
      text-align: center;
      font-weight: bold;
      border-radius: 25px;
      background: #ffffff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border: none;
    }
    /deep/ .el-input__inner::placeholder {
      color: #5e5e5e;
      font-size: 8px;
    }
  }
  /deep/ .el-input__inner:hover {
    background: #efefef;
  }
  .filter-warn {
    font-size: 12px;
    font-weight: 400;
    color: #2d2d2d;
    margin: 45px 0 10px 0;
  }
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
