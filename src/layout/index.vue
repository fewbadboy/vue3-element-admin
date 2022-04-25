<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container" :class="{hasTagView: needTagsView}">
      <div :class="{'fixed-header': fixedHeader}">
        <navbar />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
      <settings :settings="openDrawer" />
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar, TagsView, AppMain, Settings } from './components'
import { mapState } from 'vuex'
export default {
  components: {
    Navbar,
    TagsView,
    Sidebar,
    AppMain,
    Settings
  },
  data() {
    return {
      openDrawer: false
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.module.scss";
  .app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .fixed-header {
      position: fixed;
      top: 0;
      right: 0;
      // https://github.com/sass/sass/issues/818
      width: calc(100% - #{$sideBarWidth});
      transition: all width 0.28s;
    }
  }
</style>>
