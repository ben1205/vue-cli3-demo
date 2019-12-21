<template>
  <van-popup v-model="showBat" style="background:transparent;" :close-on-click-overlay="false">
    <div class="battery">
      <div class="battery_list">
        <p>
          <van-icon v-for="item in batList" :key="item.id" class-prefix="pdu" name="car" :color="setColor(item.status)" @click="barClk"/>
        </p>
      </div>
      <div class="time_check">

      </div>
      <div>
        <van-button color="#505C67" size="small" class="mar30" @click="cancel">取消</van-button>
        <van-button color="#159E1C" size="small" @click="gotIt">确认</van-button>
      </div>
    </div>
  </van-popup>
</template>

<script>
export default {
  name: 'battery-pop',
  props: ['showBat', 'cancel', 'gotIt'],
  data () {
    return {
      batList: [{id: 1, status: 0}, {id: 2, status: 1}],
    }
  },
  methods: {
    // 根据充电桩状态返回不同颜色
    setColor (status) {
      return status == 1 ? '#9ED8F7' : '#505C67'
    },
    // 充电桩点击触发
    barClk () {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .battery {
    width 330px
    height 320px
    background #ccc
    text-align center
    .time_check {
      width 100%
      height 60px
    }
    .battery_list {
      display flex
      justify-content center
      width 100%
      height 30px
      &>i{
        margin 0 10px
      }
    }
  }
</style>