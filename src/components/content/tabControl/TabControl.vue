<template>
  <div id="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item"
     :class="{active: index == currentIndex}"
     @click="itemClick(index)" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        // 给父组件传数据
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  #tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    z-index: 9;
    /* 监听滑动滚动边fixed */
    position: sticky;
    top: 43px;
    background-color: #ffffff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 2px solid var(--color-tint);
  }
</style>