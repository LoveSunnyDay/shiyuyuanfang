<template>
  <div class="lookfor">
    <div class="header">
      <img src="~assets/image/look-banner.png" alt="" class="header-img" />
    </div>
    <div class="lookfor-nav">
      <img class="img" src="../../assets/image/show/quanbu.png" />
      <el-select
        v-model="searchParms.category_id"
        placeholder="全部分类"
        class="filter-select"
        clearable
      >
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        >
        </el-option>
      </el-select>
      <el-row>
        <el-button
          round
          v-for="(item, index) in platform"
          :key="index"
          @click="platoptionsClick(index, item.id)"
          :class="{ platoptionsActive: platoptionsIndex.includes(index) }"
        >
          <img
            :src="item.thumbnail_base_url + '/' + item.thumbnail_path"
            alt=""
          />
          <p>{{ item.name }}网红</p>
        </el-button>
      </el-row>
    </div>
    <Main v-if="list.length > 0" :list="list"></Main>
    <Shopping v-show="shoppingShow"></Shopping>
  </div>
</template>

<script>
import Main from '@/components/LookFor/Main.vue'
import Shopping from '@/components/Shopping.vue'

import {
  LookForClassify,
  LookForPlatform,
  LookForHandel
} from '../../services/video'
export default {
  data() {
    return {
      options: [],
      platform: [],
      shoppingShow: false,
      searchParms: {
        category_id: '',
        plat_id: '',
        recommend: ''
      },
      plat_id: [],
      platoptionsIndex: [],
      list: []
    }
  },
  watch: {
    searchParms: {
      //深度监听，可监听到对象、数组的变化
      handler() {
        LookForHandel(
          this.searchParms.category_id,
          this.plat_id.length > 0 && this.plat_id
        ).then((data) => {
          this.list = data.data.data.items
        })
      },
      deep: true //true 深度监听
    }
  },
  components: {
    Main,
    Shopping
  },
  methods: {
    shoppingScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 300) {
        this.shoppingShow = true
      } else if (scrollTop < 300) {
        this.shoppingShow = false
      }
    },
    async query() {
      const data = await LookForHandel()
      this.list = data.data.data.items
    },
    platoptionsClick(index, id) {
      const idx = this.platoptionsIndex.indexOf(index)
      if (idx !== -1) {
        this.platoptionsIndex.splice(idx, 1)
        this.plat_id.splice(idx, 1)
      } else {
        this.platoptionsIndex.push(index)
        this.plat_id.push(id)
      }
      this.searchParms.plat_id = this.plat_id.join(',')
      console.log(this.platoptionsIndex, this.plat_id)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.shoppingScroll)
    this.query()
  },
  created() {
    LookForClassify().then((res) => {
      // console.log(res.data.data.items)
      this.options = res.data.data.items
    })
    LookForPlatform().then((res) => {
      // console.log(res.data.data.items)
      this.platform = res.data.data.items
    })
  }
}
</script>

<style lang="less" scoped>
.lookfor {
  width: 1059px;
  margin: 30px auto 70px;
  .header-img {
    width: 100%;
    height: 504px;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -100;
  }
  .lookfor-nav {
    .img {
      height: 20px;
      width: 20px;
      position: absolute;
      margin: 10px;
      z-index: 10;
    }
    /deep/ .filter-select {
      float: left;
      width: 125px;
      height: 40px;
      margin-right: 20px;
      opacity: 0.84;
      border-radius: 25px;
      /deep/ .el-input__inner {
        color: #5e5e5e;
        font-size: 14px;
        text-indent: 20px;
        text-align: center;
        font-weight: bold;
        border-radius: 25px;
        background: #ffffff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border: none;
      }
      /deep/ .el-input__inner::placeholder {
        color: #5e5e5e;
        font-size: 14px;
      }
    }
    /deep/ .el-input__inner:hover {
      background: #efefef;
    }
    .el-row {
      display: flex;
      margin-bottom: 30px;
      /deep/ .el-button {
        border: none;
        background: #ffffff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.09);
        border-radius: 20px;
        display: flex;
        margin-right: 20px;
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
      /deep/ .el-button:hover {
        background: #f1eeee;
      }
      .platoptionsActive {
        background: #f1eeee !important;
      }
    }
  }
}
.el-select-dropdown__item:hover {
  background: #ffffff;
  color: #cc4b42;
}
.el-select-dropdown__item.selected {
  background: #f7e2e0;
  color: #cc4b42;
}
</style>
