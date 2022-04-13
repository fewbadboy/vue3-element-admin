const path = require('path')
const { title } = require('./src/settings')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const port = process.env.port || 8080

const name = title || 'Vue3 Element Admin'

module.exports = {
  /**
   * If you plan to deploy your site to https://foo.github.io/bar/
   * then publicPath should be set to "/bar/"
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'web',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  // https://github.com/vuejs/vue-cli 4.5.4 used webpack 5
  devServer: {
    port,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  // https://github.com/survivejs/webpack-merge
  configureWebpack: {
    name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  // https://github.com/neutrinojs/webpack-chain
  chainWebpack: config => {
    // do
  }
}
