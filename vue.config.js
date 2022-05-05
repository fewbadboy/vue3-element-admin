const path = require('path')
const { networkInterfaces } = require('os')
const { title } = require('./src/settings')

const port = process.env.port || 8080

const name = title || 'Vue3 Element Admin'

let host = ''
for (const item of networkInterfaces().WLAN || networkInterfaces()['以太网']) {
  if (item.family.includes('IPv4')) {
    host = item.address
    break
  }
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

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
  // https://github.com/vuejs/vue-cli v 5.0.4  used webpack 5
  devServer: {
    port,
    host,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    },
    setupMiddlewares: require('./mock')
  },
  // https://github.com/survivejs/webpack-merge
  configureWebpack: {
    name,
    resolve: {
      fallback: {
        path: require.resolve('path-browserify')
      }
    }
  },
  // https://github.com/neutrinojs/webpack-chain
  chainWebpack(config) {
    config.plugins.delete('prefetch')

    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              name: (module, chunks, cacheGroupKey) => `chunk-${cacheGroupKey}`,
              cacheGroups: {
                elementPlus: {
                  test: /[\\/]node_modules[\\/]_?element-plus(.*)/,
                  priority: 20
                },
                libs: {
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10

                },
                commons: {
                  test: resolve('src/components'),
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
