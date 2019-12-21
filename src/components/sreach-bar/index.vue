<template>
  <div class="search_bar">
    <van-search
      v-model="searchVal"
      placeholder="请输入搜索内容"
      background="transparent"
      :left-icon="null"
      @search="onSearch"
      style="padding: 0;flex: 1 1 auto;"
    >
    </van-search>
    <div @click="onSearch" class="btn">搜索</div>
    <ul class="down_drop" v-show="dropShow">
      <li v-for="item in downSearch" :key="item"><p>{{item}}</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchVal: '',
      dropShow: false,
      downSearch: ['阿斯达', '阿萨达', '是打算大']
    }
  },
  methods: {
    // 搜索触发事件
    onSearch () {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .search_bar {
    position absolute
    display flex
    left 60px
    top 87px
    width 266px
    height 34px
    border 1px solid #2684DA
    .down_drop {
      position absolute
      top 34px
      left 0
      width 266px
      height 124px
      overflow-y scroll
      &>li{
        width 100%
        background #113B56
        color #9ED8F7
        font-size 12px
        line-height 31px
        padding 0 14px
        p{
          width 100%
          border-bottom 1px solid #9ED8F7
        }
        &:last-child{
          &>p{
            border-style none
          }
        }
        &:hover{
          background #032338
        }
      }
    }
    .btn{
      width 46px
      line-height 34px
      color #ffffff
      font-size 12px
      text-align center
      background:linear-gradient(90deg,rgba(80,44,230,1),rgba(13,105,191,1));
    }
  }
</style>