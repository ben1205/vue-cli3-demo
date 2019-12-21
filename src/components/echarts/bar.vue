<template>
  <e-charts :options="option" :style="{width: proWidth + 'px'}" :theme="theme"></e-charts>
</template>

<script>
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import Theme from '../../assets/chalk.json'

export default {
  name: 'bar',
  props: ['option', 'proWidth'],
  data () {
    return {
      theme: Theme
    }
  }
}
</script>

<style lang="stylus" scoped>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>