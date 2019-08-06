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
    colorItem: {
      text: ['天空直径', '亮黑色', '激光色'],
      selectIndex: 1,
    },
    memoryItem: {
      text: ['8G+64G', '8G+128G', '8G+256G'],
      selectIndex: 0
    },
    versionItem: {
      text: ['标准版', '尊享版', '高贵版'],
      selectIndex: 2
    },
    background: "#cccccc",
    giftItem: [
      {
        image: 'https://img13.360buyimg.com/n1/jfs/t1/31125/35/13880/115774/5cbee16dE4dca3084/068b89d20a1ca753.jpg',
        desc: '手机贴膜'
      },
      {
        image: 'https://img11.360buyimg.com/n1/s150x150_jfs/t1/30858/3/9220/371825/5ca5761eE53bbc96e/19abd03fc80d8c2e.jpg',
        desc: '手机壳'
      },
      {
        image: 'https://img13.360buyimg.com/n5/jfs/t1/32002/13/14579/57576/5cbee16dEbb499f41/0ab28cb1ffba1ffb.jpg',
        desc: '移动电源'
      }
    ]
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


})