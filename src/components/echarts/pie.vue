<template>
  <e-charts :options="option" :theme="theme"></e-charts>
</template>

<script>
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import Theme from '../../assets/chalk.json'

export default {
  name: 'pie',
  props: ['option'],
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