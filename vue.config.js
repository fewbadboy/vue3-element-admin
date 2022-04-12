const path = require('path')
const { title } = require('./src/settings')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const name = title || 'Vue3 Element Admin'

module.exports = {
  transpileDependencies: true,
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
