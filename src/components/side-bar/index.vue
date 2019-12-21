<template>
  <div class="side_bar" id="sider">
    <div class="btn_tabs" v-if="showBtn">
      <van-icon class-prefix="pdu" name="car" :color="iconColor"/>
      <van-icon class-prefix="pdu" name="car" :color="iconColor" @click="barClk"/>
      <van-icon name="warning" color="#FF0000" class="warning"/>
    </div>
    <div class="charts_tabs" v-else>
      <div class="closeBtn" @click="barClk">
        <van-icon name="arrow-left" :color="iconColor" size="20px"/>
      </div>
      <!-- 数据看板 -->
      <div class="container">
        <div class="box">
          <van-icon class-prefix="pdu" name="car" color="#FFDB5C" size="28px"/>
          <p>
            <span>总里程0.8km</span>
            <span>出行次数20/10天</span>
          </p>
        </div>
        <div class="box">
          <van-icon class-prefix="pdu" name="car" color="#FFDB5C" size="28px"/>
          <p>
            <span>总里程0.8km</span>
            <span>出行次数20/10天</span>
            <span>出行次数20/10天</span>
          </p>
        </div>
      </div>
      <!-- 充电偏好 -->
      <div class="container">
        <h2>充电偏好</h2>
        <van-swipe :autoplay="3000" :show-indicators="false" :height="72" :width="204">
          <van-swipe-item>
            <ec-bar :option="setChart(1, [['1', '4'], ['2', '3']])" :pro-width="204"></ec-bar>
          </van-swipe-item>
          <van-swipe-item>
            <ec-bar :option="setChart(1, [['1', '2'], ['2', '3']])" :pro-width="204"></ec-bar>
          </van-swipe-item>
          <van-swipe-item>
            <ec-bar :option="setChart(1, [['1', '2'], ['2', '3']])" :pro-width="204"></ec-bar>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 出行习惯 -->
      <div class="container">
        <h2>出行习惯</h2>
        <div class="content">
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- 驾驶习惯 -->
      <div class="container">
        <h2>驾驶习惯</h2>
        <div class="content">
          <div></div>
          <div></div>
        </div>
        <div class="big_chart"></div>
      </div>
      <!-- 车辆健康 -->
      <div class="container">
        <h2>车辆健康</h2>
        <div class="big_chart"></div>
        <div class="big_chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {scale} from '../../utils/rem.js'
import EcBar from '../echarts/bar'
import {dayChargeTimeOpts} from './options.js'

export default {
  name: 'side-bar',
  components : {
    EcBar
  },
  data () {
    return {
      showBtn: true,
      iconColor: '#9ED8F7'
    }
  },
  methods:{
    // 设置图标配置
    setChart (type, data) {
      switch (type) {
        case 1:
          return dayChargeTimeOpts(data)
        default:
          break
      } 
    },
    // 展开按钮点击触发
    barClk () {
      document.getElementById('sider').style.width = this.showBtn ? `${228 * scale()}px` : `${41 * scale()}px`
      document.getElementById('sider').style.background = this.showBtn ? `#000` : `#113B56`
      this.showBtn = !this.showBtn
    }
  }
}
</script>

<style lang="stylus" scoped>
  .side_bar{
    position absolute
    transition all 1s
    left 0
    top 71px
    width 41px
    height 542px
    background:#113B56;
    text-align center
    padding 10px 0
    z-index 3
    .btn_tabs {
      display flex
      flex-direction column
      .warning {
        position absolute
        bottom 20px
        left 12px
        font-size 20px
      }
    }
    .charts_tabs{
      // position relative
      display flex
      flex-direction column
      align-items center
      padding 30px 0
      height 542px
      overflow-y scroll
      .closeBtn {
        position absolute
        top 5px
        right 5px
        width 20px
        height 20px
      }
      .container {
        width 204px
        background #0A2E48
        padding 5px 10px
        boder-radius 6px
        margin-bottom 10px
        .big_chart{
          width 100%
          height 100px
          padding 5px 0
        }
        .content {
          display flex
          width 100%
          height 82px
          padding 5px 0
          &>div{
            &:first-child{
              background red
            }
            flex 1 1 auto
            background blue
          }
        }
        &>h2{
          text-align left
          font-size 14px
          color #D6EEFF
          padding-bottom 5px 
        }
        .box{
          width 100
          display flex
          align-items center
          &:first-child{
            margin-bottom 15px
          }
          &>i{
            width 30px
            height 30px
            border 1px solid #6DB6EA
            border-radius 4px
            margin 0 14px 0 0
          }
          &>p{
            display flex
            flex-direction column
            span{
              flex 1 1 auto
              font-size 10px
              font-weight:400;
              text-align center
              color #6DB6EA
            }
          }
        }
      }
    }
  }
</style>