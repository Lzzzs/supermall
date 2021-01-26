<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImages" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImages() {
        /*
        this.goodsItem.image必须得放前面  
        因为如果this.goodsItem.show.img放前面 
        show假如读不到 就会是undefine 那么
        再去读img就会报错 所以 this.goodsItem.image
        必须放前面
        */
        return this.goodsItem.image || this.goodsItem.show.img
        // return this.goodsItem.show.img || this.goodsItem.image
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemImgLoad')
      },
      itemClick() {
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.goodsItem.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>