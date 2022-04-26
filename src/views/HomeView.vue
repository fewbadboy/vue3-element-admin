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

export default {
  name: 'HomeView',
  mounted() {
    console.log(this.$store.getters.token)
  }
}
</script>
