Component({
    properties: {
        shop: Object,
        background: String
    },
    methods: {
        tapDetail: function (e) {
            console.log("on detail...")
            wx.navigateTo({
                url: '/pages/shop-detail/shop-detail',
                success: (result) => {

                },
                fail: () => { },
                complete: () => { }
            });
        },
        onTapMore() {
            wx.navigateTo({
                url: "/pages/shop-list/shop-list"
            })
        }
    }
})