<template>
  <div class="svg-list">
    <template v-for="name in iconNames" :key="name">
      <div
        class="svg-item"
        :class="name === copyName ? 'active' : ''"
        :data-clipboard-text="name"
        @mouseleave="copyName = ''"
      >
        <a-icon :icon="icons[name]" size="25"></a-icon>
        <span class="icon-name">{{ name }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import * as icons from 'escook-ui/icons'
import ClipboardJS from 'clipboard'
import { onMounted, ref, onUnmounted } from 'vue'

const iconNames = Object.keys(icons)
const copyName = ref('')
let clipboard

onMounted(() => {
  // 创建 ClipboardJS 实例，并绑定到按钮
  clipboard = new ClipboardJS('.svg-item')

  clipboard.on('success', function (e) {
    copyName.value = e.text
    AMessage({
      type: 'success',
      content: '复制成功！',
      background: true
    })
  })

  clipboard.on('error', function (e) {
    AMessage.error('复制失败，请手动复制！')
  })
})

onUnmounted(() => {
  clipboard?.destroy()
})
</script>

<style scoped>
.svg-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border: 1px solid #efefef;
  border-radius: 10px;
}
.svg-list .svg-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 10px;
}
.svg-list .svg-item .a-icon {
  transition: all 0.3s;
}
.svg-list .svg-item:hover {
  background-color: #f7f7f7;
}
.svg-list .svg-item:hover .a-icon {
  transform: scale(1.5);
}
.svg-list .svg-item .icon-name {
  font-size: 12px;
  margin-top: 10px;
}

.active {
  color: #5bdc9b !important;
}

.dark .svg-list {
  border: 1px solid #333;
}
.dark .svg-list .svg-item:hover {
  background-color: #222;
}
.dark .active {
  color: #3d9569 !important;
}
</style>
