<template>
  <!-- 根容器 -->
  <div class="example-container">
    <!-- 描述信息的容器 -->
    <div class="desc-box">
      <slot name="desc"></slot>
    </div>
    <!-- 源码容器 -->
    <div class="source-box">
      <!-- 示例 -->
      <div class="source-demo">
        <component :is="demo"></component>
      </div>

      <!-- 图标操作按钮 -->
      <div class="controls">
        <span
          class="iconfont"
          :class="isCopy ? 'icon-success-fill' : 'icon-copy'"
          title="复制"
          @click="copy"
          @mouseleave="isCopy = false"
        ></span>
        <span class="iconfont icon-code" title="展示源码" @click="toggleCode"></span>
      </div>

      <!-- 源码 -->
      <transition>
        <div class="source-inner" v-if="showCode">
          <slot name="source"></slot>
          <div class="source-inner-hide" @click="showCode = false">
            <span class="iconfont icon-left-double-arrow"></span>
            <span>隐藏源代码</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, nextTick, useSlots } from 'vue'
import modules from '../../components'
// 代码高亮
import prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
import ClipboardJS from 'clipboard'

const props = defineProps({
  path: {
    type: String,
    default: ''
  }
})

const showCode = ref(false)
const isCopy = ref(false)
const slots = useSlots()

const toggleCode = async () => {
  const nextValue = !showCode.value
  showCode.value = nextValue

  if (nextValue) {
    nextTick(() => prism.highlightAll())
  }
}

const copy = (e) => {
  const clipboard = new ClipboardJS(e.target, {
    text: () => slots.source()[0]?.children[0]?.children
  })

  clipboard.on('success', () => {
    isCopy.value = true
    clipboard.destroy()
    AMessage({
      type: 'success',
      background: true,
      content: '复制成功！'
    })
  })

  clipboard.on('error', (e) => {
    isCopy.value = false
    clipboard.destroy()
  })

  clipboard.onClick(e)
}

onMounted(() => {
  prism.highlightAll()
})

const demo = computed(() => {
  const key = `examples/${props.path}`
  return modules[key]
})
</script>

<style scoped>
/* 源码容器 */
.source-box {
  --vp-code-block-color: none;
  border: 1px solid #ddd;
  border-radius: 10px;
}

/* 示例 */
.source-demo {
  padding: 20px;
  padding-bottom: 0;
}

/* 图标操作按钮 */
.controls {
  display: flex;
  justify-content: center;
  border-top: 1px dashed #ddd;
  margin-top: 20px;
  padding: 10px 0;
  gap: 20px;
}
.controls .iconfont {
  font-size: 18px;
  color: #999;
  cursor: pointer;
  transition: all 0.3s;
}
.controls .iconfont:hover {
  color: #333;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  height: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.dark .source-box {
  border: 1px solid #333;
}
.dark .source-box .controls {
  border-color: #333;
}
.dark .source-box .controls .iconfont:hover {
  color: #bbb;
}

.icon-success-fill {
  color: #14cd70 !important;
}

.source-inner-hide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  color: #888;
  transition: all 0.2s;
  height: 40px;
}
.source-inner-hide:hover {
  color: #3069ff;
}
.source-inner-hide .icon-left-double-arrow {
  transform: rotate(90deg) !important;
}
</style>
