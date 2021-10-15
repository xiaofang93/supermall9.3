<template>
  <div class="detail-shop">
    <div class="shop-name">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="amount-score">
      <div class="amount-goods">
        <span class="amount">
          {{ shop.fans }}万
          <p>总销量</p>
        </span>
        <span class="goodsCount">
          {{ shop.goodsCount }}
          <p>全部宝贝</p>
        </span>
      </div>
      <!-- 店铺评分 -->
      <span class="score">
        <div v-for="(item, index) in shop.score" :key="index" class="score-item">
          <span>
            {{ item.name }}
          </span>
          <span>
            {{ item.score }}
          </span>
          <!-- 如果isBetter是false则显示为低 反之则显示为高 -->
          <span>
            <span v-if="!item.isBetter" class="short">低</span>
            <span v-if="item.isBetter" class="tall">高</span>
          </span>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.detail-shop {
  font-size: 15px;
  font-weight: 550;
}
.shop-name {
  margin: 20px 0;
  color: rgb(194, 51, 175);
}
/* 将字体图标和文字都设置vertical-align: middle;
可以让这2个节点在父节点中垂直居中 */
.shop-name img {
  height: 70px;
  vertical-align: middle;
  border-radius: 35px;
  border: 1px solid #ccc;
}
.shop-name span {
  vertical-align: middle;
  font-size: 18px;
  margin-left: 10px;
  font-weight: 500;
}

.amount-score {
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.amount-goods {
  margin-top: 10px;
  width: 50%;
  border-right: 1px solid rgb(184, 177, 177);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.amount,
.goodsCount {
  text-align: center;
}
.amount p,
.goodsCount p {
  margin-top: 10px;
}

.score {
  width: 40%;
}
.score-item {
  display: flex;
  justify-content: space-between;
}
.score-item span {
  margin: 4px;
}

.short {
  padding: 1px;
  border-radius: 8px;
  color: rgb(255, 253, 253);
  background-color: rgb(102, 197, 252);
}
.tall {
  padding: 1px;
  border-radius: 8px;
  color: rgb(253, 251, 251);
  background-color: rgb(247, 130, 130);
}
</style>
