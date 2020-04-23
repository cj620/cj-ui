<template>
   <div class="tabs">
      <slot></slot>
   </div>
</template>

<script>
import Vue from 'vue'
export default {
   name: 'c-tabs',
   props: {
      selected: {
         type:String,
         required: true,
      },
      direction: {
         type: String,
         default: 'horizontal',
         validator(value) {
            return ['horizontal','vertical'].indexOf(value) >= 0  //验证在两种类型之内
         }
      }
   },
   data(){
      return{
         eventBus: new Vue()
      }
   },
   provide(){
      return{
         eventBus: this.eventBus
      }
   },
   // created(){
   //    this.$emit('update:selected','这是this $emit出来的数据')
   // //    this.eventBus.$emit('updata:selected','这是eventbus')
   // },
   mounted(){
      //this.$children数组
      this.$children.forEach((vm) => {
         if(vm.$options.name ==='c-tabs-head'){
            vm.$children.forEach((item)=>{
               if(item.$options.name === 'c-tabs-item' && item.name === this.selected){
                  this.eventBus.$emit('update:selected',this.selected, item)
               }
            })
         }
      })
   }
}
</script>

<style lang="scss" scoped>

</style>