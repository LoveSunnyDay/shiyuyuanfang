module.exports = {
  chainWebpack: config => {
      config.entry.app = ['babel-polyfill', './src/main.js'];
    },


}
