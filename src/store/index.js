import { createStore } from 'vuex'
import getters from './getters'

// https://webpack.js.org/guides/dependency-management/#context-module-api

const modules = {}

function importAll(r) {
  r.keys().forEach(key => (modules[key] = r(key)))
}

importAll(require.context('./modules/', true, /\.js$/))

export default createStore({
  getters,
  modules
})
