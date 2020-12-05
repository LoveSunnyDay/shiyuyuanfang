<template>
  <div>
    <div class="filter-list" v-for="list in list" :key="list.id">
      <div class="list-left">
        <div class="list-left-main">
          <div class="left-main-icon">
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4226413727,164684980&fm=11&gp=0.jpg"
              alt=""
            />
            <p>粉丝数:{{ list.fan_count }}W</p>
          </div>
          <div class="left-main-item">
            <div class="main-item-name">
              <p>{{ list.nickname }}</p>
              <ul>
                <li>{{ list.tags }}</li>
                <!-- <li>家庭</li>
                <li>搞笑</li>
                <li>颜值</li>
                <li>音乐</li>
                <li>上海地区</li> -->
              </ul>
            </div>
            <div class="main-item-case">
              <p>案例：</p>
              <ul>
                <li>{{ list.cases }}</li>
                <!-- <li>/</li>
                <li>比亚迪</li>
                <li>/</li>
                <li>哈弗</li>
                <li>/</li>
                <li>五菱</li> -->
              </ul>
            </div>
            <p class="main-item-text">
              只接受上海地区的，中国好声音学院，搞笑音乐人，鸡汤段子手，全网最迷人的猪猪宝藏女友对口型段子达人哦
            </p>
            <a :href="list.home_url" target="_blank">
              <p class="main-item-url">
                访问TA的抖音链接：
                {{ list.home_url }}
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="list-right">
        <ul>
          <li v-for="list in list.products" :key="list.id">
            <p>{{ list.name }}</p>
            <p>{{ list.price }}</p>
          </li>
        </ul>
        <button>找TA推广</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
   return{}
  },
  methods: {
   
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
.filter-list {
  width: 1100px;
  height: 230px;
  background: #fbfbfb;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .list-left {
    overflow: hidden;
    .list-left-main {
      margin-left: 30px;
      display: flex;
      .left-main-icon {
        margin-top: 37px;
        img {
          width: 106px;
          height: 102px;
          border-radius: 12px;
        }
        p {
          width: 109px;
          height: 32px;
          line-height: 32px;
          background: #232a34;
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          text-align: center;
          border-radius: 4px;
          margin-top: 20px;
        }
      }
      .left-main-item {
        margin: 42px 0 0 34px;
        .main-item-name {
          display: flex;
          p {
            font-size: 20px;
            font-weight: 800;
            color: #1a1a1a;
          }
          ul {
            display: flex;
            li {
              font-size: 14px;
              font-weight: 500;
              height: 24px;
              line-height: 24px;
              border-radius: 18px;
              padding: 0 12px;
              margin-left: 10px;
            }
            li:nth-child(1) {
              background-color: #fceeca;
              color: #d97f19;
            }
            li:nth-child(2) {
              background-color: #faecec;
              color: #d91919;
            }
            li:nth-child(3) {
              background-color: #fceeca;
              color: #d97f19;
            }
            li:nth-child(4) {
              background-color: #f1ecfb;
              color: #7319d9;
            }
            li:nth-child(5) {
              background-color: #eaf0f9;
              color: #193fd9;
            }
            li:nth-child(6) {
              background-color: #fceeca;
              color: #d97f19;
            }
          }
        }
        .main-item-case {
          margin-top: 16px;
          font-size: 14px;
          display: flex;
          p {
            font-size: 14px;
            font-weight: 500;
            color: #de7070;
          }
          ul {
            display: flex;
            color: #777777;
            li {
              width: 330px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            // li:nth-child(odd) {
            //   cursor: pointer;
            // }
            // li:nth-child(even) {
            //   //even表示偶数
            //   margin: 0 10px;
            // }
          }
        }
        .main-item-text {
          width: 449px;
          font-size: 14px;
          font-weight: bold;
          line-height: 20px;
          color: #777777;
          margin-top: 14px;
        }
        .main-item-url {
          font-size: 12px;
          font-weight: 400;
          color: #4c525a;
          margin-top: 20px;
          cursor: pointer;
          a {
            font-size: 12px;
            font-weight: 400;
            color: #4c525a;
            margin-top: 20px;
            cursor: pointer;
          }
        }
        .main-item-url:hover,
        .main-item-url:hover a {
          color: #0064f9;
        }
      }
    }
  }
  .list-right {
    margin: 21px 40px 0 0;
    ul {
      width: 324px;
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      li:hover {
        transition: 0.5s;
        border: 1px solid #34b299;
      }
      li {
        width: 90px;
        height: 56px;
        border: 1px solid #ffffff;
        border-radius: 2px;
        font-size: 14px;
        text-align: center;
        margin-left: 24px;
        cursor: pointer;
        p:nth-child(1) {
          font-weight: 500;
          color: #2b2b2b;
          line-height: 34px;
        }
        p:nth-child(2) {
          font-weight: 800;
          color: #34b299;
        }
      }
      li:nth-child(1) {
        margin: 0 0 20px 0;
      }
      li:nth-child(2) {
        margin-bottom: 20px;
      }
      li:nth-child(2) {
        margin-bottom: 20px;
      }
      li:nth-child(4) {
        margin-left: 0;
      }
    }
    button {
      width: 208px;
      height: 40px;
      background: #ff7519;
      border-radius: 2px;
      font-size: 14px;
      font-weight: 800;
      line-height: 40px;
      color: #ffffff;
      outline: none;
      border: 0;
      cursor: pointer;
      margin: 15px 0 0 116px;
    }
    button:hover {
      transition: 0.5s;
      background-color: #e36713;
      color: #ffd7c2;
    }
  }
}
</style>
