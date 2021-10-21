import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

//1. 导入toast文件夹
import toast from "./components/common/toast"

import FastClick from "fastclick"

import VueLazyload from "vue-lazyload"

Vue.config.productionTip = false

//2. 安装toast插件
Vue.use(toast)

// 解决移动端300ms延迟
FastClick.attach(document.body)

Vue.use(VueLazyload, {
  // 添加图片还没加载时的默认图片,
  // 在js中导入一张图片,用require导入
  loading: require("./assets/images/common/placeholder.png"),
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
