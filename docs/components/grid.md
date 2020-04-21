# Grid 栅格

Grid 网格，最多可分为24网格，可以设置gutter。

## 默认栅格

**浏览**

<ClientOnly>
<grid-demo></grid-demo>
</ClientOnly>

**代码演示**

``` html
<div>
  <c-row>
    <c-col span="8">8</c-col>
    <c-col span="8">8</c-col>
    <c-col span="8">8</c-col>
  </c-row>
  <c-row>
    <c-col span="6">6</c-col>
      <c-col span="6">6</c-col>
  </c-row>
  <c-row>
    <c-col span="4">4</c-col>
    <c-col span="4">4</c-col>
    <c-col span="4">4</c-col>
    <c-col span="4">4</c-col>
    <c-col span="4">4</c-col>
    <c-col span="4">4</c-col>
  </c-row>
  <c-row>
    <c-col span="3">3</c-col>
    <c-col span="3">3</c-col>
    <c-col span="3">3</c-col>
    <c-col span="3">3</c-col>
    <c-col span="3">3</c-col>
    <c-col span="3">3</c-col>
    <c-col span="3">3</c-col>
    <c-col span="3">3</c-col>
  </c-row>
</div>
```
## 设置gutter

**浏览**

<ClientOnly>
<grid-gutter-demo></grid-gutter-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <c-row gutter="20">
    <c-col span="8">8</c-col>
    <c-col span="8">8</c-col>
    <c-col span="8">8</c-col>
  </c-row>
  <c-row gutter="10">
    <c-col span="6">6</c-col>
    <c-col span="6">6</c-col>
    <c-col span="6">6</c-col>
    <c-col span="6">6</c-col>
  </c-row>
</div>