<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in levelList"
        :key="item.path"
      >
        <span v-if="index===levelList.length-1">{{ generateTitle(item.meta.title) }}</span>
        <a v-else href="#" @click.prevent="handleLink(item)">{{ generateTitle(item.meta.title) }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { generateTitle } from '@/utils/i18n'
/**
 * https://github.com/pillarjs/path-to-regexp
 * urn a path string such as /user/:name into a regular expression
 */
import { compile } from 'path-to-regexp'
export default {
  data() {
    return {
      levelList: []
    }
  },
  watch: {
    $route(route) {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
      let mached = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = mached[0]
      if (!this.isDashboard(first)) {
        mached = [{ path: '/dashboard', meta: { title: 'dashboard' }}, ...mached]
      }
      this.levelList = [...mached]
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.toLowerCase() === 'dashboard'
    },
    pathCompile(path) {
      const { params } = this.$route
      return compile(path)(params)
    },
    handleLink(item) {
      const { redirect = '', path } = item
      redirect ? this.$router.push(redirect) : this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  line-height: 50px;
  margin-left: 8px;
}
</style>
