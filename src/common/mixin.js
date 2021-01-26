import { debounce } from 'common/utils.js'
import BackTop from 'components/content/backTop/BackTop'
export const itemListenMixin = {
  mounted() {
    const refresh =  debounce(this.$refs.scroll.refresh, 100)
    // 保存函数
    this.itemImgLoadListen = () => {
      refresh()
    }
     // 监听图片加载
    this.$bus.$on('itemImgLoad', this.itemImgLoadListen)
    // console.log('我是混入的')
  },
  data() {
    return {
      itemImgLoadListen: null
    }
  }
}

export const backTop = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backTop() {
      // 获取子组件对象调用方法
      this.$refs.scroll.scrollTop(0,0)
    },
    showBackTop(position) {
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}