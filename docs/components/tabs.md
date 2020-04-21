# Tabs 标签页

选项切换组件

## 默认选中第一项

可自行设置默认选中项, 

**浏览**

<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

**代码演示**

```html
<c-tabs :selected.sync="selectedTab">
  <c-tabs-head>
    <c-tabs-item name="1">
      Tab 1
    </c-tabs-item>
    <c-tabs-item name="2">
      Tab 2
    </c-tabs-item>
    <c-tabs-item name="3">
      Tab 3
    </c-tabs-item>
    <template v-slot:actions>
      <button>按钮</button>
    </template>
  </c-tabs-head>
  <c-tabs-body>
    <c-tabs-pane name="1">
      Content of Tab Pane 1
    </c-tabs-pane>
    <c-tabs-pane name="2">
      Content of Tab Pane 2
    </c-tabs-pane>
    <c-tabs-pane name="3">
      Content of Tab Pane 3
    </c-tabs-pane>
  </c-tabs-body>
</c-tabs>
```

```js
data(){
  return{
    selectedTab: '1',
  }
}
```

## 禁用某一项

**浏览**

设置默认选中第二项，禁用第三项

<ClientOnly>
<tabs-disable-demo></tabs-disable-demo>
</ClientOnly>

**代码演示**

```html
<c-tabs :selected.sync="selectedTab">
  <c-tabs-head>
    <c-tabs-item name="1">
      Tab 1
    </c-tabs-item>
    <c-tabs-item name="2">
      Tab 2
    </c-tabs-item>
    <c-tabs-item name="3" disabled>
      Tab 3
    </c-tabs-item>
  </c-tabs-head>
  <c-tabs-body>
    <c-tabs-pane name="1">
      Content of Tab Pane 1
    </c-tabs-pane>
    <c-tabs-pane name="2">
      Content of Tab Pane 2
    </c-tabs-pane>
    <c-tabs-pane name="3">
      Content of Tab Pane 3
    </c-tabs-pane>
  </c-tabs-body>
</c-tabs>
```
```js
data(){
  return{
    selectedTab: '2',
  }
}
```