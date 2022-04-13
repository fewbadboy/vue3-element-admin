<template>
  <div class="about">
    <h1>This is an about page {{ $t('login.title') }}</h1>
    <el-time-picker v-model="value1" placeholder="Arbitrary time" />
    <el-button>按钮</el-button>
  </div>
</template>
