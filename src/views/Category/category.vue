<template>
  <div>
    <div class="content">
      <ul>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
        <li>100</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    mounted() {
    const bscroll = new BScroll(".content", {
        probeType: 3,
        pullUpLoad: true
      })
      bscroll.on('scroll', (position) => {
        console.log(position)
      })
    }
  }
</script>

<style scoped>
  .content {
    height: 200px;
    background-color: red;
  }
</style>