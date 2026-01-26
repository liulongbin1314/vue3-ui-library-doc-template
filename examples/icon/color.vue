<template>
  <p>iconfont 字体图标</p>
  <div class="container">
    <a-icon icon="icon-search" size="30px" color="#F25769"></a-icon>
    <a-icon icon="icon-cart-empty" size="30px" color="#F25769"></a-icon>
    <a-icon icon="icon-home" size="30px" color="#F25769"></a-icon>
    <a-icon icon="icon-settings" size="30px" color="#F25769"></a-icon>
  </div>

  <p>svg 图标</p>
  <div class="container">
    <a-icon :icon="Flag" size="30px" color="#40CD98"></a-icon>
    <a-icon :icon="Facebook" size="30px" color="#40CD98"></a-icon>
    <a-icon :icon="Frown" size="30px" color="#40CD98"></a-icon>
    <a-icon :icon="Filter" size="30px" color="#40CD98"></a-icon>
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
