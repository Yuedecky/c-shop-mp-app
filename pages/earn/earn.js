// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pendingCash: '234.45元',
    withDraw: '200元',

    earnMessages: [{
      "avatar": 'https://img13.360buyimg.com/mobilecms/s500x500_jfs/t1/78487/12/4673/124398/5d2da79aEc3564848/d9f771bbefb48c3e.jpg',
      "desc": "20分钟前完成0元购机￥2039",
      "name": "88**23",
      "id": 1002
    },
    {
      "avatar": 'https://img13.360buyimg.com/mobilecms/s500x500_jfs/t1/78487/12/4673/124398/5d2da79aEc3564848/d9f771bbefb48c3e.jpg',
      "desc": "1小时前下单购买了华为P30￥2039",
      "name": "158****1234",
      "id": 1302
    },
    {
      "avatar": 'https://img13.360buyimg.com/mobilecms/s500x500_jfs/t1/78487/12/4673/124398/5d2da79aEc3564848/d9f771bbefb48c3e.jpg',
      "desc": "1小时前分享了二维码",
      "name": "名***的",
      "id": 1301,
    }],

    qrCode: '/assets/images/qr-code.png',
    codeText: '扫一扫上面的二维码，和我一起赚钱',
    friends: [
      {
        tapDesc: '帮我赚了￥234',
        tapName: '张三',
        tapImage: 'https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg',
        date: '2019-01-01',
        showDetail: false
      },
      {
        tapDesc: '帮我赚了￥134',
        tapName: '李四',
        tapImage: 'https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg',
        date: '2019-05-01',
        showDetail: false
      }
    ]
  },
  onNewTabForRaider: function (e) {
    wx.navigateTo({
      url: '/pages/earn-raider/earn-raider',
    })
  },

  onShow: function () {
    // this.util();
  },


  onDraw: function () {
    console.log('onDraw')
    wx.navigateTo({
      url: "/pages/wallet/wallet"
    })
  },

  onRaider: function () {
    console.log("see raider")
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})