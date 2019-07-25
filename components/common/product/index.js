Component({
    properties: {
        product: Object
    },
    data: {

    },
    methods: {
        click: function () {
            this.triggerEvent("click", { id: this.properties.product.id }, {})
        }
    }
})