<template>
  <component :is="type" v-bind="linkProps(to)" class="sidebar-link">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'
export default {
  name: 'MenuLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.to)
    },
    type() {
      return this.isExternal ? 'a' : 'router-link'
    }
  },
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-link {
  text-decoration: none;
  &:hover, &:active {
    text-decoration: none;
  }
}
</style>
