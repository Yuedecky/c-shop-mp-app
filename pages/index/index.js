//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    adv: {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      images: ['http://image.qfstatic.com/897/2019/201904/20190429/B2B26304B53C46FCA377A485E5F65136.jpg',
        'http://image.qfstatic.com/897/2019/201904/20190429/C5C2CB8B4C1143D7AB90E480409453F9.jpg',
        'http://image.qfstatic.com/897/2019/201904/20190429/540F3242232C40C7A21C67E589375BF6.jpg']
    },
    userPosition: '',
    shop: {
      location: '上海市浦东新区122号',
      name: '聚客数码浦东新区店',
      times: 3921,
      distance: 0.2,
      photo: 'http://image.qfstatic.com/897/2019/201904/20190429/8D5C9103C78643A190513340FA3FA294.jpeg',
      latitude: 121.460231,
      longitude: 31.234129
    },
    hotPhones: [
      {
        id: 1,
        name: '三星',
        tags: [
          '8G', '5.5英寸'
        ],
        image: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/27996/22/8174/205185/5c74b083E4802f963/8fcb5a40d337d292.jpg',
        "price": '￥3456.23'
      },
      {
        id: 2,
        name: "iphone X",
        tags: [
          '8G', '5.5英寸'
        ],
        image: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/27996/22/8174/205185/5c74b083E4802f963/8fcb5a40d337d292.jpg',
        price: '￥2312.23'
      },
      {
        id: 3,
        name: '三星',
        tags: [
          '8G', '5.5英寸'
        ],
        image: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/27996/22/8174/205185/5c74b083E4802f963/8fcb5a40d337d292.jpg',
        price: '￥2345.23'
      },
      {
        id: 4,
        name: '三星',
        tags: [
          '8G', '5.5英寸'
        ],
        image: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/27996/22/8174/205185/5c74b083E4802f963/8fcb5a40d337d292.jpg',
        price: '￥2345.23'
      }
    ],
    bang: [
      {
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
      },
      {
        "avatar": 'https://img13.360buyimg.com/mobilecms/s500x500_jfs/t1/78487/12/4673/124398/5d2da79aEc3564848/d9f771bbefb48c3e.jpg',
        "desc": "1小时前分享了二维码",
        "name": "名***的",
        "id": 1304,
      }
    ],
    active: 0,
    shopActive: -1,
    doorActive: -1,
    doorSteps: [{
      text: '步骤一',
      desc: '选择任意1～3款机型'
    },
    {
      text: '步骤二',
      desc: '填写上门信息,预约上门时间'
    },
    {
      text: '步骤三',
      desc: '门店人员免费上门讲解，您可以挑选任意一款或者多款体验后选择参加0元购活动'
    }],
    shopSteps: [{
      text: '步骤一',
      desc: '选择您附近的门店'
    },
    {
      text: '步骤二',
      desc: '可以填写您到店的时间'
    }],
    advText: '上门对比/全场0元购/正品保障',
    brands: [
      {
        id: 1,
        name: '苹果',
        logo: 'http://image.qfstatic.com/897/2019/201905/20190506/AEF7CFE3C02F4A32898545383D686EED.png'
      },
      {
        id: 2,
        name: '华为',
        logo: 'http://image.qfstatic.com/897/2019/201905/20190506/7C36E57B540B48D0A8C839B27AB219C5.png',
      },
      {
        id: 3,
        name: 'oppo',
        logo: 'https://img30.360buyimg.com/popshop/jfs/t1/30221/1/5809/2875/5c88da6fE05b9691a/a687b198a375b4ff.png'
      },
      {
        id: 4,
        name: 'vivo',
        logo: 'https://img30.360buyimg.com/popshop/jfs/t1/11104/32/5529/6793/5c3445beE7832b693/d961779d6364cf5d.jpg'
      }
    ],
    zeroSales: [{
      name: 'iphoneX',
      tags: [
        '64G', '4.7英寸', '1200W'
      ],
      tag: '热卖',
      gifts: [
        '免费贴膜', '赠手机壳', '免费教程',
      ],
      price: '2345.23',
      rating: '87%',
      image: 'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
      id: 1222
    },
    {
      name: 'iphoneX',
      tags: [
        '64G', '4.7英寸', '1200W'
      ],
      tag: '新品',
      gifts: [
        '免费贴膜', '赠手机壳', '免费教程',
      ],
      price: '2345.23',
      rating: '87%',
      image: 'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
      id: 1224
    }],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
    })
  },
  onReady: function () {

  },

  openMoreShops() {
    console.log('open more shops...')
  },
  onNearShopOpen: function (e) {
    var that = this;
    wx.navigateTo({
      url: '/pages/shop/shop?latitude=' + that.data.shop.latitude + '&longitude=' + that.data.shop.longitude,
    })
  },

  /**
   * 点击查看更多商品
   */
  onMoreProducts() {
    wx.navigateTo({
      url: "/pages/product-list/product-list"
    })
  },

  /**
   * 查看附近门店详情
   */
  openShopDetail(e) {
    const id = e.detail.id;
    console.log(id)
  },

  /**
   * 获取用户地理位置
   */
  onShow: function () {
    let _this = this;
    _this.getUserLocation();
  },
  advBindError: function (e) {
    console.error(e)
  },
  advBindLoad: function (e) {
    console.log(e)
  },

  getUserLocation: function () {
    let _this = this;
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          //用户未授权
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取你的当前位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: res => {
                    if (res.authSetting['scope.userLocation'] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用微信的wx.getLocation的API
                      _this.geo();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //用户首次进入页面，调用微信的wx.getLocation的api
          _this.geo();
        } else {
          console.log('授权成功');
          _this.geo();
        }
      }
    })
  },

  onSearchOpen: function (e) {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  /**
   * 调用微信api获取地理位置
   */
  geo: function () {

    let _this = this;
    let _baidu = app.baidu;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        let lat = res.latitude;
        let lng = res.longitude;
        let speed = res.speed;
        let accuracy = res.accuracy;
        let cityName = _baidu.getCityName(lat, lng);
        _this.setData({
          userPosition: cityName
        })
      }
    })
  },
  onTap: function () {
    wx.redirectTo({
      url: '/pages/posts/posts',
    })
  },
  onUnload: function () {
    console.log("index is unload")
  },


  onProductClick(e) {
    let id = e.detail.id
    wx.navigateTo({
      url: "/pages/product-detail/product-detail?id=" + id
    })
  },

  onHide: function () {
    console.log("on hide")
  },
  onLoad: function () {
    if (app.appData.userInfo) {
      this.setData({
        userInfo: app.appData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        app.appData.userInfo = res.userInfo
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.appData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(`userInfo:{e}`)
    app.data.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  onBrandTap: function (e) {
    let brandId = e.currentTarget.dataset.brandid;
    let brandName = e.currentTarget.dataset.brandname;
    wx.navigateTo({
      url: '/pages/brand/brand?brandId=' + brandId + '&brandName=' + brandName,
    })
  },
  onHotPhoneTap: function (e) {
    let hotPhoneId = e.currentTarget.dataset.phoneid;
    wx.navigateTo({
      url: '/pages/phone-detail/phone-detail?phoneId=' + hotPhoneId,
    })
  },
  onPhoneTap: function (e) {
    let phoneId = e.currentTarget.dataset.productid;
    console.log('productId:', phoneId)
    wx.navigateTo({
      url: '/pages/phone-detail/phone-detail?phoneId=' + phoneId,
    })
  },
})
