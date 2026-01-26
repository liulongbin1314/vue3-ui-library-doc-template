<template>
  <div class="container">
    <a-button :beforeChange="beforeChangeHandler">默认按钮</a-button>
    <a-button type="primary" :beforeChange="beforeChangeHandler">主要按钮</a-button>
    <a-button type="success" :beforeChange="beforeChangeHandler">成功按钮</a-button>
    <a-button type="warning" :beforeChange="beforeChangeHandler">警告按钮</a-button>
    <a-button type="error" :beforeChange="beforeChangeHandler">错误按钮</a-button>
  </div>
</template>

<script setup>
const beforeChangeHandler = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000)
  })
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 15px;
}
</style>
