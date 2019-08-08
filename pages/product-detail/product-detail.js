import { GoodsModel } from "../../models/goods-model";

const goodsModel = new GoodsModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBottom: false,
    goods: {},
    shop: {
      location: '上海市浦东新区122号',
      name: '聚客数码浦东新区店',
      times: 3921,
      distance: 0.2,
      photo: 'http://image.qfstatic.com/897/2019/201904/20190429/8D5C9103C78643A190513340FA3FA294.jpeg',
      latitude: 121.460231,
      longitude: 31.234129
    },
    scrollHeight: 593,
    ratings: {
      total: 12,
      offset: 2,
      remarks: [
        {
          name: '12***233',
          score: 4.6,
          date: '2019-01-01',
          content: '第一次用苹果的ios系统，挺顺手，操作也很简单，拿在手上的手感不错，面容id用起来可能还不是太习惯，一些角度好像解不开，和安卓手机一样，会发热，APP什么的运行很流畅，听音乐的音质好像也好一些，可能是我心理作用哈哈，总得来说满意，可以用好几年了。快递师傅很负责，态度很好，还是挺相信微券优品的',
          avatar: 'https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg'
        },
        {
          name: '23***233',
          score: 3.7,
          date: '2019-02-01',
          content: '第一次用苹果的ios系统，挺顺手，操作也很简单，拿在手上的手感不错，面容id用起来可能还不是太习惯，一些角度好像解不开，和安卓手机一样，会发热，APP什么的运行很流畅，听音乐的音质好像也好一些，可能是我心理作用哈哈，总得来说满意，可以用好几年了。快递师傅很负责，态度很好，还是挺相信微券优品的',
          avatar: 'https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg'
        }
      ]
    },
    checkShopId: 0,
    model: {},
  },

  /**
   * 
   */
  toOrder() {
    wx.navigateTo({
      url: '/pages/order/order'
    })
  },

  openMoreShops: function (e) {
    console.log('in product detail')
    wx.navigateTo({
      url: '/pages/shop-list/shop-list?checkable=true'
    });
  },

  onClosePopup() {
    this.setData({
      showBottom: false
    })
  },


  /**
   * 更改数量
   */
  onNumChange() {

  },

  onClose() {
    this.setData({
      showBottom: false
    })
  },

  /**
   * 点击当前手机 弹出
   * @param  e 
   */
  clickCurPhone(e) {
    const id = e.detail.id
    console.log(id)
    goodsModel.listGoodsParams(id).then(res => {
      const data = res.data;
      const versionList = data.versionList;
      const memoryList = data.memoryList;
      const colorList = data.colorList;
    })
    this.setData({
      showBottom: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.setData({

    })

    goodsModel.postGoodsDetail(options.id).then(res => {
      const data = res.data;
      console.log(res.data)
      const imagesObjArr = data.images;
      const images = imagesObjArr.map(item => {
        return item.imgUrl;
      })
      that.setData({
        images: images,
        goods: data.goods
      })
    })



  },

  makeSure() {


    this.setData({
      showBottom: false
    })
  },

  /**
   * 添加更机型对比
   */
  addMoreProduct() {
    wx.navigateTo({
      url: '/pages/select-product/select-product',
      success: (result) => {

      },
      fail: () => { },
      complete: () => { }
    });
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var res = wx.getSystemInfoSync();
    let h = res.windowHeight - res.windowWidth / 750 * 116 + 10;
    this.setData({
      mainHeight: h,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },




})