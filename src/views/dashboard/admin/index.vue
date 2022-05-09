<template>
  <div class="dashboard-user-container">
    <h1>{{ name }}</h1>
    <el-date-picker />
    <el-image :src="emptyGif">
      <template #placeholder>
        <el-icon><icon-picture /></el-icon>
      </template>
    </el-image>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DashboardAdmin',
  data() {
    return {
      emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style>

</style>
