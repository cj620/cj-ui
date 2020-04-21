<template>
  <div class="popover" @click="popContent" ref="popover">
    <div
      ref="contentWrapper"
      class="contentWrapper"
      v-if="visible"
      v-bind:class="{[`position-${position}`]:true,}"
    >
      <slot name="content" :close="hoverClose" :sdx="'Content of'"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "c-popover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value){
        return ['click','hover'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed:{
    openEvent(){
      if(this.trigger ==='hover'){
        return 'mouseenter'
      }
    },
    closeEvent(){
      if(this.trigger === 'hover'){
        return 'mouseleave'
      }
    },
  },
  mounted(){
    this.$refs.popover.addEventListener(this.openEvent, ()=>{
      this.hoverOpen()
    })
    this.$refs.popover.addEventListener(this.closeEvent, ()=>{
      this.hoverClose()
    })
  },
  destroyed(){
    this.$refs.popover.removeEventListener(this.openEvent, ()=>{
      this.hoverOpen()
    })
    this.$refs.popover.removeEventListener(this.closeEvent, ()=>{
      this.hoverClose()
    })
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        width,
        height,
        top,
        left
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      if (this.position === "top") {
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "bottom") {
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top =
          height + top + window.scrollY + "px";
      } else if (this.position === "left") {
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        let {
          height: height2
        } = this.$refs.contentWrapper.getBoundingClientRect();
        let align = (height - height2) / 2;
        this.$refs.contentWrapper.style.top =
          top + window.scrollY + align + "px";
      } else if (this.position === "right") {
        this.$refs.contentWrapper.style.left =
          left + width + window.scrollX + "px";
        let {
          height: height2
        } = this.$refs.contentWrapper.getBoundingClientRect();
        let align = (height - height2) / 2;
        this.$refs.contentWrapper.style.top =
          top + window.scrollY + align + "px";
      }
    },
    hoverOpen(){
      this.$refs.popover.removeEventListener('click', this.popContent)
      this.visible = true
      setTimeout(()=>{
        this.positionContent()
      }) 
    },
    hoverClose(){
      this.visible = false
    },
    listenToDocument() {
      let eventHandler = () => {
        if (
          this.$refs.contentWrapper &&
          this.$refs.contentWrapper.contains(event.target)
        ) {
          return;
        }
        this.visible = false;
        document.removeEventListener("click", eventHandler);
      };
      document.addEventListener("click", eventHandler);
    },
    handleContent() {
      setTimeout(() => {
        this.positionContent();
        this.listenToDocument();
      });
    },
    popContent(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        this.visible = !this.visible;
        if (this.visible === true) {
          //因为v-if，不能立马在visible变为true时操作DOM
          this.handleContent();
        }
      } else {
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
}
.contentWrapper {
  position: absolute;
  max-width: 20em;
  word-break: break-all;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 0.5em 1em;

  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  &::before {
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    border: 10px solid transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    position: absolute;
  }
  &::after {
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    border: 10px solid transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      top: 100%;
      left: 10px;
      border-top-color: #333;
      border-bottom: none;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 2px);
      left: 10px;
      border-bottom: none;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      left: 10px;
      bottom: 100%;
      border-bottom-color: #333;
      border-top: none;
    }
    &::after {
      border-bottom-color: white;
      border-top: none;
      bottom: calc(100% - 2px);
      left: 10px;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-left-color: #333;
      border-right: none;
    }
    &::after {
      left: calc(100% - 2px);
      top: 50%;
      transform: translateY(-50%);
      border-left-color: white;
      border-right: none;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-right-color: #333;
      border-left: none;
    }
    &::after {
      right: calc(100% - 2px);
      top: 50%;
      transform: translateY(-50%);
      border-right-color: white;
      border-left: none;
    }
  }
}
</style>