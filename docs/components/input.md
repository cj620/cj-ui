# Input 输入框

## 常用示例

**浏览**

<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <c-input value="NORMAL"></c-input>
  <c-input value="READONLY" readonly></c-input>
  <c-input value="DISABLED" disabled></c-input>
  <c-input value="ERROR" error="Error message"></c-input>
</div>
```

## 支持 `v-model` 进行数据双向绑定

<br>

**浏览**

<ClientOnly>
<input-demc-1></input-demc-1>
</ClientOnly>

**代码演示**

```html
<div>
  <c-input v-model="message"></c-input>
   <p style="margin-top: 5px;">message: {{message}} </p>
</div>
```
```js
data(){
  return {
    message: 'hello world',
  }
},
```