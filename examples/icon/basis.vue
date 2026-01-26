<template>
  <p>iconfont 字体图标</p>
  <div class="container">
    <a-icon icon="icon-search"></a-icon>
    <a-icon icon="icon-cart-empty"></a-icon>
    <a-icon icon="icon-home"></a-icon>
    <a-icon icon="icon-settings"></a-icon>
  </div>

  <p>svg 图标</p>
  <div class="container">
    <a-icon :icon="Flag"></a-icon>
    <a-icon :icon="Facebook"></a-icon>
    <a-icon :icon="Frown"></a-icon>
    <a-icon :icon="Filter"></a-icon>
  </div>
</template>

<script setup>
import { Flag, Facebook, Frown, Filter } from 'escook-ui/icons'
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
