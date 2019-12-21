<template>
  <e-charts :options="option"></e-charts>
</template>

<script>
import 'echarts-liquidfill'

export default {
  name: 'liquid',
  props: ['option']
}
</script>

<style lang="stylus" scoped>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>