<template>
  <div>
    <Switch v-model:value="y"/>
  </div>
</template>

<script>
import Switch from "../lib/Switch.vue"
import {ref} from "vue";

export default {
  name: "SwitchDemo",
  components: {Switch},
  setup() {
    const y = ref(false)
    return {
      y
    }
  }

}
</script>

<style scoped>

</style>
