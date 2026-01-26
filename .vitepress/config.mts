import { defineConfig } from 'vitepress'
import MdContainer from 'markdown-it-container'
import type { ContainerOpts } from 'markdown-it-container'
// @ts-ignore
import { join } from 'node:path'
// @ts-ignore
import { readFileSync } from 'node:fs'
import markdownIt from 'markdown-it'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// @ts-ignore
import { EscookUIResolver, EscookFunctionResolver } from 'escook-ui/es/utils'

const infoReg = /^demo\s*(.*)$/
const md = markdownIt()

// 自定义的 markdown-it 插件的 render 函数
const render: ContainerOpts['render'] = (tokens, idx) => {
  if (tokens[idx].nesting === 1) {
    // nesting 为 1 是开始标记 :::

    const info = tokens[idx].info.trim()
    const infoMatch = info.match(infoReg)
    // 描述信息
    const desc = infoMatch ? infoMatch[1] : ''

    const nextToken = tokens[idx + 1]
    // 文档组件的路径
    let comPath = nextToken.type === 'fence' ? nextToken.content.trim() : ''
    if (comPath) {
      // @ts-ignore
      // 拼接演示组件的完整路径
      const fullComPath = join(import.meta.dirname, '../examples/', comPath)
      const source = readFileSync(fullComPath, 'utf8')

      // 使用 v-pre 指令，防止源码字符串中的 vue 指令被解析
      return `<Demo path="${comPath}">
        <template #desc>
          ${md.render(desc)}
        </template>
        <template #source>
          <pre v-pre style="margin: 0; border-radius: 10px;"><code class="lang-html">${md.utils.escapeHtml(source)}</code></pre>
        </template>
      `
    } else {
      return '<Demo>'
    }
  } else {
    // nesting 为 -1 是结束标记 :::
    return '</Demo>'
  }
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Escook 组件库',
  description: '零基础开发 Vue3 组件库',
  themeConfig: {
    // siteTitle: false,
    // logo: { light: '/images/white.png', dark: '/images/black.png' },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/component/button' }
    ],

    sidebar: {
      // 指南
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: '安装', link: '/guide/install' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        }
      ],
      // 组件
      '/component/': [
        {
          text: '基础',
          items: [
            { text: 'Button 按钮', link: '/component/button' },
            { text: 'Icon 图标', link: '/component/icon' }
          ]
        },
        {
          text: '布局',
          items: [
            { text: 'Grid 栅格布局', link: '/component/grid' },
            { text: 'Container 容器布局', link: '/component/container' }
          ]
        },
        {
          text: '表单组件',
          items: [{ text: 'Checkbox 复选框', link: '/component/checkbox' }]
        },
        {
          text: '反馈组件',
          items: []
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/liulongbin1314/vue3-ui-library' }]
  },
  markdown: {
    // config 函数用于自定义 markdown 的解析配置，
    // 形参中的 md 是 markdown-it 对象
    config(md) {
      // @ts-ignore
      // 向 Markdown 解析器中注册 MdContainer 插件
      md.use(MdContainer, 'demo', { render })
    }
  },
  vite: {
    ssr: {
      noExternal: ['@escook/vitepress-theme', 'vitepress', 'escook-ui']
    },
    plugins: [
      // ⬇️ 新增
      Components({
        resolvers: [EscookUIResolver()]
      }),
      // ⬇️ 新增
      AutoImport({
        resolvers: [EscookFunctionResolver()]
      })
    ]
  }
})
