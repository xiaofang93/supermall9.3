<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      // 将被点击的数值index传给父组件
      this.$emit('tabClick',index)
    },
  },
}
</script>
<style scoped>
.tab-control {
  /* 1.设置flex布局 */
  display: flex;
  /* 3.文本水平居中 */
  text-align: center;
  font-size: 14px;
  background-color: #fff;
  z-index: 9;
}
.tab-control-item {
  /* 2.使flex布局均等分 */
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active {
  color: rgb(241, 31, 118);
}
.active span {
  border-bottom: 1px solid rgb(241, 31, 118);
  /* 为了将底边框挤下去 */
  padding: 5px;
}
</style>
