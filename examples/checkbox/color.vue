<template>
  <p>单个复选框的主题色：</p>
  <a-checkbox-group v-model="hobby">
    <a-checkbox value="抽烟" type="default">抽烟</a-checkbox>
    <a-checkbox value="喝酒" type="primary">喝酒</a-checkbox>
    <a-checkbox value="烫头" type="success">烫头</a-checkbox>
    <a-checkbox value="睡觉" type="warning">睡觉</a-checkbox>
    <a-checkbox value="打豆豆" type="error">打豆豆</a-checkbox>
  </a-checkbox-group>

  <hr />
  <p>复选框组的主题色：</p>
  <a-checkbox-group v-model="hobby" type="error">
    <a-checkbox value="抽烟">抽烟</a-checkbox>
    <a-checkbox value="喝酒">喝酒</a-checkbox>
    <a-checkbox value="烫头">烫头</a-checkbox>
    <a-checkbox value="睡觉">睡觉</a-checkbox>
    <a-checkbox value="打豆豆">打豆豆</a-checkbox>
  </a-checkbox-group>

  <hr />
  <p>禁用状态下的主题色：</p>
  <a-checkbox-group v-model="hobby" disabled>
    <a-checkbox value="抽烟" type="default">抽烟</a-checkbox>
    <a-checkbox value="喝酒" type="primary">喝酒</a-checkbox>
    <a-checkbox value="烫头" type="success">烫头</a-checkbox>
    <a-checkbox value="睡觉" type="warning">睡觉</a-checkbox>
    <a-checkbox value="打豆豆" type="error">打豆豆</a-checkbox>
  </a-checkbox-group>

  <hr />
  <p>选中项：{{ hobby }}</p>
</template>

<script setup>
import { ref } from 'vue'

const hobby = ref(['抽烟', '喝酒', '烫头', '睡觉', '打豆豆'])
</script>
