<template>
  <div id="detail-info">
    <p>{{ detailInfo.desc }}</p>
    <div v-for="(item, index) in detailInfo.detailImage" :key="index" class="detail-img">
      <h4>{{ item.key }}</h4>
      <div v-for="(img, index) in item.list" :key="index">
        <img :src="img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.detail-img img {
  width: 100%;
}
</style>
