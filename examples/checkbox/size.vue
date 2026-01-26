<template>
  <p>单个复选框的 size 尺寸：</p>
  <a-checkbox-group v-model="sizeArr">
    <a-checkbox value="small" size="small">small</a-checkbox>
    <a-checkbox value="default" size="default">default</a-checkbox>
    <a-checkbox value="large" size="large">large</a-checkbox>
  </a-checkbox-group>
  <p>选中项：{{ sizeArr }}</p>

  <hr />
  <p>复选框组的 size 尺寸：</p>
  <a-button-group class="btn-group" size="small">
    <a-button type="primary" @click="size = 'small'">small</a-button>
    <a-button type="warning" @click="size = 'default'">default</a-button>
    <a-button type="success" @click="size = 'large'">large</a-button>
  </a-button-group>
  <a-checkbox-group v-model="hobby" :size="size">
    <a-checkbox value="吃饭">吃饭</a-checkbox>
    <a-checkbox value="睡觉">睡觉</a-checkbox>
    <a-checkbox value="打豆豆">打豆豆</a-checkbox>
  </a-checkbox-group>
  <p>尺寸：{{ size }}</p>
  <p>选中项：{{ hobby }}</p>
</template>

<script setup>
import { ref } from 'vue'

const sizeArr = ref(['small'])
const hobby = ref(['吃饭', '睡觉'])
const size = ref('small')
</script>

<style scoped>
.btn-group {
  margin-bottom: 15px;
}
</style>
