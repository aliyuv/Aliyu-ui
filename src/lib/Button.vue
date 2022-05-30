<template>
  <button :size="size" v-bind="rest">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {},
  inheritAttrs: false,
  setup(props,context) {
    const {...rest} = context.attrs;
    return {
      rest
    }
  }
};
</script>

<style scoped>

</style>
