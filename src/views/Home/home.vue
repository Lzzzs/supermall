<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner = banner></home-swiper>
    <recommend :recommends = recommend></recommend>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childcomps/HomeSwiper'
import Recommend from './childcomps/Recommend'

import {getHomemMultidata} from 'network/home.js'



  export default {
    data() {
      return {
        banner: [],
        recommend: []
      }
    },
    components: { 
      NavBar,
      HomeSwiper,
      Recommend 
    },
    created() {
      getHomemMultidata().then(res => {
        // 获取请求的数据
        this.banner = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>