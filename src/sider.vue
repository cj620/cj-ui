<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="hideSide">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "c-sider",
  data() {
    return {
      visible: true
    };
  },
  methods: {
    hideSide() {
      this.visible = !this.visible
    }
  }
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    left: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to {
    margin-left: -200px
  }
}
</style>