<template>
  <van-popup v-model="showPop" style="background:transparent;" :close-on-click-overlay="false">
    <div class="charge">
      <div class="liquid">
        <liquid :option="setOpts([0.2])"></liquid>
      </div>
      <p>电量剩余21%，可行驶路程20KM，请尽快充电</p>
      <div>
        <van-button color="#505C67" size="small" class="mar30" @click="remindClk">稍后提醒</van-button>
        <van-button color="#159E1C" size="small" @click="goClk">前往充电</van-button>
      </div>
    </div>
  </van-popup>
</template>

<script>
import Liquid from '../echarts/liquid'
import {liquidOpts} from './options.js'

export default {
  name: 'charge-pop',
  props: ['remind', 'go', 'showPop'],
  components: {
    Liquid
  },
  methods: {
    // 设置echarts配置
    setOpts (data) {
      return liquidOpts(data)
    },
    // 稍后提醒点击触发
    remindClk () {
      // console.log('稍后提醒')
      this.remind()
    },
    // 前往充电点击触发
    goClk () {
      this.go()
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  .charge{
    width 330px
    height 320px
    text-align center
    &>.liquid{
      width 319px
      height 228px
    }
    &>p{
      color #ffffff
      font-size 12px
    }
    .mar30{
      margin-right 30px
    }
  }
</style>