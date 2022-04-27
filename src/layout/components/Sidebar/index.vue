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
        :unique-opened="false"
        :router="true"
      >
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
        <el-menu-item index="http://www.baidu.com">
          <svg-icon icon-class="dashboard" />
          <span>Navigator Two</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
    <menu-item :icon="'chart'" :title="'chart title'" />
  </div>
</template>

<script>
import LogoPart from './LogoPart'
import MenuItem from './MenuItem'
import variables from '@/styles/variables.module.scss'
import { mapGetters } from 'vuex'
export default {
  components: {
    LogoPart,
    MenuItem
  },
  data() {
    return {
      showLogo: true,
      activeMenu: '2'
    }
  },
  computed: {
    ...mapGetters([
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
