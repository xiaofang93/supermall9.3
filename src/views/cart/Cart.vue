<template>
  <div>
    <nav-bar class="navbar">
      <!-- (准备放入商品的数量)  -->
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue"
// 1.导入 getters 辅助函数
import { mapGetters } from "vuex"
export default {
  name: "Cart",
  components: { NavBar },

  computed: {
  //  2. 使用了对象展开运算符将 getter混入到组件的 computed对象中
    ...mapGetters(["cartLength"]),
  },
}
</script>

<style scoped>
.navbar {
  background-color: rgb(233, 114, 170);
  color: aliceblue;
}
</style>
