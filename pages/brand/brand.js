Page({

  /**
   * 页面的初始数据
   */
  data: {
    brandName: '',
    brandPhones: [{
      name: 'iphoneX',
      tags: [
        '64G', '4.7英寸', '1200W'
      ],
      gifts: [
        '免费贴膜', '赠手机壳', '免费教程',
      ],
      officalPrice: '2345.23',
      reservationPrice: '2000',
      goodRatings: '87%',
      image: 'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
      productId: 1222
    },
    {
      name: 'iphoneX',
      tags: [
        '64G', '4.7英寸', '1200W'
      ],
      gifts: [
        '免费贴膜', '赠手机壳', '免费教程',
      ],
      officalPrice: '2345.23',
      reservationPrice: '2000',
      goodRatings: '87%',
      image: 'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
      productId: 1224
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      brandName: options.brandName
    });
    wx.setNavigationBarTitle({
      title: that.data.brandName
    });
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

  onPhoneTab:function(e){
    let phoneId = e.currentTarget.dataset.phoneId;
    console.log(`phoneId:${phoneId}`)
    wx.navigateTo({
      url: '/pages/phone-detail/phone-detail?phoneId='+phoneId,
    })
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