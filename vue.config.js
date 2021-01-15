module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //别名
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  // devServer: {
  //   host: '192.168.0.235'
  // }
}
