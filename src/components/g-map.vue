<template>
  <div class="g_map">
    <baidu-map class="map" ref="Map" :center="center" :zoom="zoom" @ready="handler" :map-click="false" ak="B4Ai13hGcpI6EroRcWZI9Hiy1tWKMTmo">
      <div v-for="(item, key) in potArr" :key="key">
        <end-overlay
          :position="item"
          text="123"
          :active="active"
          @mouseover.native="active = true"
          @mouseleave.native="active = false">
        </end-overlay>
      </div>
      <end-overlay
          :position="carPath"
          text="123"
          :active="active"
          @mouseover.native="active = true"
          @mouseleave.native="active = false">
          <img :src="require('../assets/icon_car.png')" alt="">
        </end-overlay>
      <bml-lushu
        @stop="reset"
        @pause="pause"
        :path="drivePath"
        :icon="icon"
        :play="play"
        :speed="400"
        :rotation="true"
        :content="getContent()"
        >
      </bml-lushu>
      <div v-for="(item, key) in pathArr" :key="key + 'ben'">
        <bm-polyline 
        :path="item" 
        stroke-color="yellow" 
        :stroke-opacity="1" 
        :stroke-weight="2" 
        :editing="true" 
        @lineupdate="updatePolylinePath">
      </bm-polyline>
      </div>
    </baidu-map>
    <div style="position:absolute;top:50px;left:50px;background:red;width:20px;height:20px;z-index:99;" @click="move"></div>
  </div> 
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import EndOverlay from '../components/mapmaker/map-maker'
import BmlLushu from 'vue-baidu-map/components/extra/Lushu'
import BmPolyline from 'vue-baidu-map/components/overlays/Polyline'
// import carIcon from '../assets/icon_car.png'
// import 'vue-baidu-map/components/overlays'
// import CarInfo from '../components/car-info/index'
// import {BmlMarkerClusterer} from 'vue-baidu-map/components/map/Map.vue'

export default Vue.extend({
  name: 'g-map',
  components: {
    BmPolyline,
    BaiduMap,
    EndOverlay,
    BmlLushu
  },
  data () {
    const {potList} = this.$store.state
    return {
      center: {lng: 0, lat: 0},
      active: false,
      zoom: 3,
      potArr: potList,
      carPath: {lng: 116.550, lat: 39.910},
      play: true,
      path: [],
      pathArr: [],
      drivePath: [{lng: 116.404, lat: 39.915},{lng: 116.400, lat: 39.900},{lng: 116.400, lat: 39.800}],
      icon: {
        url: require('../assets/icon_car.png'),
        size: {width: 52, height: 26},
        opts: {anchor: {width: 27, height:13}}
      }
    }
  },
  mounted () {
  },
  methods: {
    move () {
      const that = this
      const path = [{lng: 116.550, lat: 39.910, rotate: '0'}, {lng: 116.630, lat: 39.910, rotate: '0'}, {lng: 116.630, lat: 39.810, rotate: '90'}]
      this.path = path
      this.pathArr = [[{lng: 116.550, lat: 39.910},{lng: 116.550, lat: 39.810}], [{lng: 116.450, lat: 39.910},{lng: 116.650, lat: 39.910}]]
      this.carPath = path[0]
      let i = 0
      let timer
      if (!timer) {
        timer= setInterval (function () {
          if (i < path.length) {
            // console.log(i)
            that.carPath = path[i++]
          } else {
            clearInterval(timer)
          }
        }, 1000)
      } else {
        clearInterval(timer)
      }
    },
    getContent () {
      // console.log(this)
      return '<h1>123</h1>'
    },
    updatePolylinePath() {
      // this.$nextTick(function () {
        
      // })
    },
    reset () {
      this.play = false
    },
    pause () {
      // console.log(status)
      this.play = false
    },
    fetchApi () {
      // if (this.play) this.reset()
      this.$store.setAction({'potList': [{lng: 116.400, lat: 39.915}]});
      // this.$store.setAction({'pathList':[{lng: 116.404, lat: 39.915},{lng: 116.400, lat: 39.900},{lng: 116.400, lat: 39.800}]});
      // this.$nextTick(function () {
      //   this.potArr = this.$store.state.potList
      //   this.path = this.$store.state.pathList
      //   this.drivePath = this.$store.state.pathList
      //   this.play = true
      // })
      // this.$nextTick(function () {
      //   console.log(this.$store.state.map)
      //   // this.$store.state.map
      //   console.log(2333)
      // })
      // console.log(this.$http.get('',{isShowLoading:false}).then((val) => console.log(val)))
      // this.$http.get('/api/getTest', {params: {}, isShowLoading: false})
      // console.log(_a)
    },
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 12
      this.$store.setAction({map: this})
      map.setMapStyleV2({     
        styleId: '70383a1fc93cf7df950c2f6447b09187'
      });
    }
  }
})
</script>

<style lang="stylus" scoped>
    .g_map,.map{
      position relative
      width 100%
      height 100%
    }
</style>