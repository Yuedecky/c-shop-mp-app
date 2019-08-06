//index.js
//获取应用实例
import { BrandModel } from '../../models/brand-model';
import { GoodsModel } from '../../models/goods-model';
const goodsModel = new GoodsModel();
const brandModel = new BrandModel();
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
    pageNum: 1,
    pageSize: 5,
    shop: {
      location: '上海市浦东新区122号',
      name: '聚客数码浦东新区店',
      times: 3921,
      distance: 0.2,
      photo: 'http://image.qfstatic.com/897/2019/201904/20190429/8D5C9103C78643A190513340FA3FA294.jpeg',
      latitude: 121.460231,
      longitude: 31.234129
    },
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
    brands: [],
    zeroSales: [],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
    })
  },
  onReady: function () {

  },

  openShopMore() {
    wx.navigateTo({
      url: '/pages/shop-list/shop-list'
    })
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
    wx.navigateTo({
      url: '/pages/shop-map/shop-map'
    })
  },

  clickMoreShops() {
    wx.navigateTo({ url: "/pages/shop-list/shop-list" })
  },

  /**
   * 获取用户地理位置
   */
  onShow: function () {
    let _this = this;
    _this.getUserLocation();
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

  onUnload: function () {
  },


  /**
   * 点击查看更多品牌
   */
  clickBrands() {
    wx.reLaunch({
      url: '/pages/category/category',
      success: (result) => {

      },
      fail: () => { },
      complete: () => { }
    });
  },


  onProductClick(e) {
    let id = e.detail.id
    console.log(id)
    wx.navigateTo({
      url: "/pages/product-detail/product-detail?id=" + id
    })
  },

  onHide: function () {
    console.log("on hide")
  },
  onLoad: function () {
    const hotBrands = brandModel.getHoBrands();
    const zeroSales = goodsModel.postGoodsList({}, this.data.pageNum, this.data.pageSize);
    Promise.all([hotBrands, zeroSales]).then(res => {
      const brandsData = res[0].data;
      const zeroList = res[1].data
      const zeroData = zeroList.list
      const pageNum = zeroList.page.current;
      const pageSize = zeroList.page.size
      this.setData({
        brands: brandsData,
        zeroSales: zeroData,
        pageNum: pageNum,
        pageSize: pageSize
      })
    })
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
      url: '/pages/brand-products/brand-products?brandId=' + brandId + '&brandName=' + brandName,
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
