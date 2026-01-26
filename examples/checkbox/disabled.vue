<template>
  <p>单个复选框的禁用状态：</p>
  <a-checkbox-group v-model="hobby">
    <a-checkbox value="吃饭" disabled>吃饭</a-checkbox>
    <a-checkbox value="睡觉">睡觉</a-checkbox>
    <a-checkbox value="打豆豆">打豆豆</a-checkbox>
  </a-checkbox-group>
  <p>选中项：{{ hobby }}</p>

  <hr />
  <p>复选框组的禁用状态：</p>
  <a-checkbox-group v-model="hobby" disabled>
    <a-checkbox value="吃饭">吃饭</a-checkbox>
    <a-checkbox value="睡觉">睡觉</a-checkbox>
    <a-checkbox value="打豆豆">打豆豆</a-checkbox>
  </a-checkbox-group>
  <p>选中项：{{ hobby }}</p>
</template>

<script setup>
import { ref } from 'vue'

const hobby = ref(['吃饭'])
</script>
