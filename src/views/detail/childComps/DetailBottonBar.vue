<template>
  <div class="botton-bar">
    <div>
      <i class="icon service"></i>
      <span>客服</span>
    </div>
    <div>
      <i class="icon shop"></i>
      <span>店铺</span>
    </div>
    <div @click="select">
      <i v-if="isShow" class="icon select"></i>
      <i v-if="!isShow" class="icon selects"></i>

      <span>收藏</span>
    </div>
    <div class="cart-buy">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottonBar",
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    select() {
      this.isShow = !this.isShow
    },
    addCart() {
      this.$emit("addCart")
    },
  },
}
</script>

<style scoped>
.botton-bar {
  height: 58px;
  display: flex;
  margin-left: 12px;
  justify-content: space-between;
  font-size: 14px;
  /* background-color: rgb(163, 41, 41); */
}
img {
  width: 30px;
}
.icon {
  /* 元素将显示为块级元素 */
  display: block;
  width: 22px;
  height: 22px;
  margin: 8px auto 5px;
  background: url(~assets/images/detail/detail_bottom.png) 0 0/100%;
}
.service {
  background-position: 0 -52px;
}

.shop {
  background-position: 0 -98px;
}
.select {
  background-position: 0 1px;
}
.selects {
  background-position: 0 -26px;
}
.cart-buy {
  display: flex;
  align-items: center;
}
.cart {
  padding: 21px;
  background-color: rgb(221, 198, 65);
}
.buy {
  padding: 21px;
  background-color: rgb(219, 87, 191);
}
</style>
