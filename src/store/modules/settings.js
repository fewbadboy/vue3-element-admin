import { showSettings, tagsView, fixedHeader, sidebarLogo, supportPinyinSearch } from '@/settings'

const state = {
  theme: '',
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo,
  supportPinyinSearch
}

const mutations = {
  SET_SETTING: (state, { key, value }) => {
    // https://eslint.org/docs/rules/no-prototype-builtins
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = value
    }
  }
}

const actions = {
  setSettings({ commit }, data) {
    commit('SET_LANGUAGE', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
