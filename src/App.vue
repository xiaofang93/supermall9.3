<template>
  <div id="app">
    <div id="nav">
      <keep-alive exclude="Detail">
        <router-view />
      </keep-alive>
      <MainTabBar v-if="!$route.meta.isShow"/>
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
<style>
@import "assets/css/base.css";
</style>
