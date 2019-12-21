<template>
  <div id="app">
    <g-map></g-map>
    <sreach-bar></sreach-bar>
    <side-bar></side-bar>
    <title-header></title-header>
    <status-bar></status-bar>
    <charge-pop :remind="remind" :go="go" :show-pop="showPop"></charge-pop>
    <battery-pop :show-bat="showBatpop" :cancel="cancel" :got-it="gotIt"></battery-pop>
    <div id="loading">
      <van-overlay :show="true" />
      <van-loading size="24px" vertical>加载中...</van-loading>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import GMap from './components/g-map'
import SideBar from './components/side-bar/index'
import TitleHeader from './components/title-header/index'
import ChargePop from './components/charge-pop/index'
import BatteryPop from './components/battery-pop/index'
import SreachBar from './components/sreach-bar/index'
import StatusBar from './components/status-bar/index'

export default {
  name: 'app',
  components: {
    GMap,
    SideBar,
    TitleHeader,
    ChargePop,
    BatteryPop,
    SreachBar,
    StatusBar
    // HelloWorld
  },
  mounted () {
    this.$http.get('/api/getTest', {isShowLoading: false})
  },
  data () {
    return {
      showPop: false,
      showBatpop: false
    }
  },
  methods: {
    // 电量提示弹窗取消事件
    remind () {
      // console.log(2333)
      this.showPop = false
    },
    // 电量提示弹窗确认事件
    go () {
      this.showPop = false
    },
    // 充电桩弹窗确认事件
    gotIt () {
      // console.log(this.$refs)
      this.showBatpop = false
    },
    // 充电桩弹窗取消事件
    cancel () {
      this.showBatpop = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}
/*------------ 替换sreach内input字体颜色和背景色 ---------------*/
.van-search__content {
  background:rgba(29,99,163,.8);
}
.van-search__content .van-field__control{
  color:#ffffff;
}
@font-face {
  font-family: 'iconfont';
  src: url('./assets/iconfont/iconfont.ttf') format('truetype');
}

.pdu {
  font-family: 'iconfont';
}

.pdu-car::before {
  content: '\e739';
}

.pdu-battery::before {
  content: '\e737';
}

.pdu-distance::before {
  content: '\e73a';
}

div, a, ul, li, span, i, p, h2{
  padding: 0;
  margin: 0;
  font-style: normal;
  box-sizing:border-box;
}
a {
  text-decoration: none;
}
ul,li{
  list-style: none;
}
#loading{
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  z-index:99;
}
#loading>.van-loading{
  position: absolute;
  top:0;
  left:0;
  z-index: 2;
  padding-top: 25%;
  width: 100%;
}
</style>
