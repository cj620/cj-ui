import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin';
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsItem from './tabs-item.vue'
import TabsBody from './tabs-body.vue'
import TabsPane from './tabs-pane.vue'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import ButtonPopple from './button-popple.vue'

Vue.component('c-button', Button)
Vue.component('c-icon', Icon)
Vue.component('c-button-popple', ButtonPopple)
Vue.component('c-button-group',ButtonGroup)
Vue.component('c-input', Input)
Vue.component('c-row',Row)
Vue.component('c-col',Col)
Vue.component('c-layout',Layout)
Vue.component('c-header',Header)
Vue.component('c-sider',Sider)
Vue.component('c-content',Content)
Vue.component('c-footer',Footer)
Vue.component('c-toast', Toast)
Vue.use(plugin)
Vue.component('c-tabs',Tabs)
Vue.component('c-tabs-head',TabsHead)
Vue.component('c-tabs-item',TabsItem)
Vue.component('c-tabs-body',TabsBody)
Vue.component('c-tabs-pane',TabsPane)
Vue.component('c-popover', Popover)
Vue.component('c-collapse', Collapse)
Vue.component('c-collapse-item', CollapseItem)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hello world',
    selectedTab: '3',
    selectedItem: [],
  },
  created(){
    
  },
  methods:{
    yyy(){console.log('yyy')},
    inputchange: function(e){
      console.log(e.target.value)
    },
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
      this.$toast('message',{
        position: position,
        closeButton:{
          text: '知道了',
          callback(toast){
            toast.log()
            console.log('用户知道了')
          }
        }
      })
    }
  }
})

