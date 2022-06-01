<template>
  <div>Tabs 示例</div>
  <Tabs>
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";

export default {
  name: "TabsDemo",
  components: {Tabs, Tab}
};
</script>

<style scoped>

</style>
