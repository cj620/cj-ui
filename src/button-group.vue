<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted(){
    for(let node of this.$el.children){
      let name = node.nodeName.toLowerCase()
      if( name !== 'button'){
        console.warn(`c-button-group的子元素应全是c-button，但你写的为${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-button-group{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  > .c-button {
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px; //前一个border被后一个挡住了
    }
    
    &:first-child{
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child{
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}
</style>