<template>
  <div class="editor">
    <Header></Header>
    <div class="editor-main">
          <div class="filter-crumbs">
      <button size="mini" class="button_mini">
         <span class="el-icon-arrow-left"></span>
         <span class="mini_i">返回</span>
       </button>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="crumbs-nav">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>按需求筛选</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
      <p class="editor-title">
        推广内容描述：
        <i class="el-icon-question" title="推广内容描述提示"></i>
      </p>
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
      >
        <!-- 自定义toolar -->
        <div id="toolbar" slot="toolbar">
          <!-- Add a bold button -->
          <button class="ql-bold" title="加粗">Bold</button>
          <button class="ql-italic" title="斜体">Italic</button>
          <button class="ql-underline" title="下划线">underline</button>
          <button class="ql-strike" title="删除线">strike</button>
          <button class="ql-blockquote" title="引用"></button>
          <button class="ql-code-block" title="代码"></button>
          <button class="ql-header" value="1" title="标题1"></button>
          <button class="ql-header" value="2" title="标题2"></button>
          <!--Add list -->
          <button class="ql-list" value="ordered" title="有序列表"></button>
          <button class="ql-list" value="bullet" title="无序列表"></button>
          <!-- Add font size dropdown -->
          <select class="ql-header" title="段落格式">
            <option selected>段落</option>
            <option value="1">标题1</option>
            <option value="2">标题2</option>
            <option value="3">标题3</option>
            <option value="4">标题4</option>
            <option value="5">标题5</option>
            <option value="6">标题6</option>
          </select>
          <select class="ql-size" title="字体大小">
            <option value="10px">10px</option>
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px" selected>16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
          </select>
          <select class="ql-font" title="字体">
            <option value="SimSun">宋体</option>
            <option value="SimHei">黑体</option>
            <option value="Microsoft-YaHei">微软雅黑</option>
            <option value="KaiTi">楷体</option>
            <option value="FangSong">仿宋</option>
            <option value="Arial">Arial</option>
          </select>
          <!-- Add subscript and superscript buttons -->
          <select class="ql-color" value="color" title="字体颜色"></select>
          <select
            class="ql-background"
            value="background"
            title="背景颜色"
          ></select>
          <select class="ql-align" value="align" title="对齐"></select>
          <button class="ql-clean" title="还原"></button>
          <!-- You can also add your own -->
        </div>
      </quill-editor>
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
        <!-- <p class="editor-title">
        注意事项：
        <i class="el-icon-question" title="注意事项提示"></i>
      </p>
      <ul class="editor-lookOut">
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
          未经过该视频媒体编辑确定之前没法具体报价,需要先选文本平台营销顾问预估报价。只有编辑确定视频网站和频道
          具体位置后,才能给您具体报价。
        </li>
        <li>
          5. 工作时间:周一至周六
          09:00-18:00,视频推广处理时间为1-2个工作日,视频首页需要提前2个工作日进行预约。
        </li>
      </ul> -->
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
import { Quill, quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import '@/assets/css/editor.css'
import Header from './Header.vue'

// 自定义字体大小
const Size = Quill.import('attributors/style/size')
Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px']
Quill.register(Size, true)

// 自定义字体类型
var fonts = [
  'SimSun',
  'SimHei',
  'Microsoft-YaHei',
  'KaiTi',
  'FangSong',
  'Arial',
  'Times-New-Roman',
  'sans-serif',
  '宋体',
  '黑体'
]
var Font = Quill.import('formats/font')
Font.whitelist = fonts
Quill.register(Font, true)

export default {
  name: 'Editor',
  data() {
    return {
      content: '',
      editorOption: {
        placeholder:
          '请按照下列各式提供视频发布要求：\n①短视频简介：建议100-500字\n②标签/关键词：可不填\n③短视频链接：如果您提供的视频链接上游简介标签等信息，可不填',
        theme: 'snow', // or 'bubble'
        modules: {
          toolbar: {
            container: '#toolbar'
          }
        }
      },
      radio: '1', // 发布时间单选按钮
      value1: ''
    }
  },
  components: {
    quillEditor,
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
