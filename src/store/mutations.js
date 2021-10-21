export default {
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  },
  // cartListAll(state, payload) {
  //   payload.checked = !payload.checked
  // },
}
