Page({
    data: {
        shop: {
            location: '上海市浦东新区122号',
            name: '聚客数码浦东新区店',
            times: 3921,
            distance: 0.2,
            photo: 'http://image.qfstatic.com/897/2019/201904/20190429/8D5C9103C78643A190513340FA3FA294.jpeg',
            latitude: 121.460231,
            longitude: 31.234129
        },
        currentDate: new Date().getTime(),
        minHour: 10,
        maxHour: 20,
        minDate: new Date().getTime(),
        maxDate: new Date(2019, 10, 1).getTime(),
        hidden: true,

        products: [
            {
                name: 'iphoneX',
                tags: [
                    '64G', '4.7英寸', '1200W'
                ],
                remarkCount: 234,
                tag: '热卖',
                gifts: [
                    '免费贴膜', '赠手机壳', '免费教程',
                ],
                price: '￥2345.23',
                oPrice: '￥2555',
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
                remarkCount: 234,
                price: '￥2345.23',
                oPrice: '￥2555',
                rating: '87%',
                image: 'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
                id: 1224
            }
        ],
        showBottom: false
    },
    onInput(event) {
        this.setData({
            currentDate: event.detail
        });
    },

    pickerTime() {
        this.setData({
            hidden: false
        })
    },
    onLoad() {

    },
    submitOrder() {
        wx.redirectTo({
            url: '/pages/order-finish/order-finish'
        })
    },
    onReady() {
        var res = wx.getSystemInfoSync();
        let h = res.windowHeight - res.windowWidth / 750 * 116 + 10;
        this.setData({
            mainHeight: h,
        });
    },
    onChange() {
        console.log("change tab")
    },
    closePickerTime() {
        this.setData({
            showBottom: false
        })
    },
    pickerTime() {
        this.setData({
            showBottom: true
        })
    }
})