Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBottom: false,
    curPhone: {
      params: [
        {
          id: 'cpu',
          name: 'CPU',
          desc: '骁龙660八核',
        },
        {
          id: 'store',
          name: '存储容量',
          desc: '128GB'
        },
        {
          id: 'memory',
          name: '极速畅玩',
          desc: '8GB'
        },
        {
          id: 'mh',
          name: '超长待机',
          desc: '4000mAh'
        },
        {
          id: 'photo',
          name: '三摄像头',
          desc: '800万+2400万'
        },
        {
          id: 'network',
          name: '运营商网络',
          desc: '4G全网通'
        },
        {
          id: 'mode',
          name: '网络模式',
          desc: '双卡双待'
        },
        {
          id: 'ratio',
          name: '屏幕分辨率',
          desc: '2340*1080',
        },
        {
          id: 'screen',
          name: '超大屏',
          desc: '6.3英寸'
        }
      ],
      tags: ["超感莱卡四射", "10倍混合变焦",],
      tag: "到手价￥5288",
      rating: '好评率98%',
      name: '华为P30',
      price: "￥2345",
      oPrice: '￥2999',
      desc: "8GB 256GB 赤红色 全网通",
      images: [
        "https://img13.360buyimg.com/n1/s450x450_jfs/t1/9085/2/12381/146200/5c371c5bE08328383/4f4ba51aed682207.jpg",
        "https://img14.360buyimg.com/n0/jfs/t1/32585/8/433/58112/5c3c042cEa2f28dad/d820f61c262556de.jpg"
      ],
      image: "https://img13.360buyimg.com/n1/s450x450_jfs/t1/9085/2/12381/146200/5c371c5bE08328383/4f4ba51aed682207.jpg",
      color: [
        '天空之镜',
        '亮黑色',
        '激光色',
        '赤茶橘',
        '珠光贝母'
      ],
      versions: [
        {
          id: 23,
          name: '4GB+64GB',
          affix: '1299元',
        },
        {
          id: 34,
          name: '6GB+64GB',
          affix: '1399元'
        },
        {
          id: 45,
          name: '6GB+128GB',
          affix: '1599元'
        }
      ],
      color: [
        {
          id: 23,
          name: '白色恋人（白色）'
        },
        {
          id: 24,
          name: '深色星球（蓝色）'
        },
        {
          id: 34,
          name: '暗夜王子（深空灰）'
        }
      ],
      protect: [
        {
          id: 12,
          name: '意外保障服务 99元'
        }
        , {
          id: 13,
          name: '碎屏保障服务 69元'
        }],
      memory: [
        {
          lable: '8G+64G',
          value: 'unique-id-1'
        },
        {
          lable: '8G+128G',
          value: 'unique-id-2'
        },
        {
          lable: '8G+256G',
          value: 'unique-id-3'
        },
      ],
      version: [
        {
          label: '标准版',
          value: 'version-1'
        },
        {
          label: '尊享版',
          value: 'version-2'
        }
      ],
      gifts: [
        {
          name: '手机贴么',
          url: 'https://img13.360buyimg.com/n4/jfs/t1/38348/11/5920/152481/5ccf0723E9dbb1408/96a77ce3deb2a646.jpg'
        },
        {
          name: '手机壳',
          url: 'https://img12.360buyimg.com/n4/jfs/t1/9896/17/11243/95358/5c2acb20Ee8698d77/a02092c5e5c1b09a.jpg'
        }
      ]
    },
    shop: {
      location: '上海市浦东新区122号',
      name: '聚客数码浦东新区店',
      times: 3921,
      distance: 0.2,
      photo: 'http://image.qfstatic.com/897/2019/201904/20190429/8D5C9103C78643A190513340FA3FA294.jpeg',
      latitude: 121.460231,
      longitude: 31.234129
    },
    scrollHeight: 493,
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


  openMoreShops: function (e) {
    wx.navigateTo({
      url: '/pages/shop-list/shop-list',
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

  openShopDetail: function (e) {
    const id = e.detail.id;
    console.log(id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.setData({

    })

  },

  /**
   * 添加更机型对比
   */
  addMoreProduct() {
    wx.reLaunch({
      url: '/pages/category/category',
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