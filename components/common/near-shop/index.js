Component({
    properties: {
        shop: Object,
        background: String
    },
    methods: {
        tapDetail: function (e) {
            this.triggerEvent("detail", { id: this.properties.shop.id }, {})
        },
        onTapMore() {
            this.triggerEvent('more', {}, {})
        }
    }
})