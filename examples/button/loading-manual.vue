<template>
  <div class="container">
    <a-button @click="isLoading = false">隐藏 loading</a-button>
    <a-button @click="isLoading = true">展示 loading</a-button>
  </div>
  <hr />
  <div class="container">
    <a-button :loading="isLoading">默认</a-button>
    <a-button type="primary" :loading="isLoading">主要</a-button>
    <a-button type="success" :loading="isLoading">成功</a-button>
    <a-button type="warning" :loading="isLoading">警告</a-button>
    <a-button type="error" :loading="isLoading">错误</a-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isLoading = ref(true)
</script>

<style scoped>
.container {
  display: flex;
  gap: 15px;
}
</style>
