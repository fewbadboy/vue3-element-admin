<template>
  <div :class="{'show': show}" class="header-search">
    <svg-icon class="search-icon" icon-class="search" @click.stop="clickIcon" />
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      filterable
      remote
      default-first-option
      class="header-search-select"
      :placeholder="$t('navbar.Search')"
      :loading="loading"
      :remote-method="querySearch"
      @change="changeSearch"
      @blur="closeSearch"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="routeLable(item)"
        class="filter-item"
      />
    </el-select>
  </div>
</template>

<script>
import { toRaw } from 'vue'
import { mapGetters } from 'vuex'
import path from 'path'
import Fuse from 'fuse.js'
export default {
  data() {
    return {
      show: false,
      search: '',
      loading: false,
      options: [],
      searchPool: [],
      fuse: undefined
    }
  },
  computed: {
    ...mapGetters([
      'language',
      'permissionRoutes',
      'supportPinyin'
    ])
  },
  watch: {
    language() {
      this.searchPool = this.generateSearchData(this.permissionRoutes)
    },
    permissionRoutes() {
      this.searchPool = this.generateSearchData(this.permissionRoutes)
    },
    searchPool(list) {
      if (this.language === 'zh' && this.supportPinyin) {
        this.addPinYinField(list)
      }
      this.initFuse(list)
    }
  },
  mounted() {
    this.searchPool = this.generateSearchData(this.permissionRoutes)
  },
  methods: {
    async addPinYinField(list) {
      const { default: pinyin } = await import('pinyin')
      if (Array.isArray(list)) {
        list.forEach(item => {
          const title = item.title
          if (Array.isArray(title)) {
            title.forEach(t => {
              t = pinyin(t, {
                style: pinyin.STYLE_NORMAL
              }).join('')
              item.pinyinTitle = t
            })
          }
        })
        return list
      }
    },
    clickIcon() {
      this.show = !this.show
      if (this.show) {
        this.$nextTick(() => {
          this.$refs.headerSearchSelect.focus()
        })
      }
    },
    changeSearch(val) {
      // val is Proxy
      // Returns the raw, original object of a Vue-created proxy
      this.$router.push(toRaw(val).item.path)
      this.search = ''
      this.show = false
    },
    closeSearch() {
      this.show = false
      this.search = ''
      this.options = []
    },
    initFuse(list) {
      this.fuse = new Fuse(list, {
        threshold: 0.2,
        keys: [{
          name: 'title',
          weight: 2
        }, {
          name: 'pinyinTitle'
        }, {
          name: 'path'
        }]
      })
    },
    /**
     * @returns {Array} { path, title: [] }
     */
    generateSearchData(routes, basePath = '/', prefixTitle = []) {
      let res = []
      for (const route of routes) {
        // exclude externalLink by the way
        if ((route.meta && route.meta.external) || route.hidden) continue
        const data = {
          path: path.resolve(basePath, route.path),
          title: [...prefixTitle]
        }
        if (route.meta && route.meta.title) {
          const i18nTitle = this.$t(`route.${route.meta.title}`)
          data.title = [...data.title, i18nTitle]
          res.push(data)
        }
        if (route.children) {
          const tempData = this.generateSearchData(route.children, data.path, data.title)
          if (tempData.length > 0) {
            res = [...res, ...tempData]
          }
        }
      }
      return res
    },
    querySearch(query) {
      if (query !== '') {
        this.loading = true
        this.options = this.fuse.search(query)
        this.loading = false
      } else {
        this.options = []
      }
    },
    routeLable({ item: { title = [] }} = {}) {
      return title.join(' > ')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  .search-icon {
    font-size: 18px;
    cursor: pointer;
    vertical-align: middle;
  }
  .header-search-select {
    display: inline-block;
    width: 0;
    font-size: 18px;
    vertical-align: middle;
    overflow: hidden;
    transition: width .28s;
  }
  &.show {
    .header-search-select {
      margin-left: 8px;
      width: 210px;
    }
  }
  :hover {
    color: var(--el-color-primary);
  }
}
</style>

<style lang="scss" scoped>
/* change selected color */
// .el-select-dropdown__item {
//   &.selected {
//     &.filter-item {
//       color: var(--el-color-success)
//     }
//   }
// }
</style>
