<template>
  <div v-if="!item.hidden">
    <template
      v-if="hasOneShowingChild(item.children, item) && !onlyOneChild.children"
    >
      <menu-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <menu-item
            :icon="onlyOneChild.meta&&onlyOneChild.meta.icon||(item.meta&&item.meta.icon)"
            :title="onlyOneChild.meta&&onlyOneChild.meta.title"
            :is-only-top="true"
          />
        </el-menu-item>
      </menu-link>
    </template>
    <el-sub-menu
      v-else
      :index="resolvePath(item.path)"
    >
      <template #title>
        <menu-item
          v-if="item.meta"
          :icon="item.meta.icon"
          :title="item.meta.title"
          :is-only-top="false"
        />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import MenuLink from './MenuLink'
import MenuItem from './MenuItem.vue'
export default {
  name: 'SidebarItem',
  components: {
    MenuLink,
    MenuItem
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    this.onlyOneChild = {}
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // if only has one showing child
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '' }
        return true
      }
      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style>

</style>
