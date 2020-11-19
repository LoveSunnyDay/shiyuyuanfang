<template>
  <div class="invoice">
    <div class="invoice-title">
      <p>开具发票</p>
      <p>开票信息</p>
    </div>
    <ul class="invoice-content">
      <li>
        <span>开票金额：</span>
        <span>￥568900.00</span>
      </li>
      <li>
        <span>发票类型：</span>
        <span>增值纸质发票</span>
      </li>
      <li>
        <span>公司全称：</span>
        <span>请填写公司全称</span>
      </li>
      <li>
        <span>税号：</span>
        <span>请在此填写纳税人识别号</span>
      </li>
      <li>
        <span>开户银行：</span>
        <span>请填写企业开户银行</span>
      </li>
      <li>
        <span>银行账户：</span>
        <span>请填写企业银行账户</span>
      </li>
      <li>
        <span>注册地址：</span>
        <span>请填写注册地址</span>
      </li>
      <li>
        <span>注册电话：</span>
        <span>请填写注册电话</span>
      </li>
      <li>
        <span>快递地址：</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 4 }"
          :placeholder="placeholder"
          v-model="textarea"
          resize="none"
        >
        </el-input>
      </li>
    </ul>
    <button>提交申请</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: '',
      placeholder: '请输入收件人\n姓名：\n地址：\n电话：'
    }
  }
}
</script>

<style lang="less" scoped>
.invoice {
  width: 1040px;
  height: 1089px;
  background-color: #ffffff;
  margin-left: 48px;
  .invoice-title {
    p {
      height: 80px;
      border-bottom: 1px solid #f0f0f0;
      line-height: 80px;
    }
    p:nth-child(1) {
      padding-left: 30px;
      font-size: 20px;
      font-weight: bold;
      color: #171717;
      opacity: 0.86;
    }
    p:nth-child(2) {
      font-size: 22px;
      font-weight: 800;
      color: #171717;
      text-align: center;
    }
  }
  .invoice-content {
    margin-top: 51px;
    li {
      margin-bottom: 30px;
      line-height: 38px;
      i {
        color: #dc5050;
      }
      span {
        font-size: 14px;
        font-weight: 800;
        color: #171717;
        opacity: 0.54;
        margin-right: 20px;
      }
      span:nth-child(2) {
        color: #363636;
        opacity: 1;
      }
    }
    li:nth-child(1) {
      margin-left: 218px;
      span:nth-child(2) {
        font-size: 22px;
        font-weight: 800;
        color: #ec3030;
        opacity: 0.87;
      }
    }
    li:nth-child(2) {
      margin-left: 210px;
      span {
        font-size: 16px;
      }
    }
    li:nth-child(3) {
      margin-left: 218px;
    }
    li:nth-child(4) {
      margin-left: 246px;
    }
    li:nth-child(5) {
      margin-left: 218px;
    }
    li:nth-child(6) {
      margin-left: 218px;
    }
    li:nth-child(7) {
      margin-left: 218px;
    }
    li:nth-child(8) {
      margin-left: 218px;
    }
    li:nth-child(9) {
      margin-left: 218px;
      display: flex;
      span {
        width: 80px;
      }
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
    margin: 70px auto 0;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
  }
}

/deep/.el-textarea__inner {
  width: 510px;
}
/deep/.el-textarea__inner:focus {
  border-color: #00a581;
}
</style>
