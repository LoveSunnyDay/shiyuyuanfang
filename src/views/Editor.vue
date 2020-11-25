<template>
  <div class="editor">
    <Header></Header>
    <div class="editor-main">
          <div class="filter-crumbs">
      <button size="mini" class="button_mini">
         <span class="el-icon-arrow-left"></span>
         <span class="mini_i"  @click="$router.back(-1)">返回</span>
       </button>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="crumbs-nav">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>按需求筛选</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
      <p class="editor-title">
        推广内容描述：
        <i class="el-icon-question" title="推广内容描述提示"></i>
      </p>
      <el-input
          type="textarea"
          :rows="2"
          placeholder="请按照需求发布要求"
          v-model="textarea">
      </el-input>
      <div class="editor-content">
        <p class="editor-title">
          推广平台：
          <i class="el-icon-question" title="推广平台提示"></i>
        </p>
        <ul class="editor-platform">
          <li>抖音</li>
          <li>小红书</li>
          <li>B站</li>
          <li>快手</li>
          <li>微博</li>
          <li>公众号</li>
        </ul>
        <p class="editor-title">
          发布时间：
          <i class="el-icon-question" title="发布时间提示"></i>
        </p>
        <ul class="editor-time">
          <li>
            <el-radio v-model="radio" label="1">两天内</el-radio>
          </li>
          <li>
            <el-radio v-model="radio" label="2">一周内</el-radio>
          </li>
          <li>
            <el-radio v-model="radio" label="3">10天内</el-radio>
          </li>
          <li>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </li>
        </ul>
        <div class="editor-button">
          <!-- <button>下一步：按要求给我推荐网红</button> -->
          <router-link to="/Filter" tag="button"
            >下一步：按要求给我推荐网红</router-link
          >
        </div>
      </div>
    </div>
    <div class="editor-xian"></div>
    <div class="notes">
      <p class="notes-title">
        5条注意事项：
        <i class="el-icon-question" title="注意事项提示"></i>
      </p>
      <p class="notes-text">需求筛选说明</p>
      <ul>
        <li>亲爱的超火引擎客户：</li>
        <li>
          1.
          首先需要提供原视频或者视频链接,有视频链接的可以直接复制链接放在营销推广位置。
        </li>
        <li>
          2. 需要频道推荐,首先要上传再相关频道和相关分类里,然后给我们视频链接。
        </li>
        <li>
          3. 视频链接通过编辑审核后,将由编辑决定该视频可以推荐的视频网站位置。
        </li>
        <li>
          4.
          未经过该视频媒体编辑确定之前没法具体报价,需要先选文本平台营销顾问预估报价。只有编辑确定视频网站和频道具体位置后,才能给您具体报价。
        </li>
        <li>
          5. 工作时间:周一至周六
          09:00-18:00,视频推广处理时间为1-2个工作日,视频首页需要提前2个工作日进行预约。
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Editor',
  data() {
    return {
      radio: '',
      textarea: ''
    }
  },
  components: {
    Header
  }
}
</script>

 <style lang="less" scoped>
.editor {
  margin-top: 100px;
  .editor-main {
    width: 944px;
    margin: 66px auto 0;
      .filter-crumbs{
    margin-bottom: 40px;
    .button_mini{
      width: 70px;
    height: 26px;
    cursor:pointer;
    outline: none;
    border-radius: 13px;
      float: left;
      color:#3D3A3A;
      background: #EFEFEF;
      margin-right: 20px;
      border: none;
    }
    .crumbs-nav{
      padding-top:8px;
      color: #888888;
       /deep/ .el-breadcrumb__inner:hover{
        color: #888888;
      }
    }
  }
    .editor-title {
      font-size: 18px;
      font-weight: bold;
      color: #191919;
      margin-bottom: 27px;
      i {
        cursor: pointer;
      }
    }
    .quill-editor {
      cursor: pointer;
      height: 600px;
    }
    .editor-content {
      padding-left: 12px;
      p:first-child {
        margin: 72px 0 18px 0;
      }
      .editor-platform {
        display: flex;
        margin-bottom: 51px;
        li {
          width: 80px;
          height: 40px;
          border: 1px solid #00a581;
          border-radius: 4px;
          font-size: 18px;
          font-weight: bold;
          color: #35b79b;
          line-height: 40px;
          text-align: center;
          margin-right: 36px;
          cursor: pointer;
        }
      }
      .editor-time {
        display: flex;
        li {
          margin-right: 26px;
          height: 40px;
          line-height: 40px;
          margin-top: -20px;
        }
      }
      .editor-button {
        display: flex;
        justify-content: flex-end;
        margin-top: 56px;
        button {
          width: 260px;
          height: 40px;
          background: #FF7519;
          border-radius: 4px;
          font-size: 18px;
          outline: none;
          color: #fffdf9;
          border: 0;
          margin-left: 41px;
          cursor: pointer;
        }
        button:hover {
          background: #E36713;
          color: #FFD7C2;
        }
      }
    }
  }
  .editor-xian {
    width: 100%;
    height: 0px;
    border: 1px solid rgba(112, 112, 112, 0.10196078431372549);
    margin-top: 46px;
  }
  .notes {
    width: 1094px;
    height: 454px;
    background-image: url(../assets/image/editor-notes.png);
    margin: 80px auto 30px;
    .notes-title {
      font-size: 18px;
      font-weight: bold;
      color: #656565;
      text-align: center;
    }
    .notes-text {
      font-size: 24px;
      font-weight: bold;
      color: #343434;
      text-align: center;
      margin-top: 58px;
    }
    ul {
      margin: 50px 0 0 88px;
      font-size: 18px;
      line-height: 30px;
      color: #656565;
      li {
        font-weight: 500;
        width: 930px;
      }
      li:nth-child(1) {
        margin-bottom: 10px;
      }
      li:last-child {
        color: #B32A13;
      }
    }
  }
}
/deep/ .el-textarea__inner{
  height:600px
};
/deep/.ql-editor {
  font-size: 18px;
  line-height: 2.4;
}
/deep/.ql-toolbar.ql-snow .ql-picker-label {
  outline: none;
}
/deep/.el-radio__inner {
  border-color: #35b79b;
  width: 20px;
  height: 20px;
}
/deep/.el-radio__input.is-checked + .el-radio__label {
  color: #656565;
}
/deep/.el-radio__input.is-checked .el-radio__inner {
  border-color: #35b79b;
  background: #35b79b;
}

/deep/.el-radio__label {
  padding-left: 3px;
  font-size: 16px;
  font-weight: 500;
  color: #656565;
}
</style>
