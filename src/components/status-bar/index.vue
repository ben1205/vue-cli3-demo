<template>
  <div class="status" id="status-box">
    <p v-for="item in statusList" :key="item"><i></i>{{item}}</p>
    <van-icon :name="require('../../assets/more.svg')" class="more" @click="showMore"></van-icon>
  </div>
</template>

<script>
// import {scale} from '../../utils/rem.js'

export default {
  name:'status',
  data () {
    return {
      statusList: [12,231,3213,31,3333]
    }
  },
  methods:{
    showMore () {
      const statusbox = document.getElementById('status-box')
      statusbox.style.height = `350px`
      statusbox.style.overflowY = 'scroll'
    }
  }
}
</script>

<style lang="stylus" scoped>
.status{
  position absolute
  top 90px
  right 19px
  width 153px
  height 175px
  z-index 3
  background rgba(5,23,34,1)
  border 1px solid rgba(25, 84, 137, 1)
  border-radius 3px
  transition all 1s
  overflow hidden
  .more {
    position absolute
    bottom 0
    left 0
    width 100%
    line-height 30px
    text-align center
  }
  &>p{
    i{
      display inline-block
      width 20px
      height 20px
      vertical-align middle
      background red
      margin 0 10px
    }
    font-size 12px
    color #9AB7C2
    border-bottom 1px solid #195489
    line-height 30px
  }
}
</style>