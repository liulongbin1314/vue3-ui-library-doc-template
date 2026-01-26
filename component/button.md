# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type` 属性指定按钮的颜色类型，可选的 type 值分别为 `default`、`primary`、`success`、`warning`、`error` 5 种，其中 `default` 为 `type` 属性的默认值。

:::demo

```html
button/basis.vue
```

:::

## 圆角按钮

:::demo 设置 `:round="true"` 即可渲染左右两端为**圆弧形状**的按钮，简写形式为 `round`。

```html
button/round.vue
```

:::

## 禁用按钮

:::demo 设置 `:disabled="true"` 即可禁用按钮，简写形式为 `disabled`。

```html
button/disabled.vue
```

:::

## 文字按钮

:::demo 设置 `:text="true"` 即可渲染文字按钮，简写形式为 `text`。

```html
button/text.vue
```

:::

## 链接按钮

:::demo 设置 `:link="true"` 即可渲染链接按钮，简写形式为 `link`。

```html
button/link.vue
```

:::

## 边框按钮

:::demo 设置 `:border="true"` 即可渲染边框按钮，简写形式为 `border`。通过 `:dashed="true"` 即可设置虚线边框按钮，简写形式为 `dashed`。

```html
button/border.vue
```

:::

## 块级按钮

:::demo 设置 `:block="true"` 即可渲染块级按钮，简写形式为 `block`。

```html
button/block.vue
```

:::

## 按钮尺寸

通过 `size` 属性设置按钮的尺寸。

按钮支持 `small`、`default`、`large` 三种尺寸，其中 `size="default"` 可以省略不写，即：默认的按钮尺寸就是 `size="default"`。

:::demo

```html
button/size.vue
```

:::

## 圆形按钮

:::demo 通过 `circle="true"` 属性设置圆形按钮，简写形式为 `circle`。

```html
button/circle.vue
```

:::

## 图标按钮

通过 `icon` 属性设置图标按钮，仅支持内置的 `iconfont` 字体图标。若要使用内置的 `svg` 图标，则需要先导入 svg 图标，再以插槽的形式进行渲染。

:::demo

```html
button/icon.vue
```

:::

## 加载按钮

加载按钮用于展示按钮的 loading 加载中的状态。分为**手动模式**和**自动模式**。

### 手动模式

:::demo 通过 `loading="true"` 属性手动展示加载中的状态，简写形式为 `loading`。如需控制按钮 loading 状态的展示和隐藏，则需要程序员为 `loading` 属性绑定**布尔值状态**手动进行控制。

```html
button/loading-manual.vue
```

:::

### 自动模式

自动模式无需程序员维护按钮的 loading 布尔值状态。通过向按钮传入 `beforeChange` 属性，按钮会自动控制 loading 状态的展示和隐藏。自动模式有以下两个注意点：

1. 必须以 prop 形式为按钮传入 `beforeChange` 属性；
2. `beforeChange` 的属性值必须是 `function` 函数，**且函数的返回值必须为 Promise**。

:::demo

```html
button/loading-auto.vue
```

:::

## 按钮组

使用 `<a-button-group>` 组件，可以把多个 button 按分组进行展示。

`<a-button-group>` 组件支持传入 `size` 属性统一控制内部按钮的尺寸，`size` 属性的可选值为 `small`、`default`、`large`。

:::demo

```html
button/group.vue
```

:::

## Button 属性

| 属性         | 说明                              | 类型                                              | 默认值  |
| :----------- | :-------------------------------- | :------------------------------------------------ | :------ |
| type         | 按钮类型                          | `enum`：default、primary、success、warning、error | default |
| round        | 按钮左右两端是否为圆形            | `boolean`                                         | false   |
| disabled     | 是否被禁用                        | `boolean`                                         | false   |
| text         | 是否为文字按钮                    | `boolean`                                         | false   |
| link         | 是否为链接按钮                    | `boolean`                                         | false   |
| border       | 是否为边框按钮                    | `boolean`                                         | false   |
| dashed       | 是否为虚线边框                    | `boolean`                                         | false   |
| block        | 是否为块级按钮                    | `boolean`                                         | false   |
| size         | 按钮尺寸                          | `enum`：default、small、large                     | default |
| circle       | 是否为圆形按钮                    | `boolean`                                         | false   |
| icon         | 字体图标                          | `string`                                          | -       |
| loading      | 是否展示加载中的动画图标          | `boolean`                                         | false   |
| beforeChange | 异步操作，必须返回 `Promise` 实例 | `function`                                        | -       |

## Button 事件

| 事件  | 说明     | 类型     | 默认值 |
| :---- | :------- | :------- | :----- |
| click | 点击事件 | function | -      |

## ButtonGroup 属性

| 属性 | 说明       | 类型                          | 默认值  |
| :--- | :--------- | :---------------------------- | :------ |
| size | 按钮组尺寸 | `enum`：default、small、large | default |
