<template>
  <div>
    <c-collapse :selected.sync="selectedItem" single>
        <c-collapse-item title="This is panel header 1" name="1">
          <div>Orange is a kind of fruit</div>
        </c-collapse-item>
        <c-collapse-item title="This is panel header 2" name="2">
          <div>Orange is a kind of fruit</div>
        </c-collapse-item>
        <c-collapse-item title="This is panel header 3" name="3">
          <div>Orange is a kind of fruit</div>
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