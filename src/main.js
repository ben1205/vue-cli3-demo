import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import ECharts from 'vue-echarts'
// import BaiduMap from 'vue-baidu-map'
import http from './fetch/index'
import store from './store/store.js'
import {Loading, Overlay, Icon, Search, Swipe, SwipeItem, Popup, Button} from 'vant'

Vue.prototype.$http = http; //全局绑定axios封装方法
Vue.component('e-charts', ECharts) // echarts全局引入
Vue.prototype.$store = store
// Vue.use(BaiduMap, {ak: 'B4Ai13hGcpI6EroRcWZI9Hiy1tWKMTmo'}) // 百度地图引入
Vue.use(Loading)
Vue.use(Overlay)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Popup)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  // store,
  render: h => h(App)
}).$mount('#app')
