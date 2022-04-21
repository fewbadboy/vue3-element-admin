
module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        // https://github.com/svg/svgo/blob/main/plugins/removeAttrs.js
        attrs: '(fill|stroke|fill-rule)'
      }
    }
  ]
}
