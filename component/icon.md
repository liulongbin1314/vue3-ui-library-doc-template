# Icon 图标

组件库支持 iconfont 和 svg 两种图标。

## 基本用法

:::demo

```html
icon/basis.vue
```

:::

## 图标尺寸

:::demo

```html
icon/size.vue
```

:::

## 图标颜色

:::demo

```html
icon/color.vue
```

:::

## svg 图标

<SvgIcons></SvgIcons>

## iconfont 图标

<IconfontIcons></IconfontIcons>

## Icon 属性

| 属性  | 说明         | 类型                                                  | 默认值 |
| :---- | :----------- | :---------------------------------------------------- | :----- |
| icon  | 要展示的图标 | `string` （字体图标类名） 或 `Object`（svg 图标组件） | -      |
| size  | 尺寸         | `string` 或 `number`，单位是 `px`                     | -      |
| color | 颜色         | `string`                                              | -      |

<script setup>
  import SvgIcons from '../examples/icon/svg.vue'
  import IconfontIcons from '../examples/icon/iconfont.vue'
</script>
