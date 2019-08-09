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

    dictList: [],

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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    const commentQuery = commentModel.listComments(options.id, this.data.pageNum, this.data.pageSize);
    const goodsQuery = goodsModel.postGoodsDetail(options.id);
    Promise.all([commentQuery, goodsQuery]).then(res => {
      const commentsData = res[0].data;
      const goodsData = res[1].data;
      const imagesObjArr = goodsData.images;
      const images = imagesObjArr.map(item => {
        return item.imgUrl;
      })
      that.setData({
        images: images,
        goods: goodsData.goods,
        remarks: commentsData.list,
        selectedColorName: goodsData.goods.goodsColor,
        selectedMemoryName: goodsData.goods.goodsMemory,
        selectedVersionName: goodsData.goods.goodsVersion
      })
    })
  },

  clickVersion(e) {
    const vName = e.detail.name;
    const dict = this.data.dictList;
    const colorList = this.data.colorList;
    const selectedMemoryName = this.data.selectedMemoryName;
    const selectedColorName = this.data.selectedColorName;
    const memoryList = this.data.memoryList;
    const arr = dict.filter(it => {
      return it.goodsVersion == vName
    })
    if (arr != null && arr.length > 0) {
      const colorList2 = arr.map(it => {
        return it.goodsColor
      })
      const memoryList2 = arr.map(it => {
        return it.goodsMemory
      })
      colorList.forEach(it => {
        let colorIndx = colorList2.findIndex((val) => val == it.name)
        it.disabled = !(colorIndx > -1);
      })
      memoryList.forEach(it => {
        let memoryIdx = memoryList2.findIndex((val) => val == it.name)
        it.disabled = !(memoryIdx > -1)
      })
      const pRet = arr.filter(it => {
        return it.goodsMemory == selectedMemoryName && it.goodsColor == selectedColorName
      })
      if (pRet != null && pRet.length > 0) {
        const goods = this.data.goods;
        goods.originPrice = pRet[0].originPrice;
        this.setData({
          goods
        })
      }
      this.setData({
        colorList,
        memoryList
      })
    }
    this.setData({
      selectedVersionName: vName
    })
  },

  clickColor(e) {
    const cName = e.detail.name;
    const dict = this.data.dictList;
    const versionList = this.data.versionList;
    const memoryList = this.data.memoryList;
    const selectedVersionName = this.data.selectedVersionName;
    const selectedMemoryName = this.data.selectedMemoryName;
    const arr = dict.filter(it => {
      return it.goodsColor == cName
    })
    if (arr != null && arr.length > 0) {
      const versionList2 = arr.map(it => {
        return it.goodsVersion
      })
      const memoryList2 = arr.map(it => {
        return it.goodsMemory
      })
      versionList.forEach(it => {
        let versionIdx = versionList2.findIndex((val) => val == it.name)
        it.disabled = !(versionIdx > -1);
      })
      memoryList.forEach(it => {
        let memoryIdx = memoryList2.findIndex((val) => val == it.name)
        it.disabled = !(memoryIdx > -1)
      })

      const pRet = arr.filter(it => {
        return it.goodsMemory == selectedMemoryName && it.goodsVersion == selectedVersionName
      })
      if (pRet != null && pRet.length > 0) {
        const goods = this.data.goods;
        goods.originPrice = pRet[0].originPrice;
        this.setData({
          goods
        })
      }
      this.setData({
        versionList,
        memoryList
      })
    }
    this.setData({
      selectedColorName: cName
    })
  },

  clickMemory(e) {
    const mName = e.detail.name;
    const dict = this.data.dictList;
    const versionList = this.data.versionList;
    const colorList = this.data.colorList;
    const selectedVersionName = this.data.selectedVersionName;
    const selectedColorName = this.data.selectedColorName;
    const arr = dict.filter(it => {
      return it.goodsMemory == mName
    })
    if (arr != null && arr.length > 0) {
      const versionList2 = arr.map(it => {
        return it.goodsVersion
      })
      const colorList2 = arr.map(it => {
        return it.goodsColor
      })
      versionList.forEach(it => {
        let versionIdx = versionList2.findIndex((val) => val == it.name)
        it.disabled = !(versionIdx > -1);
      })
      colorList.forEach(it => {
        let colorIndx = colorList2.findIndex((val) => val == it.name)
        it.disabled = !(colorIndx > -1)
      })
      const pRet = arr.filter(it => {
        return it.goodsColor == selectedColorName && it.goodsVersion == selectedVersionName
      })
      if (pRet != null && pRet.length > 0) {
        const goods = this.data.goods;
        goods.originPrice = pRet[0].originPrice;
        this.setData({
          goods
        })
      }
      this.setData({
        versionList,
        colorList
      })
    }
    this.setData({
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