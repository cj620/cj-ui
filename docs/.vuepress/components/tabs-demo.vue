<template>
  <div>
    <c-tabs :selected.sync="selectedTab">
        <c-tabs-head>
          <c-tabs-item name="1">
            Tab 1
          </c-tabs-item>
          <c-tabs-item name="2">
            Tab 2
          </c-tabs-item>
          <c-tabs-item name="3">
            Tab 3
          </c-tabs-item>
          <template v-slot:actions>
            <button>按钮</button>
          </template>
        </c-tabs-head>
        <c-tabs-body>
          <c-tabs-pane name="1">
            Content of Tab Pane 1
          </c-tabs-pane>
          <c-tabs-pane name="2">
            Content of Tab Pane 2
          </c-tabs-pane>
          <c-tabs-pane name="3">
            Content of Tab Pane 3
          </c-tabs-pane>
        </c-tabs-body>
      </c-tabs>
  </div>
</template>

<script>
import Tabs from '../../../src/tabs.vue'
import TabsHead from '../../../src/tabs-head'
import TabsItem from '../../../src/tabs-item'
import TabsBody from '../../../src/tabs-body'
import TabsPane from '../../../src/tabs-pane'
export default {
  components:{
    'c-tabs': Tabs,
    'c-tabs-head': TabsHead,
    'c-tabs-item': TabsItem,
    'c-tabs-body': TabsBody,
    'c-tabs-pane': TabsPane,
  },
  data(){
    return{
      selectedTab: '1',
    }
  }
}
</script>

<style>

</style>