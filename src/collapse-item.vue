<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      <span>{{title}}</span>
    <o-icon class="icon" :class="{activeClass:iconActive,closeClass:iconClose}" name="right"></o-icon>
    </div>
    <transition name="slide">
      <div class="content" v-if="open" >
      <slot></slot>
    </div>  
    </transition>
    
  </div>
</template>

<script>
import Icon from './icon'
export default {
  components:{
    'c-icon': Icon
  },
  name:'c-collapse-item',
  props:{
    title: {
      type: String,
      required: true,
    },
    name: {
      type:String,
      required: true
    }
  },
  data(){
    return{
      open:false,
      single: false,
      iconActive: false,
      iconClose: true,
    }
  },
  inject: ['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected', (names)=>{
      if(names.indexOf(this.name) >= 0 ){        
        this.open = true
        this.iconActive = true
      }else{
          this.open = false
          this.iconActive = false
      }
    })
  },
  methods:{
    toggle(){
      this.iconActive =!this.iconActive
      if(this.open){
        this.eventBus.$emit('update:removeSelected',this.name)
      } else {
        this.eventBus.$emit('update:addSelected',this.name)
      }
    },
    
  }
}
</script>

<style lang="scss" scoped>
  .collapseItem{
    
    >.title{
      border: 1px solid #ddd;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 37px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 8px;

      background: #fafafa;
      >.closeClass{
        transform: rotate(0deg);
        transition: all 0.2s;
      }
      >.activeClass{
        transform: rotate(90deg);
        transition: all 0.2s;
      }
      
    }
    &:first-child{
      >.title{
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
      }
    }
  
    >.content{
      padding: 8px;
      color: #616161;
      background: #ffffff;
    }
  }
  .slide-enter-active ,.slide-leave-active{
    transition: all 0.2s;
  }
  
  .slide-enter, .slide-leave-to{
    transform: translateY(-20%);
    opacity: 0;
    
  }
</style>