Component({
    properties: {
        price: String,
        tags: Array,
        id: String
    },
    data: {

    },
    methods: {
        onDettail() {
            this.triggerEvent("click", { id: this.id }, {})
        }
    }
})