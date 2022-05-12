const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles,
  avatar: state => state.user.avatar,
  permissionRoutes: state => state.permission.routes,
  supportPinyin: state => state.settings.supportPinyinSearch,
  errorLog: state => state.errorLog.logs
}

export default getters
