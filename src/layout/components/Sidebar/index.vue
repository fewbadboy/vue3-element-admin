<template>
  <div :class="{'has-logo': showLogo}">
    <span>Logo</span>
    <el-scrollbar>
      <div>
        Sidebar
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogo: true
    }
  }
}
</script>

<style>

</style>
