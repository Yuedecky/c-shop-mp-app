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
    total: 0,

    dictList: [],
    loadingAni: false,
    loading: true,

    showDraw: false,

    selectedProductIdFromCategory: 0,

    compares: [],
    canAdd: true,

    shop: {
      location: '上海市浦东新区122号',
      name: '聚客数码浦东新区店',
      times: 3921,
      distance: 0.2,
      photo: 'http://image.qfstatic.com/897/2019/201904/20190429/8D5C9103C78643A190513340FA3FA294.jpeg',
      latitude: 121.460231,
      longitude: 31.234129
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
    wx.navigateTo({
      url: '/pages/shop-list/shop-list?checkable=true'
    });
  },


  clickDrawer() {
    const draw = this.data.showDraw;
    this.setData({
      showDraw: !draw
    })
  },

  setRemarkLoading() {
    let that = this;
    that.setData({
      loadingAni: true
    })
    const pageNum = this.data.pageNum + 1;
    const pageSize = this.data.pageSize;
    const goodsId = this.data.goods.id;
    let remarks = this.data.remarks;
    let total = this.data.total;
    commentModel.listComments(goodsId, pageNum, pageSize).then(res => {
      const data = res.data;
      const list = data.list;
      const page = data.page;
      total = total + page.size;
      if (list != null && list.length > 0) {
        remarks = remarks.concat(list);
        that.setData({
          total,
          remarks,
          pageNum: page.current,
          loading: total < page.total
        })
      }
    })
    that.setData({
      loadingAni: false
    })
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
      const versionList = data.versionList.map(it => {
        return { name: it.name, disabled: false }
      });
      const memoryList = data.memoryList.map(it => {
        return { name: it.name, disabled: false }
      });
      const colorList = data.colorList.map(it => {
        return { name: it.name, disabled: false }
      });
      that.setData({
        versionList,
        memoryList,
        colorList,
        dictList: data.list
      })
    })
    this.setData({
      showBottom: true
    })
  },

  delCurAdd(e) {
    const delId = e.detail.id;
    console.log(delId)
  },


  onSelected(e) {
    const id = e.detail.id;
    const selectedColor = e.detail.selectedColor;
    const selectedMemory = e.detail.selectedMemory;
    const selectedVersion = e.detail.selectedVersion;
    const goods = this.data.goods;
    let that = this;
    if (id != goods.id) {
      goodsModel.postGoodsDetail(id).then(res => {
        const data = res.data;
        console.log(data)
        that.setData({
          goods: data.goods,
          images: data.images
        })
      })
    } else {
      goods.goodsColor = selectedColor
      goods.goodsMemory = selectedMemory
      goods.goodsVersion = selectedVersion
      that.setData({
        goods
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let pageSize = this.data.pageSize;
    const commentQuery = commentModel.listComments(options.id, this.data.pageNum, pageSize);
    const goodsQuery = goodsModel.postGoodsDetail(options.id);
    Promise.all([commentQuery, goodsQuery]).then(res => {
      const commentsData = res[0].data;
      const goodsData = res[1].data;
      const imagesObjArr = goodsData.images;
      that.setData({
        images: imagesObjArr,
        goods: goodsData.goods,
        remarks: commentsData.list,
        total: pageSize,
        selectedColorName: goodsData.goods.goodsColor,
        selectedMemoryName: goodsData.goods.goodsMemory,
        selectedVersionName: goodsData.goods.goodsVersion
      })
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
  onShow: function (option) {
    const id = this.data.selectedProductIdFromCategory;
    let that = this;
    let compares = that.data.compares;
    if (id > 0) {
      goodsModel.postGoodsDetail(id).then(res => {
        const data = res.data;
         compares.push(data.goods)
        that.setData({
          compares
        })
      })
    }

  },




})