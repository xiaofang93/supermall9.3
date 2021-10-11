<template>
  <div id="home" @scroll="handlerScroll">
    <!-- 因为每个页面的navbar的背景颜色不一定一致,所以在这定义class="home-nav"单独设置自己页面的样式 -->
    <nav-bar class="home-nav">
      <!-- 首页导航栏只需要center内容,只需要一个slot -->
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banners="banners"></home-swiper>

    <recommend-view :recommends="recommends"></recommend-view>

    <feature-view></feature-view>

    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" />

    <goods-list :goods="goods[currentType].list" />

    <!-- 监听组件的原生事件,必须给对应事件加上 .native 修饰符才能监听 -->
    <back-top v-show="isShow" @click.native="backClick" />

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
import BackTop from "../../components/content/backTop/BackTop.vue"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    BackTop,
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
      isShow: false,

      // 用来保存事件元素
      el: null,
      // 用来保存事件元素的位置数值
      currentHeight: undefined,
    }
  },
  // 进入页面是触发的函数
  activated() {
    if (this.el) {
      this.el.scrollTop = this.currentHeight
    }
  },
  // 离开路由之前执行的函数
  beforeRouteLeave(to, from, next) {
    if (this.el) {
      this.currentHeight = this.el.scrollTop
    }
    // !this.el || (this.currentHeight = this.el.scrollTop)
    next()
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
    handlerScroll(el) {
      // 将事件属性返回触发的元素 赋给data中的 el
      this.el = el.target
      // 动态卷曲的高度
      let currentHeight = el.target.scrollTop
      // 整个元素撑开的高度
      const scrollHeight = el.target.scrollHeight
      // 可视区的高度(不包括纵向滚动条)
      const clientHeight = el.target.clientHeight

      // 如果卷曲的高度离底部还剩0的时候,调用getHomeGoods(),完成上拉加载更多
      if (scrollHeight - currentHeight == clientHeight) {
        this.getHomeGoods(this.currentType)
      }

      // 判断isShow的真假,从而确认 返回顶部按钮 是否隐藏
      currentHeight > scrollHeight / 5 ? (this.isShow = true) : (this.isShow = false)
    },
    // 点击返回顶部事件
    backClick(e) {
      // target 事件属性可返回事件的目标节点（触发该事件的节点）
      // parentElement属性返回指定元素的父元素。
      let el = e.target.parentElement.parentElement
      new Promise((resolve) => {
        // 一直循环执行 el.scrollTop - 120 直到el.scrollTop <= 200.终止计时器
        const timer = setInterval(() => {
          el.scrollTop -= 120
          if (el.scrollTop <= 200) {
            clearInterval(timer)
            resolve()
          }
        }, 3)
      }).then((res) => {
        const timer = setInterval(() => {
          el.scrollTop -= 4
          if (el.scrollTop <= 0) {
            clearInterval(timer)
          }
        }, 5)
      })
    },

    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      // 为了复用性,每次请求页面值 +1 的数据
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
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
#home {
  /* 导航栏的高度为44px */
  padding-top: 44px;
  /* 使home的视图高度减去tabbar的高度(tabbar高度为53px) */
  height: calc(100vh - 53px);
  overflow-y: scroll;
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
  /* 在 viewport 视口滚动到元素 top 距离小于 0px 之前，元素为相对定位。之后，元素将固定在与顶部距离 0px 的位置，直到 viewport 视口回滚到阈值以下 */
  top: 0px;
}
</style>
