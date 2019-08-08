const wechat = require('./utils/wechat.js')
const baidu = require('./utils/baidu.js')
//app.js
App({
  appData: {
    logoUrl: 'http://image.qfstatic.com/897/2019/201904/20190429/8D5C9103C78643A190513340FA3FA294.jpeg',
    logoName: '聚客数码',
    version: '0.1',
    currentCity: '北京',
    userInfo: {}
  },
  wechat: wechat,
  baidu: baidu,


  

  /**
   * 先调用wx.login，获取code
   */
  onLaunch: function () {
    let _this = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.setStorageSync('code', res.code)
          
        } else {
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: '获取用户登录信息失败'
          })
        }
      }
    })
  }
})