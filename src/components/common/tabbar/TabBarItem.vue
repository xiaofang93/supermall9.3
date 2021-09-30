<template>
  <div class="tab-bar-item acitve-animation" @click="itemClick">
    <!-- solt是个插槽,会被替换,所以添加div来绑定class -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBaritem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },

  // data() {
  //   return {
  //     // isActive: true
  //   };
  // },

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    },
  },

  methods: {
    itemClick() {
      this.$router.replace(this.path)
    },
  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 52px;
  font-size: 10px;
}
/* 按钮切换动画 */
.acitve-animation {
  animation: active 0.2s;
}
@keyframes active {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
