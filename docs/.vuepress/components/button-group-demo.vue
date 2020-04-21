<template>
  <div>
     <c-button-group>
        <c-button icon="left">上一页</c-button>
        <c-button>更多</c-button>
        <c-button icon="right" icon-position="right">下一页</c-button>
      </c-button-group>
  </div>
</template>

<script>
import ButtonGroup from '../../../src/button-group'
import Button from '../../../src/button'
export default {
  components:{
    'c-button': Button,
    'c-button-group': ButtonGroup,
  },
  
}
</script>

<style>

</style>