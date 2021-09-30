import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "category",
    component: Category,
  },
  {
    path: "profile",
    component: Profile,
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
