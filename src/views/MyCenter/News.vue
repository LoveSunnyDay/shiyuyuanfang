<template>
  <div class="news">
    <div class="news-title">
      <p>我的消息</p>
      <span><i class="el-icon-circle-close"></i> 删除全部信息</span>
    </div>
    <ul class="news-type">
      <li>全部消息</li>
      <li>系统消息</li>
      <li>订单提醒</li>
    </ul>
    <ul class="news-content">
      <li v-for="item in 6" :key="item">
        <img src="../../assets/image/myCenter/news1.png" alt="" />
        <div class="news-content-main">
          <div class="content-main-tag">
            <span>项目进度提醒</span>
            <span>11/30 14:30</span>
            <span>已读</span>
          </div>
          <p>订单号：125168761791970000</p>
          <p>
            您已经支付完订单的所有款项，目前项目进入策划期，如果在该项目中产生任何疑问，直接与负责该项目的MCN公司联系！
          </p>
        </div>
        <i class="el-icon-delete"></i>
      </li>
    </ul>
    <el-pagination
      class="news-page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="100"
      :total="400"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped>
.news {
  width: 1040px;
  height: 1060px;
  margin-left: 48px;
  background-color: #ffffff;
  .news-title {
    display: flex;
    justify-content: space-between;
    margin: 33px 20px 20px 20px;
    p {
      font-size: 20px;
      font-weight: bold;
      color: #171717;
    }
    span {
      font-size: 14px;
      color: #545454;
      cursor: pointer;
    }
  }
  .news-type {
    margin: 0 0 37px 20px;
    display: flex;
    li {
      height: 20px;
      padding: 6px 10px;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.08);
      border-radius: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: bold;
      color: #7b7b7b;
      margin-right: 15px;
      cursor: pointer;
    }
  }
  .news-content {
    li {
      height: 128px;
      border-top: 1px solid rgba(112, 112, 112, 0.10196078431372549);
      margin: 0 20px;
      display: flex;
      img {
        width: 50px;
        height: 50px;
        margin: 35px 19px 0 45px;
      }
      .news-content-main {
        width: 800px;
        font-size: 14px;
        margin-top: 35px;
        .content-main-tag {
          margin-bottom: 14px;
          span:nth-child(1) {
            font-weight: bold;
            color: #545454;
          }
          span:nth-child(2) {
            font-weight: bold;
            color: #545454;
            opacity: 0.48;
            margin: 0 40px 0 24px;
          }
          span:nth-child(3) {
            width: 50px;
            height: 20px;
            background: #f1f1f1;
            border-radius: 10px;
            padding: 0 11px;
            color: #646261;
          }
        }
        p {
          font-weight: bold;
          line-height: 20px;
          color: #545454;
          cursor: pointer;
        }
      }
      i {
        font-size: 18px;
        line-height: 128px;
        color: #858585;
        cursor: pointer;
      }
      i:hover {
        color: #e92e2e;
      }
    }
  }
  .news-page {
    margin: 100px 20px 0 0;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
