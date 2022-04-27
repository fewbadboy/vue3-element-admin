module.exports = (middlewares, devServer) => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined')
  }

  devServer.app.post('/user/login', (request, response) => {
    console.log(request)
    response.json({
      code: 200,
      data: {
        token: 'usertoken'
      }
    })
  })

  devServer.app.get('/user/info', (request, response) => {
    response.json({
      code: 200,
      data: {
        name: 'Admin',
        roles: ['admin'],
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
      }
    })
  })

  devServer.app.post('/user/logout', (request, response) => {
    response.json({
      code: 200,
      data: 'success'
    })
  })

  middlewares.unshift((req, res, next) => {
    next()
  })

  return middlewares
}
