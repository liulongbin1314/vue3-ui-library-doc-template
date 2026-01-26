<template>
  <p>small 尺寸</p>
  <div class="container">
    <a-button size="small">默认</a-button>
    <a-button type="primary" size="small">主要</a-button>
    <a-button type="success" size="small">成功</a-button>
    <a-button type="warning" size="small">警告</a-button>
    <a-button type="error" size="small">错误</a-button>
  </div>

  <p>默认尺寸</p>
  <div class="container">
    <a-button>默认</a-button>
    <a-button type="primary">主要</a-button>
    <a-button type="success">成功</a-button>
    <a-button type="warning">警告</a-button>
    <a-button type="error">错误</a-button>
  </div>

  <p>large 尺寸</p>
  <div class="container">
    <a-button size="large">默认</a-button>
    <a-button type="primary" size="large">主要</a-button>
    <a-button type="success" size="large">成功</a-button>
    <a-button type="warning" size="large">警告</a-button>
    <a-button type="error" size="large">错误</a-button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 15px;
}
</style>
