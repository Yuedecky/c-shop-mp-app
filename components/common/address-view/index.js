Component({
    properties: {
        address: String,
        phone: String,
        name: String,
        type: {
            type: String,
            observer(val) {
                if (val === '1') {
                    this.setData({
                        text: '上门地址',
                        nameKey: '收货人',
                        addressKey: '配送地址',
                        phoneKey: '联系电话'
                    })
                } else {
                    this.setData({
                        text: '到店地址',
                        nameKey: '门店名称',
                        addressKey: '门店地址',
                        phoneKey: '门店电话'
                    })
                }
            }
        }
    },
    data: {
        text: '',
        nameKey: '',
        addressKey: '',
        phoneKey: '',
    },

    methods: {

    },
})