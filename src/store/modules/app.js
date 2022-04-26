import Cookies from 'js-cookie'
import { getLanguage } from '@/lang'

const state = {
  sidebar: {
    opened: !!Cookies.get('sidebarStatus')
  },
  language: getLanguage(),
  size: Cookies.get('size') || 'medium'
}

const mutations = {
  SET_LANGUAGE: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  }
}

const actions = {
  setLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
