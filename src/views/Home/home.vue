<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">ktt的商城</div>
    </nav-bar>
    <tab-control :titles = "['流行','新款','精选']" @tabClick=tabClick ref="tabControl2" class="tabControl" v-show="isFixed" />
    <scroll class="content" 
    ref="scroll" :probe-type=3 
    @Position=backTopPosition 
    @load="load"
    :pullUpLoad=true>
      <home-swiper :banner = banner @loadSwiperImgage="loadSwiperImgage"></home-swiper>
      <recommend :recommends = recommend></recommend>
      <feature />
      <tab-control :titles = "['流行','新款','精选']" @tabClick=tabClick ref="tabControl1" />
      <goods-list :goods = showGoods></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childcomps/HomeSwiper'
import Recommend from './childcomps/Recommend'
import Feature from './childcomps/Feature'

import {getHomemMultidata,getHomeGoods} from 'network/home.js'
import { debounce } from 'common/utils.js'

  export default {
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        TabControlOffsetTop: 0,
        isFixed: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    components: {
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
      HomeSwiper,
      Recommend,
      Feature
    },
    created() {
      // 请求页面布局数据
      this.getHomemMultidata()
      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      const refresh =  debounce(this.$refs.scroll.refresh, 100)
      // 监听图片加载
      this.$bus.$on('itemImgLoad', () => {
       refresh()
      })
    },
    activated() {
      //将位置移动至上一次离开的位置
      this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
      //执行刷新操作,把位置刷新一次
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 离开home保存位置
      this.saveY = this.$refs.scroll.getSavaY()
    },
    methods: {
      /*
      * 定义的方法
      */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = "pop";
            break;
          case 1:
            this.currentType = "new";
            break;
          case 2:
            this.currentType = "sell";
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backTop() {
        // 获取子组件对象调用方法
        this.$refs.scroll.scrollTop(0,0)
      },
      backTopPosition(position) {
        //在y轴滚动超过1000则显示向上箭头
        this.isShowBackTop = (-position.y) > 1000

        //判断是否吸顶
        this.isFixed = (-position.y) >  this.TabControlOffsetTop
      },
      load() {
        this.getHomeGoods(this.currentType)
      },
      loadSwiperImgage() {
        //获取tabControl的offsetTop
        this.TabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop
      },
       /*
      * 网络请求的方法
      */
      getHomemMultidata() {
        getHomemMultidata().then(res => {
          // 获取请求的数据
          this.banner = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        })
      },
      getHomeGoods(type) {
        //page作为参数,传入方法
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          // console.log(res.data.data.list)
          //获取data里面的数组,然后将请求的新数组插入data里面的数组中,...是将数据解析
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    z-index: 9;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }
  .tabControl {
    position: relative;
    z-index: 9;
  }
</style>