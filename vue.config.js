module.exports = {
  transpileDependencies: true,
  publicPath: '/mall-mogujie',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', 'css' ,'scss'],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
