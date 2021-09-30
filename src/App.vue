<template>
  <div id="app">
    <div id="nav">
      <router-view />
      <MainTabBar />
    </div>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue"
export default {
  name: "app",
  components: {
    MainTabBar,
  },
}
</script>
<style >
  @import "assets/css/base.css";
</style>
