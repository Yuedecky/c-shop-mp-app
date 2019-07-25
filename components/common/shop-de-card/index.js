Component({
    properties: {
        phone: String,
        address: String,
        name: String,
        date: String,
        id: Number
    },
    data: {

    },
    methods: {
        tapMap() {
            wx.navigateTo({
                url: "/pages/shop-map/shop-map?id=" + this.properties.id
            })
        }
    }
})