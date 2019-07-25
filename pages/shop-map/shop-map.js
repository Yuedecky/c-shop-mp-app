// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../assets/lib/bmap.min.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    rgcData: {}
  },
  makertap: function (e) {
    var that = this;
    var id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
  },
  onLoad: function (options) {
    var that = this;
    console.log('options:',options)
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'LZqv7xUal4vRKsF6GrkSuB8gmw6fefX5'
    });
    var fail = function (data) {
      console.log(data)
    };
    that.setData({
      latitude: options.latitude,
      longitude: options.longitude
    })
   
    var success = function (data) {
      console.log('success,data:',data)
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude:wxMarkerData[0].longitude
      });
    }
    // 发起regeocoding检索请求 
    BMap.regeocoding({
      // location: that.data.latitude+','+that.data.longitude,
      fail: fail,
      success: success,
      iconPath: '/assets/images/marker_red.png',
      iconTapPath: '/assets/images/marker_red.png'
    });
  },
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      rgcData: {
        address: data[i].address,
        desc:  data[i].desc,
      }
    });
  }

})