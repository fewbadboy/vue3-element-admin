<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
    >
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">
          Submit
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [],
        password: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$login_bg: #2d3a4b;

.login-container {
  height: 100%;
  background-color: $login_bg;
}
</style>
