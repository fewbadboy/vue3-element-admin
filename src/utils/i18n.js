// translate router.meta.title, be used in beradcrumb
export function generateTitle(title) {
  const hasTitle = this.$te('route.' + title)
  if (hasTitle) {
    return this.$t('route.' + title)
  }
  return title
}
