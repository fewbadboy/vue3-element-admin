<template>
  <div class="about">
    <div>This is an about page {{ $t('login.title') }}</div>
    <el-time-picker v-model="date" placeholder="Arbitrary time" />
    <el-button class="btn">
      按钮
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      date: ''
    }
  }
}
</script>

<style lang="scss" scoped>
// https://stackoverflow.com/questions/57091716/use-svg-in-pseudo-element-content-or-background-image-in-vue-template-file?answertab=modifieddesc#tab-top
.btn::after {
  content: url('data:image/svg+xml,<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg"><path d="M0 54.857h36.571V128H0V54.857zM91.429 27.43H128V128H91.429V27.429zM45.714 0h36.572v128H45.714V0z"/></svg>');
  display: inline-block;
  width: 16px;
  height: 128px;
  transform: scale(0.1);
}
.btn:hover::after {
  content: url('data:image/svg+xml,<svg width="128" height="128" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M0 54.857h36.571V128H0V54.857zM91.429 27.43H128V128H91.429V27.429zM45.714 0h36.572v128H45.714V0z"/></svg>');
  display: inline-block;
  width: 16px;
  height: 128px;
  transform: scale(0.1);
}
//  or  mask
// .add::before {
//   content: '';
//   display: inline-block;
//   background: red;
//   mask-image: url('~@/imgs/add.svg');
//   width: 16px;
//   height: 16px;
// }
</style>
