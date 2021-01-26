export default {
  addCart(context, payload) {
    return new Promise((resolve,reject) => {
      // 查找有没有加过同样的商品
      const arr = context.state.cartLists.find(item => {
        return item.iid === payload.iid
      })
      if(arr) {
        context.commit('addCount', arr)
        resolve('当前商品的数量加1')
      }else {
        payload.count = 1
        context.commit('addCart', payload)
        resolve('加入购物车成功')
      }
    })
  },
  allCheckClick(context) {
    const lists = context.state.cartLists
    const arr = lists.filter(item => item.checked)
    arr.length === lists.length ? context.commit('allunChecked') : context.commit('allChecked')
  }
}