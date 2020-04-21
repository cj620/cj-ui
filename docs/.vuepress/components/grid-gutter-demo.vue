<template>
  <div>
      <c-row gutter="20">
        <c-col span="8">8</c-col>
        <c-col span="8">8</c-col>
        <c-col span="8">8</c-col>
      </c-row>
      <c-row gutter="10">
        <c-col span="6">6</c-col>
        <c-col span="6">6</c-col>
        <c-col span="6">6</c-col>
        <c-col span="6">6</c-col>
      </c-row>
  </div>
</template>

<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
  components:{
    'c-row': Row,
    'c-col': Col,

  },
  
}
</script>

<style>

</style>