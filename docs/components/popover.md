# Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## Click触发

**浏览**

<ClientOnly>
<popover-demo></popover-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <c-popover position="top">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <c-button>Click me</c-button>
  </c-popover>
  <c-popover position="top">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <c-button>Top</c-button>
  </c-popover>
  <c-popover position="bottom">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <c-button>Bottom</c-button>
  </c-popover>
  <c-popover position="left">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <c-button>left</c-button>
  </c-popover>
  <c-popover position="right">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <c-button>Right</c-button>
  </c-popover>
</div>
```

## Hover触发

**浏览**

<ClientOnly>
<popover-hover-demo></popover-hover-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <c-popover position="top">
    <template slot="content" trigger="hover">
      <div>Content of popover</div>
    </template>
    <c-button>Click me</c-button>
  </c-popover>
  <c-popover position="top" trigger="hover">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <c-button>Top</c-button>
  </c-popover>
  <c-popover position="bottom" trigger="hover">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <c-button>Bottom</c-button>
  </c-popover>
  <c-popover position="left" trigger="hover">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <c-button>left</c-button>
  </c-popover>
  <c-popover position="right" trigger="hover">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <c-button>Right</c-button>
  </c-popover>
</div>
```

## 设置内部关闭

**浏览**

<ClientOnly>
<popover-close-demo></popover-close-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <c-popover position="top">
    <template v-slot:content="{close}">
      <div>Content of popover</div>
      <c-button @click="close">Close</c-button>
    </template>
    <c-button>Click me</c-button>
  </c-popover>
</div>
```

