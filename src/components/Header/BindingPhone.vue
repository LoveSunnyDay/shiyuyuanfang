<template>
  <div class="binding-phone">
    <el-dialog
      :visible="true"
      width="440px"
      :before-close="handleClose"
      :modal-append-to-body="false"
    >
      <h2 class="binding-phone-title">绑定手机号</h2>
      <div class="phone">
        <p class="binding-phone-prefix">+86</p>
        <input
          v-model="phoneNumber"
          type="text"
          placeholder="请输入手机号"
          class="binding-phone-input"
        />
      </div>
      <div class="auth-code">
        <input type="text" class="auth-code-input" v-model="verifyCode" />
        <button class="auth-code-button" @click="sendVerifyCode">
          发送验证码
        </button>
      </div>
      <button class="accomplish" @click="bindPhoneNumber">完成</button>
    </el-dialog>
  </div>
</template>

<script>
import { getCookie, deleteCookie, setCookie } from '../../utils/index'
export default {
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {
      dialogVisible: true,
      phoneNumber: '',
      verifyCode: ''
    }
  },
  // 方法集合
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭吗？关闭则需要重新登录！')
        .then((_) => {
          //未绑定手机号码，清除token
          setCookie('wx-token','',window.location.hostname,-1)
          setCookie('user','',window.location.hostname,-1)
          setCookie('profile','',window.location.hostname,-1)
          setCookie('avatar_url','',window.location.hostname,-1)
          this.$emit('closeBindPhone')
          // done()
        })
        .catch((_) => {})
    },
    async sendVerifyCode() {
      const params = new FormData()
      params.append('phone_number', this.phoneNumber)
      params.append('type', 'bind')
      // 发送短信验证码
      const { success } = await this.axios({
        method: 'post',
        url: '/tool/send_sms',
        data: params,
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      if (!success) {
        this.$message.error('获取验证码失败！')
      }
    },
    async bindPhoneNumber() {
      if (!this.phoneNumber) {
        this.$message.info('请输入手机号码！')
        return
      }
      if (!this.verifyCode) {
        this.$message.info('请输入验证码！')
        return
      }
      const params = new FormData()
      params.append('phone_number', this.phoneNumber)
      params.append('code', this.verifyCode)
      // 绑定手机号
      const { success } = await this.axios({
        method: 'post',
        url:
          '/user/bind?access-token=' +
          getCookie('wx-token').replace(/\"/g, ''),
        data: params,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      if (!success) {
        this.$message.error('手机号码绑定失败！')
      }
      this.$emit('closeBindPhone')
      window.location.reload()
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
}
</script>

<style lang='less' scoped>
.binding-phone {
  height: 480px;
  .binding-phone-title {
    font-size: 24px;
    font-weight: bold;
    line-height: 33px;
    color: #1a1a1a;
    opacity: 0.81;
    margin: 0 20px;
  }
  .phone {
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin: 90px 20px 0;
    .binding-phone-prefix {
      width: 83px;
      height: 38px;
      background: #ffffff;
      border: 1px solid rgba(112, 112, 112, 0.2);
      border-radius: 4px;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      color: #aaaaaa;
      opacity: 0.81;
    }
    .binding-phone-input {
      outline: none;
      width: 238px;
      height: 38px;
      background: #ffffff;
      border: 1px solid rgba(112, 112, 112, 0.2);
      border-radius: 4px;
      padding-left: 20px;
    }
  }
  .auth-code {
    display: flex;
    justify-content: space-between;
    margin: 24px 20px 0;
    .auth-code-input {
      outline: none;
      width: 228px;
      height: 38px;
      background: #ffffff;
      border: 1px solid rgba(112, 112, 112, 0.2);
      border-radius: 4px;
      padding-left: 20px;
    }
    .auth-code-button {
      outline: none;
      width: 100px;
      height: 40px;
      background: #ffffff;
      border: 1px solid rgba(112, 112, 112, 0.2);
      border-radius: 4px;
      font-size: 14px;
      font-weight: bold;
      color: #aaaaaa;
      opacity: 0.81;
      cursor: pointer;
    }
  }
  .accomplish {
    cursor: pointer;
    border: 0;
    outline: none;
    width: 362px;
    height: 58px;
    background: #dcdcdc;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    opacity: 0.81;
    margin: 70px 20px;
  }
  .accomplish:hover {
    transition: 0.5s;
    background: #19a483;
  }
}
</style>
