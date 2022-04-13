<template>
  <div class="about">
    <h1>This is an about page {{ $t('login.title') }}</h1>
    <el-time-picker v-model="date" placeholder="Arbitrary time" />
    <el-button>按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      date: ''
    }
  }
}
</script>

<style>

</style>
