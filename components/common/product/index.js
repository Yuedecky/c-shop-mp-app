Component({
    properties: {
        product: Object
    },
    data: {

    },
    methods: {
        onTap: function () {
            this.triggerEvent("click", { id: this.properties.product.id }, {})
        }
    }
})