<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    methods: {
      scrollTop(x,y,time=500) {
        this.scroll.scrollTo(x,y,time)
      },
      refresh() {
        this.scroll.refresh()
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })
      this.scroll.on('scroll', (position) => {
        // 将position传入父组件
        this.$emit('Position',position)
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('load')
        setTimeout(() => {
          this.scroll.finishPullUp()
        },2000)
      })
    }
  }
</script>

<style scoped>

</style>