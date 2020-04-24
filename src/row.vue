<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'c-row',
  props:{
    gutter: {
      type: [Number, String]
    }
  },
  computed:{
    rowStyle(){
      let gutter = this.gutter
      return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter
    })
  }

}
//var div = document.createElement('div') created  在内存里生成 1
//var divChlid = document.createElement('div') 2
//document.body.appendChild(divChlid) mounted 挂载到页面 3
//document.body.appendChild(div)4
//顺序1234
</script>

<style>
  .row{
    display: flex;
  }
</style>