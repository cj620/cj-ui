# Layout 布局

> 使用flex布局实现，请注意浏览器的兼容

## 简单布局

<br>

**浏览**

<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <c-layout>
    <c-header style="height: 64px; background: #8bbae6">
      header
    </c-header>
    <c-content style="height: 100px; background: #418ce2">
      content
      </c-content>
    <c-footer style="height: 64px; background: #8bbae6">
      footer
    </c-footer>
  </c-layout>
 </div>
 ```

 ## 外部侧栏
侧栏可手动关闭

**浏览**

<ClientOnly>
<layout-demc-1></layout-demc-1>
</ClientOnly>

**代码演示**

```html
<div>
  <c-layout>
    <c-sider style="width:100px; background:#589ee3;">
      sider
    </c-sider>
    <c-layout>
      <c-header style="height: 64px; background: #8bbae6">
         header
      </c-header>
      <c-content style="height: 100px; background: #418ce2">
        content
      </c-content>
      <c-footer style="height: 64px; background: #8bbae6">
        footer
      </c-footer>
    </c-layout>
  </c-layout>
</div>
```

## 内部侧栏

**浏览**

<ClientOnly>
<layout-in></layout-in>
</ClientOnly>

**代码演示**

```html
<div>
  <c-layout>
    <c-header style="height: 64px; background: #8bbae6">
      header
    </c-header>
    <c-layout>
      <c-sider style="width:100px; background:#589ee3;">
        sider
      </c-sider>
      <c-content style="height: 100px; background: #418ce2">
        content
      </c-content>
    </c-layout>
    <c-footer style="height: 64px; background: #8bbae6">
      footer
    </c-footer>
  </c-layout>
</div>