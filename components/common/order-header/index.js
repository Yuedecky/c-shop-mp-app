Component({
    properties: {

    },
    methods: {
        viewOrder() {
            wx.navigateTo({
                url: '/pages/my-order/my-order',
                success: (result) => {

                },
                fail: () => { },
                complete: () => { }
            });
        },
        toIndex() {
            wx.reLaunch({
                url: '/pages/index/index'
            })
        }
    },
})