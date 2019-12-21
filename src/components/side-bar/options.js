import {scale} from '../../utils/rem.js'

// 日均充电次数分布图配置
export function dayChargeTimeOpts (data) {
  return {
    title: {
      text: '日均充电次数分布',
      top: 0,
      left: 10,
      textStyle: {
        fontSize: 12 * scale()
      }
    },
    grid:{
      x: 20,
      y: 20,
      x2: 10,
      y2: 20
    },
    xAxis: {
      type: 'category',
      axisLine:{show: false},
      axisLabel: {
        fontSize: 8 * scale()
      }
    },
    yAxis: {
      type: 'value',
      axisLine:{show: false},
      axisLabel: {
        fontSize: 8 * scale()
      }
    },
    series: [{
      type: 'bar',
      data: data,
      barWidth: '10%'
    }]
  }
}