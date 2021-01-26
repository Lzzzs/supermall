<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, delay=1000) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.message = ''
          this.isShow = false
        }, delay)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    border-radius: 8px;
  }
  .toast div {
    padding: 10px;
  }
</style>