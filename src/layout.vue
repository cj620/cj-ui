<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'c-layout',
  data(){
    return{
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted: function(){
    this.$children.forEach((vm)=> {
      if(vm.$options.name === 'c-sider'){
          this.layoutClass.hasSider = true
      }
    
    })
  }
}
</script>

<style lang="scss" scoped>
  .layout{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.hasSider{
      flex-direction: row;
    }
  }
  
</style>