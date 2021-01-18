<template>
  <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="loadImgage">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
  export default {
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem 
    },
    methods: {
      loadImgage() {
        if(!this.isLoad){
          // 监听轮播图图片加载
          this.$emit('loadSwiperImgage')
          this.isLoad = true;
        }
      }
    }
  }
</script>

<style scoped>

</style>