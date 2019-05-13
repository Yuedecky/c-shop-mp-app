// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wallet:{
      tapName: '钱包',
      tapImage: '/assets/images/wallet.png',
      tapDesc: '￥342',
      showDetail:true,
      customerImage: '/assets/images/more-gray.png'
    },
    reservation:{
      tapName: '预约单',
      tapImage: '/assets/images/clock.png',
      tapDesc: '',
      showDetail:true,
      customerImage: '/assets/images/more-gray.png'
    },
    contactUs:{
      tapName: '联系客服',
      tapImage:'/assets/images/contact-us.png',
      showDetail: true,
      customerImage: '/assets/images/contact-us-phone.png'
    },
    cooperation:{
        tapName: '商务合作',
        tapImage: '/assets/images/icon_cooperation.png',
        showDetail: true,
      customerImage: '/assets/images/more-gray.png'
    },
    aboutUs:{
      tapName: '关于我们',
      tapImage: '/assets/images/about-us.png',
      showDetail: true,
      customerImage:'/assets/images/more-gray.png'
    },
    meAvatar: 'https://storage.360buyimg.com/i.imageUpload/65646c6967687431343332303832323134343731_sma.jpg',
    meName: 'broad',
    uid:'233',

  },

  onMyWalletOpen:function(e){
    let that = this;
    let uid = e.currentTarget.dataset.uid;
    wx.navigateTo({
      url: '/pages/wallet/wallet?uid='+uid,
    })
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