<template>
  <div class="shop-detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" />
    <div id="detail" @scroll="detailScroll" ref="detail">
      <detail-swiper :banners="topimg" ref="shopTop" />

<div>{{ $store.state.cartList }}</div>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-info :detailInfo="detailInfo" />

      <detail-params :params="params" ref="params" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommend" ref="goods" />

      <back-top @click.native="back" v-show="isShow" />
    </div>
    <!-- 因为底部不需要跟着滚动,所以放在滚动区域的外面 -->
    <detail-botton-bar @addCart="addCart" />
  </div>
</template>

<script>
import { getDetail, Goods, Shop, Params, getRecommend } from "network/detail.js"
import DetailNavBar from "./childComps/DetailNavBar.vue"
import DetailSwiper from "./childComps/DetailSwiper.vue"
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue"
import DetailShopInfo from "./childComps/DetailShopInfo.vue"
import DetailInfo from "./childComps/DetailInfo.vue"
import DetailParams from "./childComps/DetailParams.vue"
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue"
import BackTop from "../../components/content/backTop/BackTop.vue"
import GoodsList from "../../components/content/goods/GoodsList.vue"
import DetailBottonBar from "./childComps/DetailBottonBar.vue"

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    BackTop,
    DetailParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottonBar,
  },
  name: "Detail",
  data() {
    return {
      iid: null,
      topimg: null,
      goods: {},
      shop: {},
      el: {},
      detailInfo: {},
      params: {},
      commentInfo: {},
      recommend: [],
      isShow: false,
      btnRefsEl: [],
    }
  },
  // 由于使用了<keep-alive>,数据不会销毁,created只会创建一次
  // 然而activated 进入页面就会触发,可用于初始化页面数据等(不过会有不销毁轮播图index的bug)
  //如果使用created,就需要使用<keep-alive exclude="Detail">取消该组件不会销毁的状态
  created() {
    this.iid = this.$route.params.id
    // 请求详情页的数据
    getDetail(this.iid).then((res) => {
      console.log(res)
      const data = res.result
      // 将请求到的详情页数据里的图片保存到topimg
      this.topimg = data.itemInfo.topImages
      // 获取详情页商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //获取店铺信息
      this.shop = new Shop(data.shopInfo)
      // 获取商品的详情图片数据
      this.detailInfo = data.detailInfo
      // 获取商品参数信息
      this.params = new Params(data.itemParams.info, data.itemParams.rule)
      //获取评论信息
      // 有些没有参数的,则默认为空
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })

    //  请求推荐视图的数据
    getRecommend().then((res) => {
      console.log(res)
      this.recommend = res.data.list
    })
  },
  mounted() {
    // 在creatde中,因为模板dom元素还没有加载完成,此时$refs.还是undefined
    // 而在mounted中,此时dom元素已经加载完了,所以没有问题
    const arr = [this.$refs.shopTop, this.$refs.params, this.$refs.comment, this.$refs.goods]
    this.btnRefsEl = arr
  },
  methods: {
    detailScroll(e) {
      // 将滚动监听到的scrollTop保存到let scrollTop
      let scrollTop = e.target.scrollTop
      // 将滚动监听到的scrollHeight保存到scrollHeight
      const scrollHeight = e.target.scrollHeight

      scrollTop > scrollHeight / 4 ? (this.isShow = true) : (this.isShow = false)

      // 实现滚动直接联动跳转点击按钮
      const els = this.btnRefsEl
      const len = this.btnRefsEl.length
      for (let i = 0; i < len; i++) {
        // 卷去值 在当前区域
        const flag1 = els[i].$el.offsetTop - 44 <= scrollTop
        // 卷去值 不超过当前区域
        // 如果i==3 则执行true 反之执行 els[i + 1].....
        const flag2 = i == 3 ? true : els[i + 1].$el.offsetTop - 44 > scrollTop
        // 如果当前的数组els的第i个的offsetTop值小于等于卷曲的值 且 当
        // 前的数组els的第i+1个的offsetTop值大于等于卷曲的值
        // 就把当前的i 赋值给 $refs.nav.currentIndex
        if (flag1 && flag2) this.$refs.nav.currentIndex = i
      }
    },
    titleClick(index) {
      const offsetTop = this.btnRefsEl[index].$el.offsetTop
      this.$refs.detail.scrollTop = offsetTop - 44
    },
    back() {
      this.$refs.detail.scrollTop = 0
    },
    addCart() {
      console.log("加入购物车")
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topimg[0]
      product.desc = this.goods.desc
      product.price = this.goods.newPrice
      product.iid = this.iid
      console.log(product)
      // 2.将商品添加到购物车里
      // 提交 vuex里addCart自定义事件,并将product参数传过去
      // this.$store.commit("addCart", product)
      this.$store.dispatch("addCart", product)
    },
  },
}
</script>

<style scoped>
#detail {
  overflow: scroll;
  height: calc(100vh - 102px);
}
</style>
