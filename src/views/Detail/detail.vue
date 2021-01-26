<template>
  <div class="detail">
    <detail-nav-bar class="detail-navbar" @titleClick="titleClick" ref="detailNavBar"/>
    <scroll class="detail-scroll" ref="scroll" :probeType="3" @Position="NavBarScroll">
      <detail-swiper :topImages=topImages />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :param-info="paramInfo" ref="param" />
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="Recommends" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart" />
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from '../Detail/childcomps/detailNavBar'
import DetailSwiper from '../Detail/childcomps/detailSwiper'
import DetailBaseInfo from '../Detail/childcomps/detailBaseInfo'
import DetailShopInfo from '../Detail/childcomps/detailShopInfo'
import DetailGoodsInfo from '../Detail/childcomps/detailGoodsInfo'
import DetailParamInfo from '../Detail/childcomps/detailParamInfo'
import DetailCommentInfo from '../Detail/childcomps/detailCommentInfo'
import DetailBottomBar from '../Detail/childcomps/detailBottomBar'
import GoodsList from 'components/content/goods/GoodsList'

import Scroll from 'components/common/scroll/Scroll'
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail.js'
import {itemListenMixin, backTop} from 'common/mixin.js'

import { mapActions } from 'vuex'
  export default {
    name: 'Detail',
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        Recommends: [],
        skipPosition: [],
        currentIndex: 0
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    mixins: [itemListenMixin, backTop],
    created() {
      // 保存传入的iid
      this.iid = this.$route.query.iid
      // 获取数据
      getDetail(this.iid).then(res => {
        // console.log(res)
        const data = res.data.result
        //将轮播图数据保存
        this.topImages = data.itemInfo.topImages
        //将商品信息保存
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //将店铺信息保存
        this.shop = new Shop(data.shopInfo)
        //将商品详细信息保存
        this.detailInfo = data.detailInfo
        // 将商品参数信息保存
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // 将评论信息保存
        if (data.rate.list[0]) {
          this.commentInfo = data.rate.list[0];
        }
      })

      getRecommend().then(res => {
        this.Recommends = res.data.data.list
      })
    },
    destroyed() {
      //离开detail将事件总线的detail里的事件取消掉 不影响其他事件
      this.$bus.$off('itemImgLoad', this.itemImgLoadListen)
      // console.log('detail-全局事件取消')
    },
    methods: {
      ...mapActions(['addCart']),
      imgLoad() {
        this.$refs.scroll.refresh()
        // 获取导航栏跳转位置
        this.skipPosition = []
        this.skipPosition.push(0)
        this.skipPosition.push(this.$refs.param.$el.offsetTop)
        this.skipPosition.push(this.$refs.comment.$el.offsetTop)
        this.skipPosition.push(this.$refs.recommend.$el.offsetTop)
        this.skipPosition.push(Number.MAX_VALUE)
        // console.log(this.skipPosition)
      },
      titleClick(index) {
        // console.log(index)
        this.$refs.scroll.scrollTop(0, -this.skipPosition[index], 200)
      },
      NavBarScroll(position) {
        const positionY = -position.y
        for(let i = 0 ; i < this.skipPosition.length-1; i++) {
          if((this.currentIndex !== i) && (positionY >= this.skipPosition[i] && positionY < this.skipPosition[i+1])) {
            this.currentIndex = i
            this.$refs.detailNavBar.currentIndex = this.currentIndex
          }
        }
        //在y轴滚动超过1000则显示向上箭头
        this.showBackTop(position)
      },
      addToCart() {
        // 将商品需要的信息封装
        let product = {}
        product.iid = this.iid
        product.img = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc 
        product.price = this.goods.nowPrice
        product.checked = false

        // this.$store.dispatch('addCart', product).then(res => {
        //   console.log(res)
        // })

        //本质就是上面
        this.addCart(product).then(res => {
          console.log(res)
          this.$toast.show(res)
        })
      }
    }
  }
</script>

<style scoped>
  .detail-scroll {
    position: absolute;
    top: 44px;
    left: 0px;
    bottom: 49px;
    right: 0;
    z-index: 9;
    background-color: #fff;
  }
  .detail-navbar {
    background-color: white;
    position: relative;
    z-index: 10;
  }
</style>