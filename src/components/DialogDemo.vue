<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :close-click-overlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>加错的标题</strong>
    </template>
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
  </Dialog>
  <h1>示列2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {h, ref} from "vue";
import {openDialog} from "../lib/openDialog";

export default {
  name: "DialogDemo",
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {

    };
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
        closeClickOverlay: true
      });
    };
    return {x, toggle, f1, f2, showDialog};
  }

};
</script>

<style scoped lang="scss">

</style>
