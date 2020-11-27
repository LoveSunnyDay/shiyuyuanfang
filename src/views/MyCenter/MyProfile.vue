<template>
  <div class="profile">
    <div class="profile-title">
      <p>资料修改</p>
      <p>信息修改</p>
    </div>
    <ul class="profile-content">
      <li>
        <span>头像：</span>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p>点击头像即可上传</p>
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
export default {
  data() {
    return {
      imageUrl:
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2334974629,3626811871&fm=26&gp=0.jpg'
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="less" scoped>
.profile {
  width: 1095px;
  height: 1060px;
  background-color: #ffffff;
  // margin-left: 48px;
  .profile-title {
    p {
      height: 80px;
      line-height: 80px;
    }
    p:nth-child(1) {
      padding-left: 30px;
      font-size: 16px;
      font-weight: bold;
      color: #171717;
      opacity: 0.86;
    }
    p:nth-child(2) {
      font-size: 16px;
      font-weight: 800;
      color: #171717;
      text-align: center;
      border-bottom: 1px solid #f0f0f0;
    }
  }
  .profile-content {
    margin-top: 51px;
    li {
      margin-bottom: 30px;
      span {
        font-size: 14px;
        font-weight: 600;
        color: #818181;
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
        font-weight: 600;
        color: #818181;
      }
    }
    li:nth-child(1) {
      margin-left: 254px;
      display: flex;
      .avatar-uploader {
        border: 1px solid #e2e2e2;
        width: 150px;
        height: 150px;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 150px;
        height: 150px;
        line-height: 150px;
        text-align: center;
      }
      .avatar {
        width: 150px;
        height: 150px;
        display: block;
      }
      p {
        width: 160px;
        height: 37px;
        background: #ededed;
        border-radius: 4px;
        text-align: center;
        line-height: 37px;
        margin-left: 23px;
        font-size: 16px;
        font-weight: 800;
        color: #4f4f4f;
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
    margin: 115px auto 0;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
