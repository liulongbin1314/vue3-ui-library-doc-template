<template>
  <!-- v-model="hobby" 双向数据绑定 -->
  <a-checkbox-group v-model="hobby">
    <!-- 使用 value 属性指定选中项的值 -->
    <a-checkbox value="吃饭">吃饭</a-checkbox>
    <a-checkbox value="睡觉">睡觉</a-checkbox>
    <a-checkbox value="打豆豆">打豆豆</a-checkbox>
  </a-checkbox-group>
  <p>选中项：{{ hobby }}</p>
</template>

<script setup>
import { ref } from 'vue'

// 在数组中直接声明默认选中项
const hobby = ref(['吃饭'])
</script>
