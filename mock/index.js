module.exports = (middlewares, devServer) => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined')
  }

  devServer.app.post('/login', (request, response) => {
    response.json({
      name: 'a'
    })
  })

  middlewares.unshift((req, res, next) => {
    console.log('Before Each Route')
    next()
  })

  return middlewares
}
