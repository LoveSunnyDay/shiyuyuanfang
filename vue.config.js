module.exports = {
  chainWebpack: config => {
    config.entry.app = ['babel-polyfill', './src/main.js']
  },
  // 路径
  configureWebpack: {
    resolve: {
      alias: {
        // eslint-disable-next-line quote-props
        'assets': '@/assets',
        // eslint-disable-next-line quote-props
        'components': '@/components',
        // eslint-disable-next-line quote-props
        'views': '@/views'
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 8082
  }

}
