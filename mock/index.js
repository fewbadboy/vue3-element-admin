module.exports = (middlewares, devServer) => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined')
  }

  devServer.app.post('/user/login', (request, response) => {
    console.log(request)
    response.json({
      name: 'a'
    })
  })

  middlewares.unshift((req, res, next) => {
    next()
  })

  return middlewares
}
