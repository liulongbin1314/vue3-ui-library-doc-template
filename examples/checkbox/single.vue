<template>
  <a-checkbox v-model="status">同意许可协议</a-checkbox>
  <p>选中状态：{{ status }}</p>
</template>

<script setup>
import { ref } from 'vue'
const status = ref(true)
</script>
