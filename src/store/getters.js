export default {
  CartLength(state) {
    return state.cartLists.reduce((p, n) => {
      return p + n.count
    }, 0)
  },
  cartCount(state) {
    return state.cartLists.filter(item => item.checked).reduce((p, n) => {
      return p + n.count
    },0)
  }
}