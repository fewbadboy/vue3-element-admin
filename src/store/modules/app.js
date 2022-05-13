import Cookies from 'js-cookie'
import { getLanguage } from '@/lang'

const state = {
  sidebar: {
    opened: !!Cookies.get('sidebarStatus')
  },
  language: getLanguage(),
  size: Cookies.get('size') || 'default'
}
const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', true)
    } else {
      Cookies.set('sidebarStatus', false)
    }
  },
  CLOSE_SIDEBAR: (state) => {
    state.sidebar.opened = false
    Cookies.set('sidebarStatus', false)
  },
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
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSidebar({ commit }) {
    commit('CLOSE_SIDEBAR')
  },
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
