<template>
  <div>
    <div class="filter-list" v-for="list in list" :key="list.id">
      <div class="list-left">
        <div class="list-left-main">
          <div class="left-main-icon">
            <img
              :src="
                list.avatar_base_url
                  ? list.avatar_base_url + '/' + list.avatar_path
                  : require('../../assets/image/myCenter/icon.png')
              "
              alt=""
            />
            <p>粉丝数:{{ list.fan_count }}W</p>
          </div>
          <div class="left-main-item">
            <div class="main-item-name">
              <img
                :src="
                  list.plat.thumbnail_base_url + '/' + list.plat.thumbnail_path
                "
                alt=""
              />
              <p class="main-item-name-xian"></p>
              <p>{{ list.nickname }}</p>
              <ul v-if="list.tags != ''">
                <li v-for="(item, key) in list.tags.split('、')" :key="key">
                  {{ item }}
                </li>
                <!-- <li>家庭</li>
                <li>搞笑</li>
                <li>颜值</li>
                <li>音乐</li>
                <li>上海地区</li> -->
              </ul>
              <p class="main-item-name-null" v-else>更新中</p>
            </div>
            <div class="main-item-case">
              <p>案例：</p>
              <ul v-if="list.cases != ''">
                <li>{{ list.cases.replace('、', ' / ') }}</li>
                <!-- <li>/</li>
                <li>比亚迪</li>
                <li>/</li>
                <li>哈弗</li>
                <li>/</li>
                <li>五菱</li> -->
              </ul>
              <p v-else>更新中</p>
            </div>
            <p class="main-item-text" v-if="list.introduce != ''">
              {{ list.introduce }}
            </p>
            <p class="main-item-text" v-else>更新中</p>
            <p class="main-item-url">
              <a
                :href="list.home_url"
                target="_blank"
                v-if="list.home_url != ''"
                class="main-item-url-value"
              >
                TA的官方链接
              </a>
              <a href="javascript:;" v-else class="main-item-url-null">
                TA的官方链接
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="list-right">
        <ul>
          <li v-for="list in list.products" :key="list.id">
            <p>{{ list.name }}</p>
            <p>￥{{ list.price }}</p>
          </li>
        </ul>
        <!-- <button>找TA推广</button> -->
        <router-link
          :to="{ path: '/DetailKuaiShou/' + list._id }"
          class="list-right-button"
          target="_blank"
          >找TA推广
        </router-link>
      </div>
    </div>
    <ExpandMore :isLastPage="isLastPage" @expandMore="expandMore" />
  </div>
</template>

<script>
import ExpandMore from '@/components/ExpandMore'
export default {
  components: {
    ExpandMore
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    isLastPage: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    expandMore() {
      this.$emit('expandMore')
    }
  },
  created() {}
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
        position: relative;
        .main-item-name {
          display: flex;
          img {
            width: 30px;
            height: 30px;
          }
          .main-item-name-xian {
            width: 2px;
            background: #b9b9b9;
            margin: 0 10px;
          }
          p {
            font-size: 20px;
            font-weight: 800;
            color: #1a1a1a;
            line-height: 30px;
          }
          ul {
            display: flex;
            margin-top: 6px;
            li {
              font-size: 14px;
              font-weight: 500;
              height: 20px;
              line-height: 20px;
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
          .main-item-name-null {
            margin-left: 20px;
            font-size: 14px;
            line-height: 30px;
            font-weight: 400;
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
          position: absolute;
          bottom: 6px;
          left: 0;
          width: 92px;
          height: 20px;
          background: #ffffff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
          border-radius: 2px;
          text-align: center;
          a {
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            color: #4c525a;
            transition: 0.3s;
          }
          .main-item-url-value:hover {
            color: #cc4b42;
          }
          .main-item-url-null {
            // pointer-events: none; // 禁用a标签跳转
            cursor: not-allowed; // 鼠标变成禁止
          }
        }
      }
    }
  }
  .list-right {
    margin: 21px 40px 0 0;
    position: relative;
    ul {
      width: 324px;
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      // li:hover {
      //   transition: 0.5s;
      //   border: 1px solid #34b299;
      // }
      li {
        width: 90px;
        height: 56px;
        border: 1px solid #34b299;
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
    .list-right-button {
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
      position: absolute;
      bottom: 24px;
      right: 0;
      text-align: center;
    }
    .list-right-button:hover {
      transition: 0.5s;
      background-color: #e36713;
      color: #ffd7c2;
    }
  }
}
</style>
