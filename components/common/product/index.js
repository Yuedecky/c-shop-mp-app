Component({
    properties: {
        product: Object,
        show: Boolean
    },
    data: {

    },
    methods: {
        click: function () {
            const token = wx.getStorageSync("token");
            if (!token) {
                wx.navigateTo({
                    url: '/pages/login/login'
                })
                return
            }
            this.triggerEvent("click", { id: this.properties.product.id }, {})
        }
    }
})