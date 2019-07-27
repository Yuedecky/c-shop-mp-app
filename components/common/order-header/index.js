Component({
    properties: {

    },
    methods: {
        viewOrder() {
            wx.navigateTo({
                url: '/page/my-order/my-order',
                success: (result) => {

                },
                fail: () => { },
                complete: () => { }
            });
        },
        toIndex() {
            wx.navigateTo({
                url: '/pages/index/index'
            })
        }
    },
})