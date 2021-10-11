<template>
  <div id="detail">
    <detail-nav-bar />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue"

export default {
  components: {
    DetailNavBar,
  },
  name: "Detail.vue",
  data() {
    return {
      iid: null,
    }
  },
  // 由于使用了<keep-alive>,数据不会销毁,created只会创建一次
  // 然而activated 进入页面就会触发,可用于初始化页面数据等
  activated() {
    this.iid = this.$route.params.id
  },
}
</script>

<style scoped></style>
