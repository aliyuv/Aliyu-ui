<template>
  <h2>导航栏
    <router-link to="/">aliyu</router-link>
    <router-link to="/aliyu">aliyu2</router-link>
  </h2>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>
