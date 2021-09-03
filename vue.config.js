module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //别名
        'components': '@/components',
        'common': '@/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
}
