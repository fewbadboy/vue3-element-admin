<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DashboardAdmin from './admin'
import DashboardUser from './user'
export default {
  name: 'Dashboard',
  components: {
    DashboardAdmin,
    DashboardUser
  },
  data() {
    return {
      currentRole: 'DashboardAdmin'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'DashboardUser'
    }
  }
}
</script>

<style>

</style>
