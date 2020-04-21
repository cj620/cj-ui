<template>
  <div>
    <c-input v-model="message"></c-input>
    <p style="margin-top: 5px;">message: {{message}} </p>
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  components:{
    'c-input': Input,
  },
  data(){
    return {
      message: 'Hello World',
    }
  },
}
</script>

<style>

</style>