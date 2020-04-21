# Button 按钮

## 单个按钮

**浏览**

<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <c-button>默认按钮</c-button>
  <c-button icon="settings">默认按钮</c-button>
  <c-button :loading="true">默认按钮</c-button>
  <c-button disabled>默认按钮</c-button>
  <c-button icon="awesome">点赞</c-button>
  <c-button icon="download">下载</c-button>
</div>
```

## 按钮组合

可以将多个 `button` 放入 `button-group`容器中, 通过 `icon-position` 属性调整 `icon` 位置。

**浏览**

<ClientOnly>
<button-group-demo></button-group-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <c-button-group>
    <c-button icon="left">上一页</c-button>
    <c-button>更多</c-button>
    <c-button icon="right" icon-position="right">下一页</c-button>
  </c-button-group>
</div>
```