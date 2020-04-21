<template>
  <div>
    <c-input value="NORMAL"></c-input>
    <c-input value="READONLY" readonly></c-input>
    <c-input value="DISABLED" disabled></c-input>
    <c-input value="ERROR" error="Error message"></c-input>
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  components:{
    'c-input': Input,
  },
  
}
</script>

<style>

</style>