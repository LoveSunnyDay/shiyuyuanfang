
<template>
      <div class="right-material">
        <p class="material-title">精选热度素材</p>
        <div class="material-main" v-for="list in 5" :key="list">
          <img
            src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3807427310,283445384&fm=26&gp=0.jpg"
            alt=""
          />
          <div class="material-text">
            <p>题材：双闪高光温馨提醒，慎用远光灯平安人一生</p>
            <i class="el-icon-view">1296</i>
          </div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.right-material {
      margin-top: 40px;
      .material-title {
        font-size: 18px;
        font-weight: 800;
        color: #414141;
        border-left: 4px #35c4ba solid;
        padding-left: 4px;
        line-height: 24px;
        cursor: pointer;
      }
      .material-main {
        margin: 20px 0 0 10px;
        display: flex;
        cursor: pointer;
        img {
          width: 110px;
          height: 70px;
        }
        .material-text {
          margin-left: 10px;
          position: relative;
          p {
            font-size: 12px;
            font-weight: 800;
            color: #414141;
            opacity: 0.85;
            line-height: 17px;
          }
          p:hover {
            color: #6295f6;
            cursor: pointer;
          }
          i {
            font-size: 12px;
            font-weight: 500;
            color: #8e9090;
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
      }
    }

 </style>>
