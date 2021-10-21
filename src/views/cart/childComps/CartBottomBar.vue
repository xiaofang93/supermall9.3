<template>
  <div class="bottom-bar">
    <div class="check">
      <check-button class="check-button" :isCheck="isCheckAll" @click.native="cartAll" />
      <span>全选</span>
    </div>
    <div>
      <span> 合计:{{ totalPrice }} </span>
    </div>
    <span @click="settlement">去结算({{ checkLength }})</span>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkButton/CheckButton.vue"

import { mapGetters } from "vuex"
export default {
  components: { CheckButton },
  name: "CartBottomBar",
  computed: {
    ...mapGetters(["cartLength", "cartList"]),

    // 计算商品总价格
    totalPrice() {
      // *购物车中选中的商品就会有checked属性
      // 过滤保存 cartList里的数组对象有checked属性的数组对象
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked
          })
          // 使用reduce函数,循环算出商品的价格
          // prev 表示上一次调用回调时的返回值，或者初始值 0;
          .reduce((prev, item) => {
            return prev + item.lowPrice * item.count
          }, 0)
          // 保留小数点后2位数
          .toFixed(2)
      )
    },
    // 计算商品总件数
    checkLength() {
      return this.cartList
        .filter((item) => {
          return item.checked
        })
        .reduce((prev, item) => {
          console.log(item)
          return prev + item.count
        }, 0)
    },
    isCheckAll() {
      // 判断过滤出购物车里选中商品(选中时,check为true)的个数, 是否和购物车总商
      // 品的个数一致
      return this.cartList.filter((item) => {
        return item.checked
      }).length === this.cartLength
        ? true
        : false
    },
  },
  methods: {
    cartAll() {
      if (this.isCheckAll) {
        this.cartList.forEach((item) => (item.checked = false))
      } else {
        this.cartList.forEach((item) => (item.checked = true))
      }
    },
    settlement() {
      // 找出有没有被选中的购物车商品
      const cartCheckLength = this.cartList.find((item) => {
        return item.checked
      })

      if (!cartCheckLength) {
        this.$toast.show("请先确认购买的商品", 1500)
      }
    },
  },
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: rgb(218, 189, 189);
  display: flex;
  width: calc(100%);
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
}
.check {
  display: flex;
}
.check-button {
  width: 20px;
  height: 20px;
}
</style>
