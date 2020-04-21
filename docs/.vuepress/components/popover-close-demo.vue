<template>
  <div>
    <c-popover position="top">
        <template v-slot:content="{close}">
          <div>Content of popover</div>
            <c-button @click="close">Close</c-button>
        </template>
        <c-button>Click me</c-button>
      </c-popover>
  </div>
</template>

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button';
export default {
  components:{
    'c-popover': Popover,
    'c-button': Button,
  },
  
}
</script>

<style>

</style>