Component({
    properties: {
        product: Object,
        show: Boolean
    },
    data: {

    },
    methods: {
        click: function () {
            this.triggerEvent("click", { id: this.properties.product.id }, {})
        }
    }
})