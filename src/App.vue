<template>
  <el-config-provider :size="size" :locale="getLang">
    <router-view />
  </el-config-provider>
</template>

<script>
import { mapGetters } from 'vuex'
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'
export default {
  computed: {
    ...mapGetters([
      'size',
      'language'
    ]),
    getLang() {
      return this.language === 'zh' ? elementZhLocale : elementEnLocale
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
