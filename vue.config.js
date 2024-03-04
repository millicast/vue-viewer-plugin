const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    // Vue Loader Configuration
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}), // merge existing compilerOptions, if any
          isCustomElement: (tag) => tag === 'google-cast-launcher',
        }
        return options
      })
      .end()

    config.module
      .rule('nal-extractor')
      .test(/node_modules\/nal-extractor\/.*\.js$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
    
    config.entry('worker')
      .add('./src/service/utils/worker.js')
    
    config.output.filename('worker.js')
  },
}
