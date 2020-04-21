<template>
  <div>
    <c-button @click="showToastTop">Click me</c-button>
    <c-button @click="showToastTop">Top</c-button>
    <c-button @click="showToastMiddle">Middle</c-button>
    <c-button @click="showToastBottom">Bottom</c-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from '../../../src/toast'
import Button from '../../../src/button'
import plugin from '../../../src/plugin'
import tabsItemVue from '../../../src/tabs-item.vue'
Vue.use(plugin)
export default {
  components: {
    'c-toast': Toast,
    'c-button': Button
  },
  methods:{
    showToastTop(){
      this.showToast('top')
    },
    showToastMiddle(){
      this.showToast('middle')
    },
    showToastBottom(){
      this.showToast('bottom')
    },
    showToast(position){
      this.$toast('This is content of toast',{
        position: position,
        autoClose: true,
        autoCloseDelay: 3,
        closeButton:{
          text: 'Close',
          callback(toast){
            console.log('用户知道了')
          }
        }
      })
    }
  }
}
</script>

<style>

</style>