<template>
  <div class="sidebar-logo-container" :class="{'is-collapse': collapse}">
    <router-link class="sidebar-logo-link" to="/">
      <img :src="logo" class="sidebar-logo">
      <transition name="sidebar-logo">
        <div v-if="collapse" class="sidebar-title">
          {{ title }}
        </div>
      </transition>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
      title: 'vue3-element-admin',
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-logo-enter-active {
  transition: opacity 1.5s;
}
.sidebar-logo-enter-from,
.sidebar-logo-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;

  & .sidebar-logo-link {
    width: 100%;
    height: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }

    & .sidebar-title {
      display: inline-block;
      color: #fff;
      font-weight: 600;
      vertical-align: middle;
    }
  }
}
</style>
