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
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      refresh() {
        console.log('refresh函数被执行')
        this.scroll && this.scroll.refresh()
      },
      getSavaY() {
        return this.scroll ? this.scroll.y : 0
        // console.log(this.scroll.y)
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })

      if(this.probeType == 2 || this.probeType == 3){
        this.scroll.on('scroll', (position) => {
          // 将position传入父组件
          this.$emit('Position',position)
        })
      }

      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('load')
          setTimeout(() => {
            this.scroll.finishPullUp()
          },2000)
        })
      }
    }
  }
</script>

<style scoped>

</style>