<template>
  <div id="home">
    <!-- 因为每个页面的navbar的背景颜色不一定一致,所以在这定义class="home-nav"单独设置自己页面的样式 -->
    <nav-bar class="home-nav">
      <!-- 首页导航栏只需要center内容,只需要一个slot -->
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banners="banners"></home-swiper>

    <recommend-view :recommends="recommends"></recommend-view>

    <feature-view></feature-view>

    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" />

    <div class="goods-scoll">
      <goods-list :goods="goods[currentType].list" />
    </div>

<!-- <ul>
  <li></li>
  <li></li>
  <li></li>
</ul> -->
    <!-- ul>li{列表$}*30 -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"

// 因为用的是export方法导出,所以需要用{}
import { getHomeMultidata, getHomeGoods } from "network/home"

// 引入轮播图组件
import HomeSwiper from "./childComps/HomeSwiper.vue"
// 引入 推荐视图组件
import RecommendView from "./childComps/RecommendView.vue"
import FeatureView from "./childComps/FeatureView.vue"
// 引入 选项卡组件
import TabControl from "../../components/content/tabControl/TabControl.vue"
import GoodsList from "../../components/content/goods/GoodsList.vue"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    }
  },
  created() {
    // 这里使用this.才会指向调用 methods里面的函数
    // 1.请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  methods: {
    // 事件监听相关
    tabClick(index) {
      console.log(index)
      switch (index) {
        case 0:
          this.currentType = "pop"
          break
        case 1:
          this.currentType = "new"
          break
        case 2:
          this.currentType = "sell"
      }
    },

    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      // 为了复用性,每次请求页面值 +1 的数据
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        console.log(res)
        // 将获取到的res.data.list添加到goods[对应对象].list下面去
        this.goods[type].list.push(...res.data.list)
        // 每次请求数据过后,当前type的page + 1
        this.goods[type].page += 1
      })
    },
  },
}
</script>

<style scope>
#home{
  padding-top: 44px;
  overflow: hidden;
}

.home-nav {
  background-color: rgb(233, 114, 170);
  /* 文字颜色 */
  color: rgb(243, 235, 242);

  /* 导航栏定位在浏览器窗口.不随着首页滚动 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  /* 提高层级,以避免被轮播图遮挡 */
  z-index: 9;
}
.tab-control {
  /* 粘性定位 */
  position: sticky;
  /* 在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下 */
  top: 44px;
}
.goods-scoll { 
  padding-bottom: 50px;
}
</style>
