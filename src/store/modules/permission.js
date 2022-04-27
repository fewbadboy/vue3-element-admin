import { constantRoutes, asyncRoutes } from '@/router'

/**
 * use meta.roles to determine the current user's permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  }
  return true
}

/**
 * filter asynchronous routes by recursion
 * @param {Array} routes asyncRoutes
 * @param {array} roles
 */
export function filterAsyncRoutes(routes, roles) {
  const filterRoutes = []
  routes.forEach(route => {
    const temp = { ...route }
    if (hasPermission(roles, temp)) {
      if (temp.children) {
        temp.children = filterAsyncRoutes(temp.children, roles)
      }
      filterRoutes.push(temp)
    }
  })
  return filterRoutes
}

const state = {
  routes: [],
  addRouters: []
}

const mutations = {
  SET_ROUTRS: (state, routes) => {
    state.routes = [
      ...constantRoutes,
      ...routes
    ]
    state.addRouters = routes
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        console.log(accessedRoutes)
      }
      commit('SET_ROUTRS', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
