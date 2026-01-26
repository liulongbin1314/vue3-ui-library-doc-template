<template>
  <div class="container">
    <a-button block>默认</a-button>
    <a-button type="primary" block>主要</a-button>
    <a-button type="success" block>成功</a-button>
    <a-button type="warning" block>警告</a-button>
    <a-button type="error" block>错误</a-button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
