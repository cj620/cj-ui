# Toast 吐司

类似吐司机一样弹出消息/通知

## 默认三个位置

**浏览**

<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <c-button @click="showToastTop">Click me</c-button>
  <c-button @click="showToastTop">Top</c-button>
  <c-button @click="showToastMiddle">Middle</c-button>
  <c-button @click="showToastBottom">Bottom</c-button>
</div>
```
```js
methods:{
  showToastTop(){
    this.showToast('top')
  },
  showToastMiddle(){
    this.showToast('middle')
  },
  showToastBottom(){
    this.showToast('bottom')
  },
  showToast(position){
    this.$toast('This is content of toast',{
      position: position,
      closeButton:{
        text: 'Close',
        callback(toast){
          console.log('用户知道了')
        }
      }
    })
  }
}
```

## 设置自动关闭

- 可设置 `Toast` 组件自动关闭，默认不能自动关闭。
- 可自行设置自动关闭延迟时间。

> 设置为自动关闭，延迟时间为2s。

**浏览**

<ClientOnly>
<toast-autc-demo></toast-autc-demo>
</ClientOnly>

**代码演示**

```html
<div>
    <c-button @click="showToastTop">Click me</c-button>
</div>
```

```js
methods:{
  showToastTop(){
    this.showToast('top')
  },
  showToast(position){
    this.$toast('This is content of toast',{
      position: position,
      autoClose: true,
      autoCloseDelay: 3,
      closeButton:{
        text: 'Close',
        callback(toast){
          console.log('用户知道了')
        }
      }
    })
  }
}
```

## 自定义Toast

- 可自定义设置 `Toast` 组件的中内容和关闭文本。
- 可自定义回调函数，进行 `Toast` 组件关闭后接下来的操作

**浏览**

<ClientOnly>
<toast-custom-demo></toast-custom-demo>
</ClientOnly>

**代码演示**

```html
<div>
    <c-button @click="showToastTop">Click me</c-button>
</div>
```

```js
methods:{
    showToastTop(){
      this.showToast('top')
    },
    showToast(position){
      this.$toast('自定义内容',{
        position: position,
        closeButton:{
          text: '请关闭',
          callback(toast){
            alert('用户知道了')
          }
        }
      })
    }
}
```




