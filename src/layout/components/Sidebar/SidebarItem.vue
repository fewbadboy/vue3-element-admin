<template>
  <el-sub-menu index="/home">
    <template #title>
      <svg-icon icon-class="dashboard" />
      <span>Home</span>
    </template>
    <el-sub-menu index="/home/view">
      <template #title>
        View
      </template>
      <el-sub-menu index="/home/view/wrap">
        <template #title>
          Wrap
        </template>
        <el-menu-item index="/home/view/wrap/main">
          Main
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/home/view/1-4-2">
        item two
      </el-menu-item>
    </el-sub-menu>
  </el-sub-menu>
  <div v-if="hidden">
    <el-menu-item index="/Two">
      <svg-icon icon-class="dashboard" />
      <span>Navigator Two</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
