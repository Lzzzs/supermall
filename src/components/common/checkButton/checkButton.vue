<template>
  <div>
      <img src="~/assets/img/cart/tick.svg" 
      :class="{'selector-active': isChecked, 'icon-selector': true}" 
      @click="checkClick">
  </div>
</template>

<script>
  export default {
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      checkClick() {
        this.$emit('checkClick')
      }
    }
  }
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>