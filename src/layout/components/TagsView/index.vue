<template>
  <el-scrollbar @scroll="handleScroll" class="scrollbar">
    <div class="tags-view-container">
      <router-link
        v-for="tag in visitedViews"
        :key="tag.path"
        class="tags-view-item"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        @click.middle="!isAffix(tag)?closeSelectedTag(tag):''"
        @contextmenu.prevent="openMenu(tag, $event)"
      >
        {{ generateTitle(tag.title) }}
      </router-link>
      <ul
        v-show="visible"
      >
        <li key="refresh">
          {{ $t('tagsView.refresh') }}
        </li>
        <li key="close">
          {{ $t('tagsView.close') }}
        </li>
        <li key="others">
          {{ $t('tagsView.closeOthers') }}
        </li>
        <li key="all">
          {{ $t('tagsView.closeAll') }}
        </li>
      </ul>
    </div>
  </el-scrollbar>
</template>

<script>
import path from 'path'
import { mapGetters } from 'vuex'
import { generateTitle } from '@/utils/i18n'
import store from '@/store'
export default {
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: []
    }
  },
  computed: {
    ...mapGetters([
      'visitedViews',
      'permissionRoutes'
    ])
  },
  watch: {
    $route() {
      // do
    }
  },
  methods: {
    generateTitle,
    isAffix(tag) {
      return tag.meta && tag.meta.affix
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length > 0) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    addTags() {
      const { name } = this.$route
      if (name) {
        store.dispatch('tagsView/addView', this.$route)
      }
    },
    closeSelectedTag() {
      // do
    },
    openMenu(tag, $event) {
      this.visible = true
      this.selectedTag = tag
    },
    closeMenu() {
      this.visible = false
    },
    handleScroll() {
      this.closeMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
.scrollbar {
  width: 100%;

  .tags-view-container {
    height: 34px;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  }
}
</style>
