<template>
  <div>
    <c-button>默认按钮</c-button>
    <c-button icon="settings">默认按钮</c-button>
    <c-button :loading="true">默认按钮</c-button>
    <c-button disabled>默认按钮</c-button>
    <c-button icon="awesome">点赞</c-button>
    <c-button icon="download">下载</c-button>
  </div>
</template>

<script>
import Button from '../../../src/button'
import ButtonPopple from '../../../src/button-popple'
export default {
  components:{
    'c-button': Button,
    'c-button-popple': ButtonPopple
  },
  
}
</script>

<style>

</style>