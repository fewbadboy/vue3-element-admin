<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <app-main class="main-container" />
  </div>
</template>

<script>
import { AppMain, Sidebar } from './components'
export default {
  components: {
    AppMain,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>>
