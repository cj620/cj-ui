<template>
  <div>
    <c-popover position="top">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <c-button>Click me</c-button>
      </c-popover>
    <c-popover position="top">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <c-button>Top</c-button>
      </c-popover>
      <c-popover position="bottom">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <c-button>Bottom</c-button>
      </c-popover>
      <c-popover position="left">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <c-button>left</c-button>
      </c-popover>
      <c-popover position="right">
        <template slot="content">
          <div>
            Content of popover
          </div>
        </template>
        <c-button>Right</c-button>
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