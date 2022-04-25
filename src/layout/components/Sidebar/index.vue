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
      >
        <el-sub-menu index="1">
          <template #title>
            <svg-icon icon-class="dashboard" />
            <span>Navigator One</span>
          </template>
          <el-sub-menu index="1-4">
            <template #title>
              item four
            </template>
            <el-menu-item index="1-4-1">
              item one
            </el-menu-item>
            <el-menu-item index="1-4-2">
              item two
            </el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <svg-icon icon-class="dashboard" />
          <span>Navigator Two</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import LogoPart from './LogoPart'
import variables from '@/styles/index.scss'
console.log(getComputedStyle(document.documentElement).getPropertyValue('--custom-color'))
document.documentElement.style.setProperty('--custom-color', '#ff0')
export default {
  components: {
    LogoPart
  },
  data() {
    return {
      showLogo: true,
      activeMenu: '2'
    }
  },
  computed: {
    isCollapse() {
      return false
    },
    variables() {
      return variables
    }
  },
  mounted() {
    console.log(variables)
  }
}
</script>

<style>

</style>
