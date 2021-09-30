<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.image">
      <!-- 轮播图是需要可以点击的,所以在轮播图外部包含一个<a>标签 -->
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper"

export default {
  name: "HomeSwiper",
  props: {
    //   将Home.vue里面的 Data.banners 的数据通过props传到该组件并使用
    banners: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },
  components: {
    Swiper,
    SwiperItem,
  },
}
</script>

<style scoped></style>
