Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconImage: '/assets/images/icon-money.png',
    walletMoneyCount: 342.23,
    activationCount: 200,
    detailDisabled: false,
    withDrawDisabled: false,
    popup: '',
  },

  viewDetail: function (e) {
    let that = this;
    that.setData({
      viewDetail: true
    })
    let uid = e.currentTarget.dataset.uid;
    wx.navigateTo({
      url: '/pages/wallet/detail/detail?uid=' + uid,
    })
  },

  withdraw: function (e) {
    let that = this
    that.setData({
      withDrawDisabled: true
    })
    let uid = e.currentTarget.dataset.uid;
    wx.navigateTo({
      url: '/pages/wallet/with-draw/with-draw?uid=' + uid,
    })
  },

  /**
   * 点击查看激活方法
   */
  onViewActivate: function (e) {
    console.log(e);
    this.popup.show();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.popup = this.selectComponent('#popup')
  },

  /**
   * 取消
   */
  popupCancel: function (e) {
    this.popup.hide()
  },
  /**
   * 确认
   */
  popupConfirm: function (e) {
    console.log('popup confirm..e:', e)
    wx.switchTab({
      url: '/pages/earn/earn',
      success: function (e) {
        console.log(e)
      },
      fail: function (e) {
        console.error(e)
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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