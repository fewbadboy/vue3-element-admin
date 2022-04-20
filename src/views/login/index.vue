<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
      class="login-form"
    >
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" :prefix-icon="Search" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" show-password autocomplete="off" :prefix-icon="Search" />
      </el-form-item>
      <el-form-item style="text-align: center">
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

  .login-form {
    width: 520px;
    margin: 0 auto;
    padding: 160px 35px 0;
  }
}
</style>
