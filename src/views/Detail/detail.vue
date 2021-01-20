<template>
  <div class="detail">
    <detail-nav-bar class="detail-navbar" />
    <scroll class="detail-scroll" ref="scroll">
      <detail-swiper :topImages=topImages />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :param-info="paramInfo" />
      <detail-comment-info :comment-info="commentInfo"/>
    </scroll>
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

import Scroll from 'components/common/scroll/Scroll'
import {getDetail, Goods, Shop, GoodsParam} from 'network/detail.js'

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
        commentInfo: {}
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
      DetailCommentInfo
    },
    created() {
      // 保存传入的iid
      this.iid = this.$route.query.iid
      // 获取数据
      getDetail(this.iid).then(res => {
        console.log(res)
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
    },
    methods: {
      imgLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  .detail-scroll {
    position: absolute;
    top: 44px;
    left: 0px;
    bottom: 0px;
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