const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
// const px2rem = require('postcss-px2rem')

// const postcss = px2rem({
//   remUnit: 32 // 基准大小 baseSize
// })

module.exports = {
  // publicUrl: '/',
  outputDir: 'dist',
  indexPath: 'index.html',
  pages: undefined,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
    },
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  devServer: {
    // disableHostCheck: true,
    host: 'localhost',
    port: 8888,
    https: false,
    hotOnly: false,
    open: true,
    proxy: {
      '/api': {
        target : 'http://localhost:3888',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // pluginOptions: {
    //   // 第三方插件配置
    // }
  },
  // configureWebpack: config => {
  //   if (isProduction) {
  //      // 生产环境
  //   } else {
  //     // 开发环境 
  //   }
  // },
}