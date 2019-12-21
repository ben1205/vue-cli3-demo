import {scale} from '../../utils/rem.js'

// 电量水球图配置
export function liquidOpts(data) {
  let colorList = ['rgba(255, 0, 0, 1)', 'rgba(255, 255, 0, 1)', 'rgba(0, 255, 0, 1)']
  function getCol () {
    if (data.length < 1) return []
    if (data[0] <= 0.2) {
      return [colorList[0]]
    } else if (data[0] > 0.2 && data[0] < 0.6) {
      return [colorList[1]]
    } else {
      return [colorList[2]]
    }
  }
  return {
    series: [{
      type: 'liquidFill',
      data: data,
      color: getCol(),
      radius: '80%',
      outline: {
          show: false
      },
      grid:{
        x:50,
        y:50,
        x2:0,
        y2:0,
      },
      backgroundStyle: {
          color: 'rgba(255, 0, 0, 0.4)',
          // borderColor: 'rgba(255, 0, 0, 0.4)',
          // borderWidth: 1,
          shadowColor: 'rgba(255, 0, 0, 0.4)',
          shadowBlur: 30
      },
      label: {
          position: ['50%', '30%'],
          fontSize: 41 * scale(),
          color: '#ffffff'
      },
      itemStyle: {
        opacity: 0.6,
        // shadowBlur: 50,
        // shadowColor: 'rgba(0, 0, 0, 0.4)'
      },
      emphasis: {
          itemStyle: {
            opacity: 0.2
          }
      }
  }]
  }
}