<template>
  <div :class="{'has-logo': showLogo}">
    <logo-part :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBgColor"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :router="true"
      >
        <sidebar-item
          v-for="route in permission_routes"
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
      activeMenu: '2',
      hidden: false
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    isCollapse() {
      return this.sidebar.opened
    },
    variables() {
      return variables
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
