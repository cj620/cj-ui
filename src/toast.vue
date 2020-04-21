<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast">
      <!-- <slot></slot> -->
      <!-- <slot v-if="!enableHtml"></slot> -->
      <slot></slot>
      <!-- <div v-else v-html="$slots.default[0]"></div> -->

      <div class="line"></div>
      <span v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  //构造组件的选项
  name: "c-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: false,
    },
    autoCloseDelay: {
      type: Number,
      default: 5//浅拷贝
    },
    closeButton: {
      //关闭按钮
      type: Object,
      default: () => {
        //defalt值不能是一个对象，而是利用函数返回对象,复用性问题，深拷贝
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      }
    }
    // enableHtml:{
    //   type: Boolean,
    //   default: false,
    // }
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      };
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove(); //移除组件
      this.$emit("close");
      this.$destroy(); //destory并不会把组件从页面中移除
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
    log() {
      console.log("log");
    }
  }
};
</script>
//开发插件

<style lang='scss' scoped>
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  &.position-top {
    top: 0;
    .toast {
      animation: slide-down 1s;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      animation: fade-in 1s;
    }
    animation: fade-in 1s;
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: slide-up 1s;
    }
  }
}
.toast {
  font-size: 14px;
  height: 32px; //高度不定的div里面的div能不能一样高
  line-height: 1.8;
  display: flex;
  color: white;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 7px 16px;

  .close {
    &:hover{
      color: #95b9e2;
    }
    padding-left: 16px;
    cursor: pointer;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>