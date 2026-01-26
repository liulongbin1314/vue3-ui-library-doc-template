<template>
  <p>默认尺寸</p>
  <a-button-group>
    <a-button type="primary">主要</a-button>
    <a-button type="success">成功</a-button>
    <a-button type="warning">警告</a-button>
  </a-button-group>

  <p>small 尺寸</p>
  <a-button-group size="small">
    <a-button type="primary">主要</a-button>
    <a-button type="success">成功</a-button>
    <a-button type="warning">警告</a-button>
  </a-button-group>

  <p>large 尺寸</p>
  <a-button-group size="large">
    <a-button icon="icon-success" type="success">成功</a-button>
    <a-button icon="icon-warning" type="warning">警告</a-button>
    <a-button icon="icon-error" type="error">错误</a-button>
  </a-button-group>
</template>

<style scoped>
.container {
  display: flex;
  gap: 15px;
}
</style>
