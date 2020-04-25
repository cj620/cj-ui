<template>
  <button class="c-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <c-icon class="icon" v-if="icon && !loading" :name=icon></c-icon>
    <c-icon v-if="loading" class="loading icon" name="loading"></c-icon>
    <!-- 插槽上不能添加clss -->
    <div class="content">
         <slot></slot> 
    </div>
    </button>
</template>

<script>
import Icon from './icon'

export default {
  components:{
    'c-icon': Icon
  },
  //props:['icon','iconPosition']
  props: {
    icon: '',
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type:String,
      default: 'left',
      validator: function(value){ //属性检查器
        if(value !== 'left' && value !== 'right'){
          return false
        }else{
          return true
        }
      }
    },
   
  }
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
.loading{
  animation: spin 2s infinite linear;
}
.c-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align:middle; //外部对齐
  font-size: 14px;
  height: 32px;
  padding: 0 0.6em;
  border-radius: 4px;
  border: 1px solid  #999;
  background: white;
  min-width: 68px
  &:hover {
    border-color: #666;
  }
  &:active {
    background-color:  #eee;
  }
  &:focus {
    outline: none;
  }
  >.content{ order:2;}
  >.icon {order: 1; margin-left:0; margin-right: 0.3em;}

  &.icon-right{
    >.content{order:1;}
    >.icon{order:2; margin-right:0; margin-left: 0.3em;}
  }
}
</style>

