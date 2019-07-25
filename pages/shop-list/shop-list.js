Page({
    data: {
        active: 0,
        tabs: [
            {
                name: '附近(10KM)',
                id: 12
            },
            {
                name: '附近(5KM)',
                id: 13
            }
        ],
        shops: [{
            id: 1230,
            neareast: true,
            distance: '2.3KM',
            name: '上海常态广场店',
            address: "上海市浦东新区金科路2889号长泰官场B1层GF区（河马先生一楼扶梯下往左20米）",
            labels: [
                "回收",
                "依旧欢心",
                "维修"
            ]
        },
        {
            id: 1233,
            neareast: true,
            distance: '2.3KM',
            name: '上海常态广场店',
            address: "上海市浦东新区金科路2889号长泰官场B1层GF区（河马先生一楼扶梯下往左20米）",
            labels: [
                "回收",
                "依旧欢心",
                "维修"
            ]
        }],
        checkable: false
    },

    onLoad: function (options) {
        if (options.checkable) {
            this.setData({
                checkable: true
            })
        }
    },
    onShow(options) {
    },
    onCheck(e) {
        const id = e.detail.id
        wx.navigateBack({
            delta: 1
        });
        var pages =  getCurrentPages();
        var prePage = pages[pages.length-2]
        prePage.setData({
            checkShopId: id
        })
    }
})