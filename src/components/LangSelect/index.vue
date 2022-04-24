<template>
  <el-dropdown @command="handleSetLanguage">
    <svg-icon icon-class="language" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="lanuage === 'zh'" command="zh">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="lanuage === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
export default {
  name: 'LangSelect',
  setup() {
    const store = useStore()
    return {
      language: computed(() => store.getters.language),
      setLanguage: (lang) => store.dispatch('app/setLanguage', lang)
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.setLanguage(lang)
      // this.$store.dispatch('app/setLanguage', lang)
      ElMessage({
        message: `${this.$t('login.language')}`,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

