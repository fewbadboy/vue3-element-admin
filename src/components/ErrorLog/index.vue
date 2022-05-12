<template>
  <div v-if="errorLog.length > 0">
    <el-badge is-dot style="line-height: 25px" @click="dialogVisible=true">
      <el-button style="padding: 8px 10px" size="small" type="danger">
        <svg-icon icon-class="bug" />
      </el-button>
    </el-badge>
    <el-dialog :model-value="dialogVisible">
      <template #title>
        <span style="margin-right: 10px">Error Log</span>
        <el-button size="small" type="primary" @click="clearAll">
          Clear All
        </el-button>
      </template>
      <el-table :data="errorLog">
        <el-table-column label="Message">
          <template #default="{row}">
            <div>
              <span class="message-title">Message:</span>
              <el-tag type="danger">
                {{ row.err }}
              </el-tag>
            </div>
            <div>
              <span class="message-title">Info:</span>
              <el-tag type="warning">
                {{ row.info }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Stack">
          <template #default="{row}">
            {{ row.err.stack }}
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'errorLog'
    ])
  },
  methods: {
    clearAll() {
      this.dialogVisible = false
      store.dispatch('errorLog/clearErrorLog')
    }
  }
}
</script>

<style>

</style>
