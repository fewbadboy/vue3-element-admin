<template>
  <el-scrollbar class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :max="10" :include="cachedViews">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppMain',
  computed: {
    ...mapGetters(['cachedViews'])
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* navbar height 50px */
  max-height: calc(100vh - 50px);
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagView {
  .app-main {
     /* navbar height 50px, tags-view height 34px */
    padding-top: 84px;
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>
