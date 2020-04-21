<template>
   <div class="tabs-pane" :class="classes" v-if="active">
      <slot></slot>
   </div>
</template>

<script>
export default {
   name:'cj-tabs-pane',
   inject:['eventBus'],
   data(){
      return{
         active: false,
      }
   },
   props:{
      name: {
         type: String | Number,
         required: true,
      },
   },
   computed: {
      classes(){
         return {
            active: this.active,
         }
      }
   },
    created(){
      this.eventBus.$on('update:selected',(name)=> {
         if(name === this.name){
            this.active = true
         } else{
            this.active = false
         }
      })
   },
}
</script>

<style lang="scss" scoped>
   @keyframes pane {
      0% {transform: translateX(100%)};
      100% {transform: translateX(0%)};
   }
   .tabs-pane{
      &.active{
         color: #448ef7;
         padding: 2em;
         animation: pane 0.5s;
      }
   }
</style>