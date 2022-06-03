<template>
  <article class="markdown-body" v-html="GetStarted"></article>
</template>

<script>
import GetStarted from "../markdown/get-started.md";
export default {
  name: "GetStared",
  data(){
    return {
      GetStarted
    }
  }
}
</script>

<style scoped>

</style>
