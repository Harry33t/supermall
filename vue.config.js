module.exports = {
  configureWebpack:{
    resolve: {
      // 配置路径方便后期import
      alias:{
        // vuecli3 @默认就是src
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  }
}