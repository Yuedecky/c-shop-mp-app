Component({
    properties: {
        product: Object
    },
    data: {

    },
    methods: {

        onClose() {
            this.triggerEvent("close", {}, {})
        }
    }
})