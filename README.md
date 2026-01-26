# 20章 - 组件库文档

[付费视频教程·零基础开发Vue3组件库 - 哔哩哔哩课堂](https://www.bilibili.com/cheese/play/ss568518843)

[Github - 组件库文档仓库地址](https://github.com/liulongbin1314/vue3-ui-library-doc-template)

## 1. 初始化组件库文档项目

1. 删除组件库项目根目录下的 `docs` 文件夹；

2. cd 到组件库项目根目录，运行如下的 git 命令，把组件库文档项目克隆到组件库项目根目录下，把文件夹重命名为 `docs`：

   ```bash
   git clone https://github.com/liulongbin1314/vue3-ui-library-doc-template.git docs
   ```

3. cd 到 `docs` 目录下，运行 `npm install` 命令，安装组件库文档项目的依赖包；

4. 运行 `npm run docs:dev` 启动开发服务；

5. 运行 `npm run docs:build` 启动打包服务，打包的产物会放在 `/docs/.vitepress/dist/` 目录下。

## 2. 把 escook-ui 替换为自己的组件库

1. 如果要为自己的组件库编写文档，同学们一定要运行 `npm install 自己的组件库` 命令，把自己的组件库安装到 vitepress 项目中；

2. 修改 `package.json`，把 `dependencies` 节点下的 `"escook-ui": "^1.0.1-alpha.2",` 移除；

3. 修改 `.vitepress/config.mts` 模块，从自己的组件库中导入相应的 resolver 函数：

   ```js
   // ...省略其它不必要的代码
   // ⬇️ 修改
   import { xxxResolver, xxxFunctionResolver } from '自己的组件库/es/utils'

   // ...省略其它不必要的代码

   export default defineConfig({
     title: 'Escook 组件库',
     description: '零基础开发 Vue3 组件库',
     // ...省略其它不必要的代码
     vite: {
       ssr: {
         // ⬇️ 修改
         noExternal: ['@escook/vitepress-theme', 'vitepress', '自己的组件库']
       },
       plugins: [
         Components({
           // ⬇️ 修改
           resolvers: [xxxResolver()]
         }),
         AutoImport({
           // ⬇️ 修改
           resolvers: [xxxFunctionResolver()]
         })
       ]
     }
   })
   ```
