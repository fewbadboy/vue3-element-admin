<template>
  <div class="navbar-container">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggle-click="toggleClick" />
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <header-search class="right-menu-item" />
      <el-tooltip :content="$t('navbar.size')" effect="dark" placement="bottom">
        <size-select class="right-menu-item hover-effect" />
      </el-tooltip>
      <lang-select class="right-menu-item hover-effect" />
      <el-dropdown class="right-menu-item hover-effect">
        <div class="avatar-container">
          <el-avatar shape="square" :src="avatar" @error="errorHandler">
            <svg-icon icon-class="avatar" />
          </el-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-item>
            <router-link to="/">
              {{ $t('navbar.dashboard') }}
            </router-link>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-link :underline="false">
              {{ $t('navbar.logOut') }}
            </el-link>
          </el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import HeaderSearch from '@/components/HeaderSearch'
import SizeSelect from '@/components/SizeSelect'
import LangSelect from '@/components/LangSelect'
export default {
  name: 'Navbar',
  components: {
    Hamburger,
    Breadcrumb,
    HeaderSearch,
    SizeSelect,
    LangSelect
  },
  data() {
    return {
      avater: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleClick() {
      store.dispatch('app/toggleSidebar')
    },
    errorHandler() {
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-container {
  position: relative;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    float: left;
    margin-left: 1em;
    height: 50px;
    transition: background .3s;
    cursor: pointer;

    &:hover {
      background: rgba(#fff, 0.025);
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    float: right;
    line-height: 50px;

    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
      height: 100%;
      font-size: 18px;
      vertical-align: middle;

      &.hover-effect {
        cursor: pointer;
        .el-avatar {
          transition: background .28s;
          &:hover {
            background: var(--el-color-primary);
          }
        }
      }
    }
  }
}
</style>
