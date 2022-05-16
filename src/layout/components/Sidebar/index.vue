<template>
  <div :class="{'has-logo': showLogo}">
    <logo-part :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBgColor"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
      >
        <sidebar-item
          v-for="route in permissionRoutes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import LogoPart from './LogoPart'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.module.scss'
import { mapGetters } from 'vuex'
export default {
  components: {
    LogoPart,
    SidebarItem
  },
  data() {
    return {
      showLogo: true,
      activeMenu: '/dashboard',
      hidden: false
    }
  },
  computed: {
    ...mapGetters([
      'permissionRoutes',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    },
    variables() {
      return variables
    }
  },
  watch: {
    $route() {
      this.activeMenu = this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
