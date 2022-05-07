<template>
  <div class="navbar-container">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggle-click="toggleClick" />
    <breadcrumb class="breadcrumb-container" />
    <div class="right-memu">
      111
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Navbar',
  components: {
    Hamburger,
    Breadcrumb
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleClick() {
      this.$store.dispatch('app/toggleSidebar')
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
    height: 46px;
    transition: background .3s;
    cursor: pointer;

    &:hover {
      background: rgba(#fff, 0.025);
    }
  }
  .breadcrumb-container {
    float: left;
  }
}
</style>
