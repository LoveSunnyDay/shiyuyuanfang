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
        <!-- <i class="iconfont icon-weixin1"> -->
        <i class="iconfont icon-bixuan"></i>
        <span>公司全称：</span>
        <input
          type="text"
          class="invoice-content-input"
          placeholder="请填写公司名称"
        />
      </li>
      <li>
        <i class="iconfont icon-bixuan"></i>
        <span>税号：</span>
        <input
          type="text"
          class="invoice-content-input"
          placeholder="请在此填写纳税人识别号"
        />
      </li>
      <li>
        <span>开户银行：</span>
        <input
          type="text"
          class="invoice-content-input"
          placeholder="请填写企业开户银行"
        />
      </li>
      <li>
        <span>银行账户：</span>
        <input
          type="text"
          class="invoice-content-input"
          placeholder="请填写企业银行账户"
        />
      </li>
      <li>
        <span>注册地址：</span>
        <input
          type="text"
          class="invoice-content-input"
          placeholder="请填写注册地址"
        />
      </li>
      <li>
        <span>注册电话：</span>
        <input
          type="text"
          class="invoice-content-input"
          placeholder="请填写注册电话"
        />
      </li>
      <li>
        <i class="iconfont icon-bixuan"></i>
        <span>快递地址：</span>
        <input
          type="text"
          class="invoice-content-input"
          placeholder="请填写快递收件地址"
        />
      </li>
    </ul>
    <button>提交申请</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.invoice {
  width: 1040px;
  height: 1060px;
  background-color: #ffffff;
  margin-left: 48px;
  .invoice-title {
    p {
      height: 80px;
      border-bottom: 1px solid #f0f0f0;
      line-height: 80px;
    }
    p:nth-child(1) {
      // margin-left: 30px;
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
      .invoice-content-input {
        width: 483px;
        height: 52px;
        border: 1px solid rgba(112, 112, 112, 0.2);
        border-radius: 2px;
        padding-left: 24px;
        outline: none;
        font-size: 16px;
        font-weight: 800;
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
      margin-left: 200px;
    }
    li:nth-child(4) {
      margin-left: 228px;
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
      margin-left: 200px;
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
</style>
