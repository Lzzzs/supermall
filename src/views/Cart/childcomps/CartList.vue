<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
      v-for="(item,index) in $store.state.cartLists" 
      :key="index"
      :product-info="item">
      </cart-list-item>
    </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'
import BottomBar from './BottomBar'

  export default {
    components: {
      Scroll,
      CartListItem,
      BottomBar
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .content {
    position: absolute;
    top: 44px;
    bottom: 93px;
    right: 0;
    left: 0;
    overflow: hidden;
  }
</style>