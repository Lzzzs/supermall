<template>
  <div class="bottom-menu">
    <check-button class="select-all" @checkClick="allCheckClick" :isChecked="isChecked"></check-button>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product">去计算({{$store.getters.cartCount}})</span>
  </div>
</template>

<script>
  import checkButton from 'components/common/checkButton/checkButton'

  export default {
    components: {
      checkButton
    },
    computed: {
      totalPrice() {
        return this.$store.state.cartLists.filter(item => {
          return item.checked
        }).reduce((p, n) => {
          return p + n.price * n.count 
        },0).toFixed(2)
      },
      isChecked() {
        return !(this.$store.state.cartLists.filter(item => !item.checked).length) && this.$store.state.cartLists.length != 0
      }
    },
    methods: {
      allCheckClick() {
        this.$store.dispatch('allCheckClick')
      }
    }
  }
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>