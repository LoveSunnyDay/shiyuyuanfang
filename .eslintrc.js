module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0, //函数定义时括号前面要有空格 - 关闭
    'arrow-parens': 0, //箭头函数用小括号括起来 - 关闭
    'no-undef': 0,//不能有未定义的变量 - 关闭
    'no-unused-vars': 'off'

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
