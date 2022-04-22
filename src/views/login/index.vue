<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      label-position="left"
      class="login-form"
    >
      <div class="title-container">
        <h3 class="title">
          {{ $t('login.title') }}
          <lang-select class="set-language" />
        </h3>
      </div>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          autocomplete="on"
          :placeholder="$t('login.username')"
          :prefix-icon="User"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          show-password
          autocomplete="on"
          :placeholder="$t('login.password')"
          :prefix-icon="Lock"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">
          {{ $t('login.login') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
import { User, Lock } from '@element-plus/icons-vue'
export default {
  components: {
    LangSelect
  },
  setup() {
    return {
      User,
      Lock
    }
  },
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
$light_gray:#eee;

.login-container {
  height: 100%;
  background-color: $login_bg;

  .login-form {
    width: 320px;
    margin: 0 auto;
    padding: 160px 35px 0;
  }

  .title-container {
    position: relative;

    .title {
      color: $light_gray;
      margin: 0 auto 20px;
    }

    .set-language {
      color: #fff;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>
