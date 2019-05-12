Page({

  /**
   * 页面的初始数据
   */
  data: {
    curPhone:{
      officalPrice: 6999,
      reservationPrice: 4689,
      goodRating:'95%',
      name: '华为P30',
      images: [],
      color: [
        '天空之镜',
        '亮黑色',
        '激光色',
        '赤茶橘',
        '珠光贝母'
      ],
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
      version:[
        {
          label: '标准版',
          value: 'version-1'
        },
        {
          label: '尊享版',
          value: 'version-2'
        }
      ],
      gifts:[
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
    ratings:{
      total: 12,
      offset:2,
      remark:[
      {
        name: '12***233',
        score: 4.6,
        ratingDate: '2019-01-01',
        remark: '第一次用苹果的ios系统，挺顺手，操作也很简单，拿在手上的手感不错，面容id用起来可能还不是太习惯，一些角度好像解不开，和安卓手机一样，会发热，APP什么的运行很流畅，听音乐的音质好像也好一些，可能是我心理作用哈哈，总得来说满意，可以用好几年了。快递师傅很负责，态度很好，还是挺相信微券优品的',
        image: 'https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg'

      },
      {
        name: '23***233',
        score: 3.7,
        ratingDate: '2019-02-01',
        remark: '第一次用苹果的ios系统，挺顺手，操作也很简单，拿在手上的手感不错，面容id用起来可能还不是太习惯，一些角度好像解不开，和安卓手机一样，会发热，APP什么的运行很流畅，听音乐的音质好像也好一些，可能是我心理作用哈哈，总得来说满意，可以用好几年了。快递师傅很负责，态度很好，还是挺相信微券优品的',
        image:'https://misc.360buyimg.com/user/myjd-2015/css/i/peisong.jpg'
      }
    ]},
    shop: {
      shopLocation: '上海市浦东新区122号',
      shopName: '聚客数码001管',
      shopUrl: 'http://image.qfstatic.com/897/2019/201904/20190429/8D5C9103C78643A190513340FA3FA294.jpeg',
      latitude: 121.460231,
      longitude: 31.234129,
      km: '2.4km'
    },
    colorItem: {
    text: ['天空直径', '亮黑色', '激光色'],
    selectIndex: 1,
  },
    memoryItem:{
      text: ['8G+64G', '8G+128G', '8G+256G'],
      selectIndex: 0
    },
    versionItem: {
      text: ['标准版', '尊享版', '高贵版'],
      selectIndex: 2
    },
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
  

onNearShopOpen:function(e){

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.setData({
      adv:{
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        images: ['https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg', 'https://img11.360buyimg.com/n7/jfs/t1/39517/24/6497/117847/5cd158d3Ea4bf7c02/d41bac1adeb24dd0.jpg']
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  setRemarkLoading:function(e){

  }
})