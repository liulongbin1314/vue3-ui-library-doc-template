<template>
  <p>使用内置的 iconfont 字体图标</p>
  <div class="container">
    <a-button icon="icon-upload">默认</a-button>
    <a-button type="primary" icon="icon-download">主要</a-button>
    <a-button type="success" icon="icon-success">成功</a-button>
    <a-button type="warning" icon="icon-warning">警告</a-button>
    <a-button type="error" icon="icon-error">错误</a-button>
  </div>

  <p>基于插槽渲染内置的 svg 图标</p>
  <div class="container">
    <a-button>
      <a-icon :icon="UploadCloud"></a-icon>
      <span>默认</span>
    </a-button>
    <a-button type="primary">
      <a-icon :icon="DownloadCloud"></a-icon>
      <span>主要</span>
    </a-button>
    <a-button type="success">
      <a-icon :icon="CheckCircle"></a-icon>
      <span>成功</span>
    </a-button>
    <a-button type="warning">
      <a-icon :icon="AlertCircle"></a-icon>
      <span>警告</span>
    </a-button>
    <a-button type="error">
      <a-icon :icon="XCircle"></a-icon>
      <span>错误</span>
    </a-button>
  </div>
</template>

<script setup>
import { UploadCloud, DownloadCloud, CheckCircle, AlertCircle, XCircle } from 'escook-ui/icons'
</script>

<style scoped>
.container {
  display: flex;
  gap: 15px;
}
</style>
