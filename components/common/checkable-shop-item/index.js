Component({
    properties: {
        shop: Object,
    },
    data: {
        checked: false
    },
    methods: {
        onChange() {
            this.setData({
                checked: !this.data.checked
            })
            this.triggerEvent("check", { id: this.properties.shop.id }, {})
        }
    }
})