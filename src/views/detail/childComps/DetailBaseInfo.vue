<template>
  <!-- 判断goods是否为空.然后决定是否渲染 -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <!-- 文字介绍区域 -->
    <div class="info-title">{{ goods.title }}</div>
    <!-- 价格区域 -->
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <!-- 销量收藏其他区域 -->
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }} </span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.base-info {
  margin: 15px 0;
  padding: 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  padding: 0 10px;
  font-size: 15px;
  color: rgb(82, 66, 66);
}
.info-price {
  padding: 10px 0;
}
.info-price .n-price {
  color: rgb(247, 110, 133);
  font-size: 20px;
}
.info-price .o-price {
  margin: 0 2px 0 8px;
  font-size: 12px;
  text-decoration: line-through;
}
.info-price .discount {
  padding: 2px 4px;
  font-size: 10px;
  color: rgb(255, 255, 255);
  background-color: rgb(247, 110, 133);
  border-radius: 10px;
  /* 让元素上浮一些:使用相对定位即可 */
  position: relative;
  top: -8px;
}
.info-other {
  display: flex;
  justify-content: space-between;

  margin-top: 5px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  font-size: 13px;
}
.info-service {
  height: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.info-service-item{
  font-size: 15px;
}
.info-service-item img {
  width: 14px;
  height: 14px;
}
</style>
