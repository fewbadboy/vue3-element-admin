<template>
  <div class="drawer-container">
    <el-drawer v-model="setDrawer" :title="$t('settings.title')">
      Settings
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Boolean,
      defult: false
    }
  },
  emits: ['update:settings'],
  computed: {
    setDrawer() {
      return this.settings
    }
  }
}
</script>

<style>

</style>
