<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="navbar-center">
        <div v-for="(item,index) in titles" 
        class="navbar-center-item" 
        :class="{active: currentIndex == index }"  
        @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
  export default {
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.back()
      }
    },
    components: { 
      NavBar 
    }
  }
</script>

<style scoped>
  .navbar-center {
    display: flex;
    font-size: 13px;
  }
  .navbar-center-item {
    flex: 1;
  }
  .back {
    margin-top: 6px;
    text-align: center;
  }
  .active {
    color: var(--color-high-text);
  }
</style>