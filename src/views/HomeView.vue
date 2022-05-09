<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <router-view />
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'HomeView',
  mounted() {
    console.log(store.getters.token)
  }
}
</script>
