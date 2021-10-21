// 4.导入Toast.vue组件
import Toast from "./Toast.vue"
// 1.创建一个空对象 obj
const obj = {}

// 3.项目打开时,vue立即就调用了obj.install这个函数
obj.install = function(Vue) {
  console.log("执行了obj", Vue)

  // 5.创建组件构造器
  const profile = Vue.extend(Toast)

  //   因为构造器只能导出JS代码,并没有模板dom元素,所以6 7 8 的流程
  //   都是为了创建dom元素
  // 6.new的方式,根据组件构造器,可以创建出来一个组件对象
  const toast = new profile()
  // 7.将组件对象,手动挂载到某一个元素上
  toast.$mount(document.createElement("div"))
  // 8.toast.$el对应的就是div
  //   appendChild() 方法向节点添加最后一个子节点。
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

// 2.导出这个对象
export default obj
