# 复选框

在一组备选项中进行多选。

## 单独使用

:::demo 单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

```html
checkbox/single.vue
```

:::

## 复选框组

适用于**多个复选框绑定到同一个数组的情景**。

使用 `<a-checkbox-group>` 组件包裹 `<a-checkbox>` 组件，即可实现分组。分组后的每个复选框组件必须使用 `value` 属性指定选中后的值。

在 `<a-checkbox-group>` 组件上使用 `v-model` 指令实现双向数据绑定，把选中项的值存入指定的数组中。注意：默认选中项可以在数组中直接声明。

:::demo

```html
checkbox/group.vue
```

:::

## 禁用状态

:::demo 使用 `disabled` 属性控制复选框的禁用状态。复选框组支持使用 `disabled` 属性统一设置所有复选框的禁用状态。

```html
checkbox/disabled.vue
```

:::

## 主题颜色

使用 `type` 属性设置复选框的主题颜色，可选值有 `default`、`primary`、`success`、`warning`、`error`，默认值为 `default`。注意：`default` 和 `primary` 的唯一区别是**选中后禁用状态时的背景颜色**。

复选框组支持使用 `type` 属性统一设置所有复选框的主题颜色。

:::demo

```html
checkbox/color.vue
```

:::

## size 尺寸

使用 `size` 属性设置复选框的尺寸，可选值有 `small`、`default`、`large`，默认值为 `default`。

复选框组支持使用 `size` 属性统一设置所有复选框的尺寸。

:::demo

```html
checkbox/size.vue
```

:::

## change 事件

单个复选框支持使用绑定 `@change` 事件处理函数， 事件处理函数的签名为 `(value: any) => void`。

:::demo

```html
checkbox/change.vue
```

:::
