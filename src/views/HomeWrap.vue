<template>
  <div>
    <h1>HomeWrap</h1>
    <h2>{{ path }}</h2>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'HomeWrap',
  computed: {
    path() {
      return this.$route.path
    }
  }
}
</script>

<style>

</style>
