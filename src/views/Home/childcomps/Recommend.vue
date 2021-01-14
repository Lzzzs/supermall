<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    padding-bottom: 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend img{
    width: 100%;
  }
  .recommend-item{
    padding: 5px;
  }
</style>