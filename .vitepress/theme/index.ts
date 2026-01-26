import { h } from 'vue'
import type { Theme } from 'vitepress'
import Demo from '../components/demo/index.vue'
// 1. 导入彬哥的主题
import escookTheme from '@escook/vitepress-theme'
// 2. 导入配套的 CSS 样式（此步骤不能省略）
import '@escook/vitepress-theme/style.css'
// 导入您的自定义的样式
import './style.css'

export default {
  // 3. 指定要继承的主题，并基于此主题进行二次扩展
  extends: escookTheme,
  Layout: () => {
    return h(escookTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 扩展自定义的功能...
    // 注册全局的自定义组件 Demo，用于渲染演示代码块
    app.component('Demo', Demo)
  }
} satisfies Theme
