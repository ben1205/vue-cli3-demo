<template>
  <bm-overlay
    ref="customOverlay"
    :class="{sample: true, active}"
    pane="labelPane"
    @draw="draw">
    <!-- <div v-text="text" @click="handleClick" style="color:red;"></div> -->
    <slot></slot>
  </bm-overlay>
</template>

<script>
import BmOverlay from 'vue-baidu-map/components/overlays/Overlay'

export default {
  components:{
    BmOverlay
  },
  props: ['text', 'position', 'active'],
  watch: {
    position: {
      handler () {
        // console.log(555)
        this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  methods: {
    handleClick () {
      global.alert('Well done.')
    },
    draw ({el, BMap, map}) {
      const {lng, lat, rotate} = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.transform = `rotate(${rotate}deg)`
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    }
  }
}
</script>

<style>
.sample {
  width: 20px;
  height: 20px;
  position:absolute;
  transition-property: top,left;
  transition-duration: 2s;
  transition-timing-function: linear;
}
.sample.active {
  color: #fff;
}
</style>