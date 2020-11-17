<template>
  <div class="profile">
    <div class="profile-title">
      <p>资料修改</p>
      <p>信息修改</p>
    </div>
    <ul class="profile-content">
      <li>
        <span>头像：</span>
        <input type="text" class="profile-content-input" />
      </li>
      <li>
        <span>联系人姓名：</span>
        <input type="text" class="profile-content-input" />
      </li>
      <li>
        <span>昵称：</span>
        <input
          type="text"
          class="profile-content-input"
          placeholder="请填写企业名称"
        />
      </li>
      <li>
        <span>微信号：</span>
        <input type="text" class="profile-content-input" />
      </li>
      <li>
        <span>手机号：</span>
        <span>15736880000</span>
        <span>修改</span>
      </li>
      <li>
        <span>电子邮箱：</span>
        <input type="text" class="profile-content-input" />
      </li>
    </ul>
    <button>提交审核</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.profile {
  width: 1040px;
  height: 1060px;
  background-color: #ffffff;
  margin-left: 48px;
  .profile-title {
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
  .profile-content {
    margin-top: 51px;
    li {
      margin-bottom: 30px;
      span {
        font-size: 14px;
        font-weight: 800;
        color: #171717;
        opacity: 0.54;
        margin-right: 20px;
      }
      .profile-content-input {
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
      margin-left: 254px;
      input {
        width: 150px;
        height: 150px;
      }
    }
    li:nth-child(2) {
      margin-left: 212px;
    }
    li:nth-child(3) {
      margin-left: 254px;
    }
    li:nth-child(4) {
      margin-left: 240px;
    }
    li:nth-child(5) {
      margin-left: 240px;
      span:nth-child(3) {
        margin-left: 366px;
      }
    }
    li:nth-child(6) {
      margin-left: 226px;
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
