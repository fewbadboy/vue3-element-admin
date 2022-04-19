<template>
  <div>Login</div>
</template>

<script>
import { login } from '@/api/user'
export default {
  mounted() {
    login({ username: 'admin' }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style>

</style>
