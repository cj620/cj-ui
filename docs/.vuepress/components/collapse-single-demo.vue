<template>
  <div>
    <c-collapse :selected.sync="selectedItem" single>
        <c-collapse-item title="I am cxk 1" name="1">
          <div>I can rap</div>
        </c-collapse-item>
        <c-collapse-item title="I am cxk 2" name="2">
          <div>I can dance</div>
        </c-collapse-item>
        <c-collapse-item title="I am cxk 3" name="3">
          <div>and basketball</div>
        </c-collapse-item>
      </c-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
export default {
  components:{
    'c-collapse': Collapse,
    'c-collapse-item': CollapseItem,
  },
  data(){
    return{
      selectedItem: [],
    }
  }
  
}
</script>

<style>

</style>