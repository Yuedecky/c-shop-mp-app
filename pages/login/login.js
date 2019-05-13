const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logoName: '',
    logoUrl: '',
    disabled: false
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.setData({
      logoName: app.appData.logoName,
      logoUrl: app.appData.logoUrl
    })
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
    wx.hideTabBar({
      
    })
  },

/**
 * 获取用户的手机号
 */
  getPhoneNumber:function(e){
    let that = this;
    that.setData({disabled:true});
    if (e.detail.errMsg == 'getPhoneNumber: fail user deny'){
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '未授权',  
        success:function(res){
          //todo
        }
      });
      that.setData({
        disabled:false
      })
    }else{
      //todo -- 请求后端接口
      // wx.request({
      //   url: 'http://localhost:8080/wx/registerPhone',
      //   method: 'POST',
      //   data: {
      //       encryptedData: e.detail.encryptedData,
      //       iv: e.detail.iv,
      //   },
      //   success:function(res){
      //       wx.navigateTo({
      //         url: '../index/index',
      //       })
      //   }
      // })
      wx.switchTab({
        url: '../index/index',
        success:function(){

        },
        fail:function(e){
          console.log(e)
        }
      })
    }
    

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