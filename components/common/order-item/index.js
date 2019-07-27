Component({
    properties: {
        products: Array,
        address: String,
        name: String,
        phone: String,
        type: {
            type: String,
            observer(val) {
                if (val === '1') {
                    this.setData({
                        mode: '到店自提'
                    })
                } else {
                    this.setData({
                        mode: '送货上门'
                    })
                }
            }
        },
        orderNo: String,
        tag: String,
        status: String
    },
    data: {
        mode: ''

    },
    methods: {
        rate() {
            wx.navigateTo({
                url: '/pages/remark/remark'
            })
        }
    }
})