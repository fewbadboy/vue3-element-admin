import { getToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  role: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLE: (state, role) => {
    state.role = role
  }
}

const actions = {
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLE', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
