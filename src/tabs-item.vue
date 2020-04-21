<template>
   <div class="tabs-item" @click="pickItem" :class="classes">
      <slot></slot>
   </div>
</template>

<script>
export default {
   name: 'c-tabs-item',
   data(){
      return{ //不需要用户传值，自身维护
         active: false,
      }
   },
   props: { //需要用户传值
      disabled: {
         type: Boolean,
         default: false,
      },
      name: {
         type: String | Number,
         required: true,
      }
   },
   computed: {
      classes(){
         return {
            active: this.active,
            disabled: this.disabled,
         }
      }
   },
   inject:['eventBus'],
   created(){
      this.eventBus.$on('update:selected',(name)=> {
         if(name === this.name){
            this.active = true
         } else{
            this.active = false
         }
      })
   },
   methods:{
      pickItem(){
         if(this.disabled){
            return
         }
         this.eventBus.$emit('update:selected',this.name, this)    
      }
   }
}
</script>

<style lang="scss" scoped>
   .tabs-item{
      flex-shrink: 0;
      padding: 0 2em;
      height: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      &:hover{
         color: #448ef7;
      }
      &.active{
         font-weight: bold;
         color: #448ef7;
      }
      &.disabled{
         color: gray;
         cursor: not-allowed;
      }
   }
</style>