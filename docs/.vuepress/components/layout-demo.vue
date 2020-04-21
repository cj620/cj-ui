<template>
  <div>
      <c-layout>
        <c-header style="height: 64px; background: #8bbae6">header</c-header>
        <c-content style="height: 100px; background: #418ce2">content</c-content>
        <c-footer style="height: 64px; background: #8bbae6">footer</c-footer>
      </c-layout>
  </div>
</template>

<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Sider from '../../../src/sider'
import Content from '../../../src/content'
import Footer from '../../../src/footer'

export default {
  
  components:{
    'c-layout': Layout,
    'c-header': Header,
    'c-slder': Sider,
    'c-content': Content,
    'c-footer': Footer,
  },
}
</script>

<style>

</style>