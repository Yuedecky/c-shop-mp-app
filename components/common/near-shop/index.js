Component({
    properties: {
        shop: Object,
        background: String,
        bottomBorderStyle: String
    },
    methods: {
        tapDetail: function (e) {
            wx.navigateTo({
                url: '/pages/shop-detail/shop-detail',
                success: (result) => {

                },
                fail: () => { },
                complete: () => { }
            });
        },
        onTapMore() {
            this.triggerEvent("more", {}, {})
        }
    }
})