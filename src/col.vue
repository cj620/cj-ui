<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "c-col",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    // gutter:{
    //   type: [Number,String]
    // },
    //:phone="{span:12, offset:2}"
   
  },
  data(){
    return{
      gutter: 0,
    }
  },
  computed: { // 如果data里的数据变了，computed的数据也要变
    colClass(){
      let span = this.span
      let offset = this.offset
      return [span &&`col-${span}`,offset && `offset-${offset}`]
    },
    colStyle(){
      return {
        marginLeft: this.gutter / 2 + 'px',
        marginRight: this.gutter / 2 + 'px'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  height: 64px;
  background: #7ebbeb;
  width: 50%;
  border: 1px solid #cccccc;
  

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>