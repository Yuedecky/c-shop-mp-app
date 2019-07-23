Component({
    properties: {
        product: Object
    },
    data: {

    },
    methods: {
        tapPhone() {
            console.log("click phone")
            this.triggerEvent("click", { id: this.properties.product.id }, {})
        }
    }
})