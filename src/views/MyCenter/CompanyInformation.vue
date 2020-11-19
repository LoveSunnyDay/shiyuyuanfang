<template>
  <div class="company">
    <el-alert
      title="公司信息只能填写一次，一旦确认不可更改或联系客服微信或邮箱@2141342"
      type="warning"
      show-icon
      :closable="false"
      class="company-warn"
    >
    </el-alert>
    <div class="company-content">
      <p class="company-content-title">公司资料</p>
      <div class="company-content-item">
        <p>资料填写</p>
        <ul>
          <li>
            <span>公司全称：</span>
            <input
              type="text"
              placeholder="请填写公司名称"
              class="company-content-input"
            />
          </li>
          <li>
            <span>税号：</span>
            <input
              type="text"
              placeholder="请在此填写纳税人识别号"
              class="company-content-input"
            />
          </li>
          <li>
            <span>开户银行：</span>
            <input
              type="text"
              placeholder="请填写企业开户银行"
              class="company-content-input"
            />
          </li>
          <li>
            <span>银行账户：</span>
            <input
              type="text"
              placeholder="请填写企业银行账户"
              class="company-content-input"
            />
          </li>
          <li>
            <span>注册地址：</span>
            <input
              type="text"
              placeholder="请填写注册地址"
              class="company-content-input"
            />
          </li>
          <li>
            <span>注册电话：</span>
            <input
              type="text"
              placeholder="请填写注册电话"
              class="company-content-input"
            />
          </li>
        </ul>
        <button>提交审核</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="less" scoped>
.company {
  width: 1040px;
  margin-left: 48px;
  .company-warn {
    height: 52px;
  }
  .company-content {
    height: 1086px;
    background-color: #ffffff;
    overflow: hidden;
    .company-content-title {
      font-size: 20px;
      font-weight: bold;
      color: #171717;
      opacity: 0.6;
      margin: 25px 0 43px 29px;
    }
    .company-content-item {
      p:nth-child(1) {
        font-size: 22px;
        font-weight: 800;
        line-height: 30px;
        color: #171717;
        text-align: center;
      }
      ul {
        margin-top: 31px;
        li {
          margin-bottom: 30px;
          span {
            font-size: 14px;
            font-weight: 600;
            color: #818181;
            margin-right: 20px;
          }
          .company-content-input {
            width: 483px;
            height: 52px;
            border: 1px solid rgba(112, 112, 112, 0.2);
            border-radius: 2px;
            padding-left: 24px;
            outline: none;
            font-size: 16px;
            font-weight: 600;
            color: #818181;
          }
        }
        li:nth-child(1) {
          margin-left: 219px;
        }
        li:nth-child(2) {
          margin-left: 247px;
        }
        li:nth-child(3) {
          margin-left: 219px;
        }
        li:nth-child(4) {
          margin-left: 219px;
        }
        li:nth-child(5) {
          margin-left: 219px;
        }
        li:nth-child(6) {
          margin-left: 219px;
        }
      }
      button {
        width: 334px;
        height: 68px;
        border-radius: 2px;
        outline: none;
        background-color: #ff7519;
        border: 0;
        cursor: pointer;
        display: block;
        margin: 134px auto 0;
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>
