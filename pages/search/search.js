Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    historySearchValues:[]
  },
  onSearch:function(e){
    let that = this;
    var searchValue = this.data.value;
    //判断_val是否在数组中
    if (this.data.historySearchValues.indexOf(searchValue) != -1) {
      //是 不做任何操作
      return null;
    } else {
      //否，把_val push到arr2中
      this.data.historySearchValues.push(searchValue);
    };
    wx.setStorageSync('searchValues', that.data.historySearchValues)
  },
  onCancel:function(e){
    wx.navigateBack({
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'recentSearch',
      success: function (res) {
        for (let i in res.data) {
          that.data.historySearchValues.push(res.data[i])
        };
      }
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