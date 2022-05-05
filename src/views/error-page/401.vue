<template>
  <div class="error-page-container">
    <el-button type="primary" :icon="ArrowLeft" @click="handleBack">
      返回
    </el-button>
    <el-row>
      <el-col :span="12">
        <h1>Oops!</h1>
        <div>
          <span>gif来自于</span>
          <a href="https://google.com">Google</a>
        </div>
        <h2>你没有权限去该页面</h2>
        <h6>如有不满,你爱满意不满意,砸了键盘算求了</h6>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li>
            <router-link to="/dashboard">
              回首页
            </router-link>
          </li>
          <li>
            <a href="https://google.com">随便看看</a>
          </li>
          <li>
            <a href="#" @click.prevent="dialogVisible=true">快乐起来</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <el-image :src="errorGif">
          <template #placeholder>
            <el-icon><icon-picture /></el-icon>
          </template>
        </el-image>
      </el-col>
    </el-row>
    <el-dialog :model-value="dialogVisible" title="快乐吗?">
      <el-image :src="oopsImage">
        <template #placeholder>
          <el-icon><icon-picture /></el-icon>
        </template>
      </el-image>
    </el-dialog>
  </div>
</template>

<script setup>
import { ArrowLeft, Picture as IconPicture } from '@element-plus/icons-vue'
import errorGif from '@/assets/401_images/401.gif'
</script>
<script>
export default {
  name: 'Page401',
  data() {
    return {
      errorGif: errorGif + '?' + new Date(),
      oopsImage: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    }
  },
  methods: {
    handleBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.error-page-container {
  width: 600px;
  max-width: 100%;
  margin: 100px auto;
  text-align: left;

  a {
    text-decoration: none;
  }

  .list-unstyled {
    list-style: none;
  }
  .image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 14px;
  }
  .dot {
    animation: dot 2s infinite steps(3, start);
    overflow: hidden;
  }
}
</style>
