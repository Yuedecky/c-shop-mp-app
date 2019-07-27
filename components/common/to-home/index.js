Component({
    properties: {
    },
    data: {
        address: ""
    },
    methods: {
        onAdd() {
            this.properties.history = false;
        },
        onChange(event) {
            // event.detail 为当前输入的值
            console.log(event.detail);
        },
        pickAddress() {
            wx.navigateTo({
                url: '/pages/address-list/address-list'
            })
        }
    }
})