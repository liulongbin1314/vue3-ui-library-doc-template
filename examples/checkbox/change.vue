<template>
  <p>单个复选框的 change 事件：</p>
  <a-checkbox label="同意许可协议" @change="handleChange"></a-checkbox>

  <p>复选框组的 change 事件：</p>
  <a-checkbox-group v-model="hobby" @change="handleChange">
    <!-- 使用 value 属性指定选中项的值 -->
    <a-checkbox value="吃饭">吃饭</a-checkbox>
    <a-checkbox value="睡觉">睡觉</a-checkbox>
    <a-checkbox value="打豆豆">打豆豆</a-checkbox>
  </a-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'

const hobby = ref(['吃饭'])

// 处理复选框的 change 事件
const handleChange = (value) => {
  AMessage({
    type: 'success',
    background: true,
    content: `复选框的 change 事件：${value}`
  })
}
</script>

<style scoped></style>
