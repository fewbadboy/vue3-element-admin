const state = {
  visitedViews: [],
  cachedViews: []
}

const mutations = {
  ADD_VISITED_VIEW: (state, view) => {
    if (state.visitedViews.some(v => v.path === view.path)) {
      return true
    }
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
  },
  ADD_CACHED_VIEW: (state, view) => {
    if (state.cachedViews.inclure(view.name)) {
      return true
    }
    if (!view.meta.noCache) {
      state.cachedViews.push(view.name)
    }
  },
  DEL_VISITED_VIEW: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  },
  DEL_CACHED_VIEW: (state, view) => {
    const index = state.cachedViews.indexof(view.name)
    index > -1 && state.cachedViews.splice(index, 1)
  },
  DEL_OTHERS_VISITED_VIEW: (state, view) => {
    state.visitedViews = state.visitedViews.filter(v => {
      return v.meta.affix || v.path === view.path
    })
  },
  DEL_OTHERS_CACHED_VIEW: (state, view) => {
    const index = state.cachedViews.indexof(view.name)
    if (index > -1) {
      state.cachedViews = state.cachedViews.slice(index, index + 1)
    } else {
      state.cachedViews = []
    }
  },
  DEL_ALL_VISITED_VIEW: (state) => {
    // keep affix tags
    const affixTags = state.visitedViews.filter(v => v.meta.affix)
    state.visitedViews = affixTags
  },
  DEL_ALL_CACHED_VIEW: (state) => {
    state.cachedViews = []
  },
  UPDATE_VISITED_VIEW: (state, view) => {
    for (let v of state.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view)
        break
      }
    }
  }
}

const actions = {
  addView({ dispatch }, view) {
    dispatch('', view)
  },
  addVisitedView({ commit }, view) {
    commit('ADD_VISITED_VIEW', view)
  },
  addCachedView({ commit }, view) {
    commit('ADD_CACHED_VIEW', view)
  },
  delVisitedView({ commit, state }, view) {
    // do
  },
  delCachedView({ commit, state }, view) {
    // do
  },
  delOthersView({ dispatch, state }, view) {
    // do
  },
  delOthersVisitedView({ commit, state }, view) {
    // do
  },
  delOthersCachedView({ commit, state }, view) {
    // do
  },
  delAllViews({ dispatch, state }, view) {
    // do
  },
  delAllVisitedView({ commit, state }) {
    // do
  },
  delAllCachedView({ commit, state }) {
    // do
  },
  updateVisitedView({ commit }, view) {
    // do
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
