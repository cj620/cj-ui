<template>
  <div>
    <c-button @click="showToastTop">Click me</c-button>
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
    showToast(position){
      this.$toast('自定义内容',{
        position: position,
        closeButton:{
          text: '请关闭',
          callback(toast){
            alert('用户知道了')
          }
        }
      })
    }
  }
}
</script>

<style>

</style>