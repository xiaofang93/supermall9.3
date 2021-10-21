<template>
  <div class="cart">
    <!-- 导航区域 -->
    <nav-bar class="navbar">
      <!-- (准备放入商品的数量)  -->
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>

    <!-- 商品的列表 -->
    <cart-list></cart-list>
    <!-- 底部的汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
// 1.导入 getters 辅助函数
import { mapGetters } from "vuex"
import NavBar from "../../components/common/navbar/NavBar.vue"
import CartList from "./childComps/CartList.vue"
import CartBottomBar from "./childComps/CartBottomBar.vue"

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },

  computed: {
    //  2. 使用了对象展开运算符将 getter混入到组件的 computed对象中
    ...mapGetters(["cartLength"]),
  },
}
</script>

<style scoped>
.navbar {
  height: 44px;
  background-color: rgb(233, 114, 170);
  color: aliceblue;
}
</style>
