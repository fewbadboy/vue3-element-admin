<template>
  <el-dropdown @command="handleSetLanguage">
    <svg-icon icon-class="language" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in languageOptions"
          :key="item.value"
          :disabled="item.value===language"
          :command="item.value"
        >
          {{ item.label }}
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
  data() {
    return {
      languageOptions: [
        { label: '中文', value: 'zh' },
        { label: 'English', value: 'en' }
      ]
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.setLanguage(lang)
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

