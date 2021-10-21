<template>
  <div class="product">
    <div class="item-check">
      <check-button :isCheck="product.checked" 
      @click.native="checkClick" />
    </div>
    <div class="imgs">
      <img :src="product.image" alt="" />
    </div>
    <div class="list">
      <p class="desc">{{ product.desc }}</p>
      <p class="descs">{{ product.desc }}</p>
      <ul class="price">
        <li class="prices">￥{{ product.lowPrice }}</li>
        <li class="count">x{{ product.count }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue"

export default {
  components: {
    CheckButton,
  },
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    console.log(this.$store.state.cartList);
    },
  },
}
</script>

<style scoped>
.product {
  display: flex;
  border: 1px solid #ccc;
  height: 130px;
  /* width: 100%; */
  margin: 6px;
  background-color: #fff;
  border-radius: 6px;
  justify-content: flex-start;
}
.item-check {
  margin-left: 3px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgs {
  width: 90px;
  padding: 5px;
}
.imgs img {
  height: 100%;
  border-radius: 5px;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.desc,
.descs {
  width: calc(100vw - 130px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc {
  font-size: 18px;
  font-weight: 600;
}
.descs {
  font-size: 12px;
}

.price {
  list-style-type: none;

  display: flex;
  justify-content: space-between;
}
.prices {
  color: rgb(231, 101, 101);
}
</style>
