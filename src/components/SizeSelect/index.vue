<template>
  <el-dropdown trigger="click" @command="handleSetSize">
    <div>
      <svg-icon class="size-icon" icon-class="size" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in sizeOptions"
          :key="item.value"
          :disabled="size===item.value"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import { ElMessage } from 'element-plus'
export default {
  data() {
    return {
      sizeOptions: [
        { label: 'large', value: 'large' },
        { label: 'default', value: 'default' },
        { label: 'small', value: 'small' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'size'
    ])
  },
  methods: {
    handleSetSize(size) {
      store.dispatch('app/setSize', size)
      ElMessage({
        type: 'success',
        message: 'Switch Size Success'
      })
    }
  }
}
</script>

<style>

</style>
