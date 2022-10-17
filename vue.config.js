module.exports = {
  chainWebpack: (config) => {
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
  },
}
