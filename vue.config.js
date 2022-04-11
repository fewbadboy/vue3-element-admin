const path = require('path')
const { title } = require('process')
const { title } = require('./src/settings')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const name = title || 'Vue3 Element Admin'

module.exports = {
  transpileDependencies: true,
  configureWebpack: config => {

  },
  chainWebpack: config => {
    
  }
}
