<template>
  <button ref="buttonEL" class="c-button-popple" @click="this.handleOnClick">
    <span class="text">
      <slot></slot>
    </span>
    <span 
      :class="{active: activeCri}"
      :style="{left: this.distX + 'px', top: this.distY + 'px'}"
      @animationend="this.handleAnimationEnd"
    ></span>
  </button>
</template>

<script>
export default {
  data: function(){
    return {
      activeCri: false,
      distX: 0,
      distY: 0
    }
  },
  methods: {
    handleOnClick(e){
      this.activeCri  = true
      let { clientX, clientY } = e
      let { left, top } = this.$refs.buttonEL.getBoundingClientRect()
      this.distX = clientX - left - 5
      this.distY = clientY - top - 5
    },
    handleAnimationEnd(){
      this.activeCri = false
    }
  }
}
</script>

<style lang="scss" scoped>
.c-button-popple{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align:middle; //外部对齐
  font-size: 14px;
  height: 32px;
  padding: 0 0.6em;
  border-radius: 4px;
  
  background: white;
  min-width: 68px;
  position: relative;
  overflow: hidden;
  &:hover {
    border-color: #666;
  }
  
  &:focus {
    outline: none;
  }
  .text{
    position: relative;
    z-index: 1;
  }
  .active{
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #0067f8;
    opacity: 50%;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    animation: big 0.5s ease-out;
  }
  @keyframes big {
    0%{
      transform: scale(1);
    }
    100%{
      transform: scale(17);
    }
  }
}
</style>
