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
        <el-button
          :loading="loading"
          type="primary"
          style="width: 100%"
          @click="handleLogin"
        >
          {{ $t('login.login') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import store from '@/store'
import LangSelect from '@/components/LangSelect'
import { User, Lock } from '@element-plus/icons-vue'
import { validUsername, validPassword } from '@/utils/validate'
export default {
  components: {
    LangSelect
  },
  setup() {
    const store = useStore()
    return {
      User,
      Lock,
      language: computed(() => store.getters.language)
    }
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (validUsername(value)) {
        callback()
      } else {
        callback(new Error(`${this.$t('login.usernameError')}`))
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (validPassword(value)) {
        callback()
      } else {
        callback(new Error(`${this.$t('login.passwordError')}`))
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false
    }
  },
  watch: {
    language() {
      this.$refs.loginForm.clearValidate()
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(isValid => {
        if (isValid) {
          this.loading = true
          store.dispatch('user/login', this.loginForm)
            .then(_ => {
              this.$router.push({ path: '/' })
              this.loading = false
            })
        } else {
          return false
        }
      })
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
      font-size: 26px;
      color: $light_gray;
      margin: 0 auto 20px;
    }

    .set-language {
      position: absolute;
      right: 0;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>
