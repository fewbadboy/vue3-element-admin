<template>
  <div class="tags-view-container">
    <el-scrollbar id="scrollbar" ref="scrollbar" @scroll="handleScroll" class="scrollbar">
      <router-link
        v-for="tag in visitedViews"
        :key="tag.path"
        class="tags-view-item"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        @click.middle="!isAffix(tag)?closeSelectedTag(tag):''"
        @contextmenu.prevent="openMenu(tag, $event)"
      >
        {{ generateTitle(tag.title) }}
        <svg-icon
          v-if="!isAffix(tag)"
          icon-class="close"
          class="icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        />
      </router-link>
    </el-scrollbar>
    <ul
      v-show="visible"
      :style="{top: `${top}px`, left: `${left}px`}"
      class="tag-view-menu"
    >
      <li key="refresh" @click="refreshSelectedTag(selectedTag)">
        {{ $t('tagsView.refresh') }}
      </li>
      <li v-if="!isAffix(selectedTag)" key="close" @click="closeSelectedTag(selectedTag)">
        {{ $t('tagsView.close') }}
      </li>
      <li key="others" @click="closeOthersTags">
        {{ $t('tagsView.closeOthers') }}
      </li>
      <li key="all" @click="closeAllTags(selectedTag)">
        {{ $t('tagsView.closeAll') }}
      </li>
    </ul>
  </div>
</template>

<script>
import path from 'path'
import { nextTick } from 'vue'
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
      'sidebar',
      'visitedViews',
      'permissionRoutes'
    ])
  },
  watch: {
    $route: {
      handler() {
        this.addTags()
        this.moveToCurrentTag()
      }
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  created() {
    this.initTags()
    this.addTags()
  },
  methods: {
    generateTitle,
    isActive({ path = '' } = {}) {
      return path === this.$route.path
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix
    },
    initTags() {
      const affixTags = this.affixTags = this.filterAffixTags(this.permissionRoutes)
      for (const tag of affixTags) {
        if (tag.name) {
          store.dispatch('tagsView/addVisitedView', tag)
        }
      }
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
    moveToCurrentTag() {
      nextTick(() => {
        const sidebarWidth = this.sidebar.opened ? 210 : 54
        if (document.getElementsByClassName('tags-view-item router-link-active')) {
          console.log(document.getElementsByClassName('tags-view-item router-link-active')[0])
          const { left, right } = document.getElementsByClassName('tags-view-item router-link-active')[0].getBoundingClientRect()

          if (left < sidebarWidth) {
            const { left: overLeft } = document.getElementById('scrollbar').getElementsByClassName('el-scrollbar__view')[0].getBoundingClientRect()
            if (overLeft < sidebarWidth) {
              this.$refs.scrollbar.setScrollLeft(Math.ceil(sidebarWidth - ~~left) - sidebarWidth + overLeft)
            } else {
              this.$refs.scrollbar.setScrollLeft(Math.ceil(sidebarWidth - ~~left))
            }
          }
          if (right > innerWidth) {
            const { left: overLeft } = document.getElementById('scrollbar').getElementsByClassName('el-scrollbar__view')[0].getBoundingClientRect()
            if (overLeft < sidebarWidth) {
              this.$refs.scrollbar.setScrollLeft(Math.ceil(right - innerWidth) + sidebarWidth - overLeft + 16)
            } else {
              this.$refs.scrollbar.setScrollLeft(Math.ceil(right - innerWidth) + 16)
            }
          }
        }
      })
    },
    toLastView(visitedViews, view) {
      const lastView = visitedViews.slice(-1)[0]
      if (lastView) {
        console.log(lastView)
        this.$router.push(lastView.fullPath)
      } else {
        // need relaod home page
        if (view.name === 'Dashboard') {
          this.$router.replace({ path: `/redirect${view.fullPath}` })
        } else {
          this.$router.push('/')
        }
      }
    },
    openMenu(tag, $event) {
      const sidebarWidth = this.sidebar.opened ? 210 : 54
      this.visible = true
      this.selectedTag = tag
      this.left = $event.pageX - sidebarWidth - 16
      this.top = 36
    },
    closeMenu() {
      this.visible = false
    },
    handleScroll() {
      this.closeMenu()
    },
    refreshSelectedTag(view) {
      store.dispatch('tagsView/delCachedView', view).then(() => {
        console.log(view)
        const { fullPath } = view
        nextTick(() => {
          this.$router.replace(`/redirect${fullPath}`)
        })
      })
    },
    closeSelectedTag(view) {
      store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
        }
      })
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag)
      store.dispatch('tagsView/delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    closeAllTags(view) {
      store.dispatch('tagsView/delAllViews').then(({ visitedViews }) => {
        if (this.affixTags.some(tag => tag.path === view.path)) {
          return true
        }
        this.toLastView(visitedViews, view)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  position: relative;
  height: 34px;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  text-align: left;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  .scrollbar {
    width: 100%;
    white-space: nowrap;
    .tags-view-item {
      display: inline-block;
      margin: 3px 4px;
      padding: 0 8px;
      font-size: 14px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      &:first-of-type {
        margin-left: 16px;
      }
      &:last-of-type {
        margin-right: 16px;
      }
      &.router-link-active {
        color: var(--el-color-white);
        background-color: #42b983;
        border-color: #42b983;
        &::before {
          content: '';
          display: inline-block;
          position: relative;
          margin-right: 4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--el-color-white);
        }
      }
      .icon-close {
        position: relative;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        transition: all .3s cubic-bezier(.645, .045, .355, 1);
        &:hover {
          background-color: var(--el-color-info-light-7);
        }
      }
    }
  }
  .tag-view-menu {
    position: absolute;
    margin: 0;
    padding: 4px 0;
    border-radius: 4px;
    color: var(--el-text-color-primary);
    background: var(--el-color-white);
    list-style: none;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      padding: 4px 8px;
      &:hover {
        cursor: pointer;
        background: var(--el-color-info-light-9);
      }
    }
  }
}
</style>
