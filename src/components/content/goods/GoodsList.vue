<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" :key="item.id" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue"
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      //   默认值为空数组
      default() {
        return []
      },
    },
  },
  mounted() {
    console.log(this.goods)
  },
}
</script>

<style scoped>
.goods {
  display: flex;
  /* 盒子内每个item允许自动换行(当item宽度设置50% 则一行显示2个item 30%一行显示3个) */
  flex-wrap: wrap;
  /* 使goods里面的元素间隙均等分 */
  justify-content: space-evenly;
}
</style>
