<template>
  <div class="goods-item" @click="itemClick">
    <!-- 展示数据的图片 -->
    <img :src="showImage" alt="" />

    <div class="goods-info">
      <!-- 展示商品描述 -->
      <p>{{ goodsItem.title }}</p>
      <!-- 展示商品价格 -->
      <span class="price">{{ goodsItem.price }}</span>
      <!-- 展示商品收藏数 -->
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    showImage() {
      // 2个对象调换会报错
      // 因为优先获取是首页的goodsItem.image.此时goodsItem.show是一个空对象
      // 你无法在一个空对象里面取到img 所以goodsItem.show.img放在前面就会报错
      return this.goodsItem.image || this.goodsItem.show.img
    },
  },
  methods: {
    itemClick() {
      console.log("点击了")
      this.$router.push("/detail/" + this.goodsItem.iid)
    },
  },
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  /* 为了让每行显示2个item 数据元素.所以设置百分之50 为了留缝隙 宽度尽量小于50%*/
  width: 46%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  bottom: 5px;
  left: 0px;
  right: 0px;
  overflow: hidden;
}
.goods-item p {
  margin-bottom: 3px;
  /* 文字超出隐藏 */
  overflow: hidden;
  /* 文字超出不换行 */
  white-space: nowrap;
  /* 文字超出内容为省略号 */
  text-overflow: ellipsis;
}
.price {
  color: rgb(226, 23, 90);
  /* 让商品价格和右边的收藏增加间隔距离 */
  margin-right: 20px;
}
.collect {
  color: rgb(240, 94, 10);
  position: relative;
}
.collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /* 0 0/14px 14px 等于 background-position: 0 0; background-size: 14px 14px; */
  background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>
