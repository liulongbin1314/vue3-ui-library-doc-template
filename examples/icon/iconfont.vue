<template>
  <div class="iconfont-list">
    <template v-for="name in iconNames" :key="name">
      <div
        class="iconfont-item"
        :class="[name === copyName ? 'active' : '']"
        :data-clipboard-text="name"
        @mouseleave="copyName = ''"
      >
        <a-icon :icon="name" size="25"></a-icon>
        <span class="icon-name">{{ name }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import iconNames from './iconfont-names'
import ClipboardJS from 'clipboard'
import { onMounted, ref, onUnmounted } from 'vue'

const copyName = ref('')

let clipboard
onMounted(() => {
  // 创建 ClipboardJS 实例，并绑定到按钮
  clipboard = new ClipboardJS('.iconfont-item')

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
.iconfont-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border: 1px solid #efefef;
  border-radius: 10px;
}
.iconfont-list .iconfont-item {
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
.iconfont-list .iconfont-item .a-icon {
  transition: all 0.3s;
}
.iconfont-list .iconfont-item:hover {
  background-color: #f7f7f7;
}
.iconfont-list .iconfont-item:hover .a-icon {
  transform: scale(1.5);
}
.iconfont-list .iconfont-item .icon-name {
  font-size: 12px;
  margin-top: 10px;
  width: 110px;
  text-align: center;
  display: block;
  height: 2em;
  line-height: 1.5em;
  word-break: break-all;
}

.active {
  color: #5bdc9b !important;
}

.dark .iconfont-list {
  border: 1px solid #333;
}
.dark .iconfont-list .iconfont-item:hover {
  background-color: #222;
}
.dark .active {
  color: #3d9569 !important;
}
</style>
