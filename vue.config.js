const webpack = require('webpack')
const inject = require('webpack-inject-plugin').default;

module.exports = {
  publicPath: './',
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ],
    resolve: {
      alias: {
        'fast-average-color': 'fast-average-color/dist/index.esm.js'
      }
    }
  }
}
