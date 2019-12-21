module.exports = {
  'plugins': {
    'postcss-px2rem-exclude': {
      remUnit: 32,
      // propList: ['*','!border'],
      exclude: '/node_modules/'   //过滤插件
    }
  }
}