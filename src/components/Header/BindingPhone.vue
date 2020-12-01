<template>
  <div class="binding-phone">
    <el-dialog
      :visible.sync="dialogVisible"
      width="440px"
      :before-close="handleClose"
    >
      <h2>绑定手机号</h2>
      <div class="phone">
        <p>+86</p>
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="auth-code">
        <input type="text" />
        <button>发送验证码</button>
      </div>
      <button class="accomplish">完成</button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // 引入组件
  components: {},
  data() {
    // 这里存放数据
    return {
      dialogVisible: true
    }
  },
  // 方法集合
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭吗？关闭则需要重新登录！')
        .then((_) => {
          done()
        })
        .catch((_) => {})
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
  h2 {
    font-size: 24px;
    font-weight: bold;
    line-height: 33px;
    color: #1a1a1a;
    opacity: 0.81;
  }
  .phone {
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 90px;
    p {
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
    input {
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
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    input {
      outline: none;
      width: 228px;
      height: 38px;
      background: #ffffff;
      border: 1px solid rgba(112, 112, 112, 0.2);
      border-radius: 4px;
      padding-left: 20px;
    }
    button {
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
    margin-top: 68px;
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
  }
  .accomplish:hover {
    transition: 0.5s;
    background: #19a483;
  }
}
/deep/.el-dialog__body {
  padding: 0 40px;
  height: 480px;
}
/deep/.el-dialog__headerbtn .el-dialog__close:hover {
  color: red;
}
</style>
