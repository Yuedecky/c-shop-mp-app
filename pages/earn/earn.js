// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qrCode: '/assets/images/qr-code.png',
    codeText: '扫一扫上面的二维码，和我一起赚钱',
    msgList:[
      {
        uid: '2324343fre',
        wxAvatar: 'https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg',
        wxName: 'broad',
        money: 34
      },
      {
        uid: '666',
        wxAvatar: 'https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg',
        wxName: 'forkers',
        money: 35
      }
    ],
    friends:[
      {
        tapDesc: '帮我赚了￥234',
        tapName: '张三',
        tapImage: 'https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg',
        date: '2019-01-01',
        showDetail:false
      },
      {
        tapDesc: '帮我赚了￥134',
        tapName: '李四',
        tapImage: 'https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg',
        date: '2019-05-01',
        showDetail:false
      }
    ]
  },
  onNewTabForRaider:function(e){
    wx.navigateTo({
      url: '/pages/earn-raider/earn-raider',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setBackgroundColor({
      backgroundColor: '#999'
    })
    // let that = this;
    // that.setData({
    //   qrCode: options.qrCode
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let app = getApp()
  },

  


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})