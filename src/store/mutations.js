export default {
  addCount(state, payload) {
    payload.count++
  },
  addCart(state, payload) {
    state.cartLists.push(payload)
  },
  checkClick(state, payload) {
    payload.checked = !payload.checked
  },
  allunChecked(state) {
    for(let item of state.cartLists) {
      item.checked = false
    }
  },
  allChecked(state) {
    for(let item of state.cartLists) {
      item.checked = true
    }
  }
}