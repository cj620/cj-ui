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

Vue.component('o-button', Button)
Vue.component('o-icon', Icon)
Vue.component('o-button-popple', ButtonPopple)
Vue.component('o-button-group',ButtonGroup)
Vue.component('o-input', Input)
Vue.component('o-row',Row)
Vue.component('o-col',Col)
Vue.component('o-layout',Layout)
Vue.component('o-header',Header)
Vue.component('o-sider',Sider)
Vue.component('o-content',Content)
Vue.component('o-footer',Footer)
Vue.component('o-toast', Toast)
Vue.use(plugin)
Vue.component('o-tabs',Tabs)
Vue.component('o-tabs-head',TabsHead)
Vue.component('o-tabs-item',TabsItem)
Vue.component('o-tabs-body',TabsBody)
Vue.component('o-tabs-pane',TabsPane)
Vue.component('o-popover', Popover)
Vue.component('o-collapse', Collapse)
Vue.component('o-collapse-item', CollapseItem)

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

