export default{
      // payload 就是 product
      addCart(context, payload) {
        // 1.查找之前数组中是否有该商品
        // item就是state.cartList.item 一旦符合条件,就返回item
        // 如果条件不符合,则返回的是undefined
        let oldProduct = context.state.cartList.find((item) => item.iid === payload.iid)
  
        console.log(oldProduct)
        // 2.判断oldProduct
        // 如果oldProduct有值,为true,说明是重复的商品. 则商品个数+1
        if (oldProduct) {
          context.commit("addCounter", oldProduct)
        }
        // 反之说明没有值,则直接push进购物车数组对象,并设置个数为1
        else {
          payload.count = 1
          context.commit("addToCart", payload)
        }
      },

     
}