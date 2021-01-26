<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车({{CartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childcomps/CartList'

  import {mapGetters} from 'vuex'

  export default {
    components: {
      NavBar,
      CartList
    },
    computed: {
      ...mapGetters(['CartLength'])
    }
  }
</script>

<style scoped>
  .cart-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>