<template>
  <div :class="{'show': show}" class="header-search">
    <svg-icon class="search-icon" icon-class="search" @click.stop="clickIcon" />
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      filterable
      remote
      class="header-search-select"
      placeholder="Search"
      :loading="loading"
      :remote-method="querySearch"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join(' > ')"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      search: '',
      loading: false,
      options: [],
      fuse: null
    }
  },
  methods: {
    clickIcon() {
      this.show = !this.show
      if (this.show) {
        this.$nextTick(_ => {
          this.$refs.headerSearchSelect.focus()
        })
      }
    },
    querySearch() {
      // do
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
