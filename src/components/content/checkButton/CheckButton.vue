<template>
  <div class="check-button" :class="{isCheck}">
    <img src="~assets/images/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>

<style scoped>
.check-button {
  border: 1px solid #ccc;
  /* background-color: #fff; */
  border-radius: 50%;
  padding-left: 2px;
}
.isCheck {
    background-color: rgb(216, 56, 56);
}
</style>
