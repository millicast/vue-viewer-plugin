const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      const packageJson = require('./package.json')
      const base = args[0]['process.env']
      args[0]['process.env'] = {
        ...base,
        PACKAGE_VERSION: JSON.stringify(packageJson.version),
      }
      return args
    })

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
    config.resolve.alias.set(
      '@millicast/sdk',
      path.resolve(__dirname, 'node_modules/@millicast/sdk')
    )
  },
}
