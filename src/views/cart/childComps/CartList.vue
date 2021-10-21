<template>
  <div class="cart-list" @scroll="listScroll">
    <cart-list-item v-for="(item, index) in cartList" 
    :key="index" 
    :product="item" />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import CartListItem from "./CartListItem.vue"
export default {
  components: {
    CartListItem,
  },
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods: {
    listScroll(e) {
      console.log(e.target.scrollTop)
    },
  },
}
</script>

<style scoped>
.cart-list {
  overflow-y: scroll;
  height: calc(100vh - 136px);
  background-color: rgb(241, 238, 238);
}
</style>
