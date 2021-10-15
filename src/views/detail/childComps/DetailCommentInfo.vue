<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="commentInfo">
    <div class="title">
      <div>用户评价</div>
      <div>
        更多
      </div>
    </div>
    <div class="username">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div>
      <p class="comment">{{ commentInfo.content }}</p>
      <div class="otherInfo">
        <span class="times">{{ getLocalTime }}</span>
        <span class="styles">{{ commentInfo.style }}</span>
      </div>
      <div>
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
          alt=""
          class="infoImg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  created() {},
  computed: {
    getLocalTime() {
      return new Date(parseInt(this.commentInfo.created) * 1000)
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ")
    },
  },
  methods: {},
}
</script>

<style scoped>
.commentInfo {
  border-bottom: 5px solid #ccc;
}

.title {
  height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 550;
  margin: 10px;
  border-bottom: 1px solid #ccc;
}
.username {
  margin: 10px 0;
}
.username img {
  height: 40px;
  border-radius: 15px;
  vertical-align: middle;
}
.username span {
  vertical-align: middle;
  color: rgb(12, 12, 12);
  font-size: 16px;
  font-weight: 900;
}

.otherInfo {
  color: rgb(177, 163, 163);
  margin: 8px;
}
.times {
  margin-right: 20px;
}
.infoImg {
  width: 30%;
}
</style>
