<template>
  <div>Button 实例</div>
  <h1>实例1</h1>
  <div>
    <Button @click="onClick" @focus="onClick" @mousemove="onClick" :size="small">你好</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  name: "ButtonDemo",
  components: {Button},
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return {
      onClick
    };
  }

};
</script>

<style scoped>

</style>
