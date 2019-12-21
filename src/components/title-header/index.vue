<template>
  <div class="header_title">
    <img :src="require('../../assets/top-bg.png')" alt="" class="top_img" />
    <ul class="board">
      <li>
        <van-icon class-prefix="pdu" name="battery" color="#ff0000"/>
        <span>电池容量10%</span>
      </li>
      <li>
        <van-icon class-prefix="pdu" name="distance" color="#17E71C"/>
        <span>可行驶里程20KM</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import topImg from '../../assets/top-bg.png'

export default {
  name: 'title-header',
  data () {
    return {
      iconColor: '#9ED8F7'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header_title {
    position absolute
    display flex
    justify-content space-around
    top 0
    left 0
    width 100%
    height 71px
    background #000
    .top_img{
      width 607px
      height 100%
    }
    .board {
      display flex
      padding 5px 0
      &>li{
        display flex
        flex-direction column
        text-align center
        padding-right 18px
        span{
          font-size 10px
          color #9AB7C2
        }
      }
    }
  }
</style>