<template>
  <svg-icon icon-class="hamburger" :class="{'is-active': isActive}" @click="toggleClick" />
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggleClick'],
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.is-active {
  transform: rotate(180deg);
}
</style>
