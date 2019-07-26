Page({

  /**
   * 页面的初始数据
   */
  data: {
    brandName: '',
    brands: [{
      name: '小米',
      desc: "直降，满999减200",
      total: 888,
      photo: 'http://image.qfstatic.com/897/2019/201905/20190506/7C36E57B540B48D0A8C839B27AB219C5.png',
      products: [{
        image: 'https://img14.360buyimg.com/n0/jfs/t1/69264/33/4540/170515/5d2c67ffE0e4ed434/fbffbec778b4d6ff.jpg',
        price: '2899',
        oPrice: '2999'
      },
      {
        image: 'https://img.alicdn.com/imgextra/i1/1114511827/O1CN01EuiOdq1PMo93BmaEU_!!1114511827.jpg_430x430q90.jpg',
        price: '2899',
        oPrice: '2999'
      },
      {
        image: 'https://img.alicdn.com/imgextra/i1/1114511827/O1CN01EuiOdq1PMo93BmaEU_!!1114511827.jpg_430x430q90.jpg',
        price: '2899',
        oPrice: '2999'
      }]
    },
    {
      photo: 'http://image.qfstatic.com/897/2019/201905/20190506/7C36E57B540B48D0A8C839B27AB219C5.png',
      name: '华为（HUAWEI）',
      desc: "直降，满999减200",
      total: 888,
      products: [{
        image: 'https://img14.360buyimg.com/n0/jfs/t1/69264/33/4540/170515/5d2c67ffE0e4ed434/fbffbec778b4d6ff.jpg',
        price: '2899',
        oPrice: '2999'
      },
      {
        image: 'https://img.alicdn.com/imgextra/i1/1114511827/O1CN01EuiOdq1PMo93BmaEU_!!1114511827.jpg_430x430q90.jpg',
        price: '2899',
        oPrice: '2999'
      },
      {
        image: 'https://img.alicdn.com/imgextra/i1/1114511827/O1CN01EuiOdq1PMo93BmaEU_!!1114511827.jpg_430x430q90.jpg',
        price: '2899',
        oPrice: '2999'
      }]
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  },



  onBrandTap: function (e) {
    let phoneId = e.currentTarget.dataset.phoneId;
    wx.navigateTo({
      url: '/pages/category/category?cid=' + phoneId,
    })
  },

})