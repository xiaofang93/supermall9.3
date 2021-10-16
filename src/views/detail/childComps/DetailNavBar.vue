<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left"  @click="backClick">
        <img class="back" src="~assets/images/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="item.index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
export default {
  name: "DetailNavBar.vue",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    currentIndex: 0,
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    backClick() {
      // back() 等同于 go(-1)
      this.$router.back()
    },
  },
}
</script>

<style scoped>

.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: rgb(255, 17, 17);
}
.back{
  vertical-align: middle
}
</style>
