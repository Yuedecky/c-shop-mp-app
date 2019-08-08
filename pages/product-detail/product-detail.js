import { GoodsModel } from "../../models/goods-model";
import { CommentModel } from '../../models/comment-model';
const commentModel = new CommentModel();
const goodsModel = new GoodsModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBottom: false,
    goods: {},

    selectedMemoeyName: "",
    selectedColorName: "",
    selectedVersionName: "",


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
    scrollHeight: 593,
    ratings: {

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
    let that = this;
    goodsModel.listGoodsParams(id).then(res => {
      const data = res.data;
      const versionList = data.versionList;
      const memoryList = data.memoryList;
      const colorList = data.colorList;
      that.setData({
        versionList,
        memoryList,
        colorList
      })

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

    const commentQuery = commentModel.listComments(options.id, this.data.pageNum, this.data.pageSize);

    const goodsQuery = goodsModel.postGoodsDetail(options.id);
    Promise.all([commentQuery, goodsQuery]).then(res => {
      const commentsData = res[1].data;
      const goodsData = res[1].data;
      const imagesObjArr = goodsData.images;
      const images = imagesObjArr.map(item => {
        return item.imgUrl;
      })
      that.setData({
        images: images,
        goods: goodsData.goods,
        remarks: commentsData.list
      })
    })



  },

  clickVersion(e) {
    const vid = e.detail.id;
    const vName = e.detail.name;
    this.setData({
      selectedVersion: vid,
      selectedVersionName: vName
    })
  },

  clickColor(e) {
    const cid = e.detail.id;
    const cName = e.detail.name;
    this.setData({
      selectedColor: cid,
      selectedColorName: cName
    })
  },

  clickMemory(e) {
    const mid = e.detail.id;
    const mName = e.detail.name;
    console.log(mName)
    this.setData({
      selectedMemory: mid,
      selectedMemoryName: mName
    })
  },

  makeSure() {
    const goodsMemory = this.data.selectedMemoryName;
    const goodsColor = this.data.selectedColorName;
    const goodsVersion = this.data.selectedVersionName;
    let goods = this.data.goods;
    if (goodsMemory) {
      goods.goodsMemory = goodsMemory;
    }
    if (goodsColor) {
      goods.goodsColor = goodsColor;
    }
    if (goodsVersion) {
      goods.goodsVersion = goodsVersion;
    }
    console.log(goods)
    this.setData({
      showBottom: false,
      goods
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