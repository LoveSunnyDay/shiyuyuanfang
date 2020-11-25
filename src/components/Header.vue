<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/Index">
        <img src="../assets/image/logo.png" alt="" class="header-logo" />
      </router-link>
      <router-link to="/Index/Look" tag="p">网红达人</router-link>
      <router-link to="/Index/Show" tag="p">网红T台</router-link>
      <router-link to="/Index/Video" tag="p">视频素材</router-link>
      <input
        type="text"
        placeholder="请输入您想推广的产品或相关网红，精确匹配"
      />
      <i class="el-icon-search"></i>
    </div>
    <ul class="nav-list">
      <!-- <li class="nav-text">网红通道</li> -->
      <router-link to="/Channel" tag="li" class="nav-text">网红通道</router-link>
      <li class="nav-text">MCN通道</li>
      <router-link to="/Mycenter" tag="li" class="nav-text">个人中心</router-link>
      <li>
        <img src="../assets/image/gengduo.png" alt="" class="nav-gengduo" />
      </li>
      <li>
        <i class="el-icon-message-solid nav-xiaoxi"></i>
      </li>
      <li>
        <Login></Login>
      </li>
    </ul>
  </div>
</template>

<script>
import Login from './Header/Login'
export default {
  // 引入组件
  components: {
    Login
  },
  data() {
    // 这里存放数据
    return {
      dialogVisible: false,
      loginMode: true
    }
  },
  // 方法集合
  methods: {},
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
.header {
  width: 100%;
  height: 72px;
  background: #232a34;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .header-left {
    display: flex;
    line-height: 72px;
    margin-left: 32px;
    img {
      width: 110px;
      height: 21px;
      margin-top: 25px;
    }
    p:hover {
      color: #b9bab8;
    }
    p {
      margin-left: 30px;
      font-size: 18px;
      font-weight: 400;
      color: #ffffff;
      cursor: pointer;
    }
    input {
      width: 360px;
      height: 40px;
      background: #ffffff;
      border-radius: 6px;
      margin: 16px 0 0 30px;
      outline: none;
      padding: 0 13px 0 22px;
    }
    i {
      line-height: 72px;
      font-size: 20px;
      font-weight: 900;
      margin-left: -35px;
    }
  }
  .nav-list {
    display: flex;
    li {
      margin-right: 30px;
      cursor: pointer;
    }
    .nav-text {
      font-size: 18px;
      font-weight: 400;
      color: #ffffff;
      line-height: 72px;
    }
    .nav-text:hover {
      color: #b9bab8;
    }
    .nav-gengduo {
      width: 14px;
      height: 4px;
      margin-top: 36px;
    }
    .nav-xiaoxi {
      font-size: 14px;
      margin-top: 30px;
      color: #f9f9f9;
    }
    .nav-xiaoxi:hover {
      color: #b9bab8;
    }
    .nav-login {
      width: 80px;
      height: 40px;
      margin-top: 16px;
      background-color: #2fb598;
      border: 0;
    }
    .nav-login:hover {
      opacity: 0.8;
    }
    .login {
      text-align: center;
      .phone-login {
        position: relative;
        .phone-login-tab {
          display: flex;
          justify-content: flex-end;
          margin-right: 20px;
          img {
            width: 100px;
            height: 30px;
          }
          span {
            width: 56px;
            height: 54px;
            background: url(../assets/image/wxLogin.png);
          }
          span:hover {
            background: url(../assets/image/wxLogin2.png);
          }
        }
        p:nth-child(2) {
          font-size: 24px;
          font-weight: 500;
          color: #1a1a1a;
          margin-top: 4px;
        }
        .login-input-phone {
          width: 248px;
          height: 36px;
          border-radius: 19px;
          background: #f1f3f7;
          padding-left: 18px;
          outline: none;
          font-size: 14px;
          font-weight: 400;
          color: #757575;
          line-height: 36px;
          margin-top: 24px;
          cursor: pointer;
        }
        .login-input-code {
          width: 248px;
          height: 36px;
          border-radius: 19px;
          background: #f1f3f7;
          padding-left: 18px;
          outline: none;
          font-size: 14px;
          font-weight: 400;
          color: #757575;
          line-height: 36px;
          margin-top: 30px;
          cursor: pointer;
        }
        .code-button {
          border: 0;
          width: 112px;
          height: 36px;
          background-color: #00a581;
          color: #ffffff;
          font-weight: 600;
          border-radius: 19px;
          position: absolute;
          top: 172px;
          right: 67px;
          outline: none;
          cursor: pointer;
        }
        .phone-login-list {
          font-size: 14px;
          font-weight: 400;
          color: #727272;
          margin-top: 55px;
        }
        .login-button {
          border: 0;
          width: 266px;
          height: 44px;
          background-color: #00a581;
          color: #ffffff;
          font-weight: 800;
          border-radius: 19px;
          outline: none;
          cursor: pointer;
          margin-top: 43px;
        }
        .phone-login-item {
          font-size: 25px;
          font-weight: 900;
          color: #727272;
          margin: 30px 0 63px 0;
        }
      }
      .wx-login {
        .phone-login-tab {
          display: flex;
          justify-content: flex-end;
          margin-right: 20px;
          img {
            width: 100px;
            height: 30px;
          }
          span {
            width: 56px;
            height: 54px;
            background: url(../assets/image/phoneLogin.png);
          }
          span:hover {
            background: url(../assets/image/phoneLogin2.png);
          }
        }
        p:nth-child(2) {
          font-size: 24px;
          font-weight: 500;
          color: #1a1a1a;
        }
        .icon-weixin1 {
          font-size: 24px;
          margin-right: 10px;
          color: #00c800;
        }
        .wx-login-erweima {
          padding: 10px;
          width: 208px;
          height: 208px;
          border: 1px solid rgba(112, 112, 112, 0.2);
          border-radius: 6px;
          margin: 21px auto 0;
          img {
            width: 210px;
            height: 210px;
          }
        }
        .wx-login-text {
          font-size: 14px;
          font-weight: 400;
          color: #727272;
          margin-top: 18px;
        }
        .wx-login-welcom {
          width: 211px;
          height: 26px;
          margin: 30px 0 63px 0;
        }
      }
    }
  }
}
</style>
