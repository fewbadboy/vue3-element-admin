<template>
  <div :class="{'show': show}" class="header-search">
    <svg-icon class="search-icon" icon-class="search" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style>

</style>
