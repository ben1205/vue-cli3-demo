

const store = {
  debug: false,
  state: {
    message: 'Hello!',
    map: {}, // 地图实例
    potList: [{lng: 116.404, lat: 39.915},{lng: 116.400, lat: 39.800},{lng: 116.400, lat: 39.900}], // 点集合
    pathList: [ 
    ]
  },
  setAction (data) {
    let _key = Object.keys(data)[0]
    // if (this.debug) console.log('setMessageAction triggered with', data[_key])
    this.state[_key] = data[_key]
  },
  clearMessageAction () {
    // if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}

export default store