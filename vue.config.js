module.exports = {
  chainWebpack: (config) => {
    // Vue Loader Configuration
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}), // merge existing compilerOptions, if any
          isCustomElement: (tag) => tag === 'google-cast-launcher',
        }
        return options
      })

    config.module
      .rule('nal-extractor')
      .test(/node_modules\/nal-extractor\/.*\.js$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
  },
} 
