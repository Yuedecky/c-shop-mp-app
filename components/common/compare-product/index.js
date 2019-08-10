Component({
    properties: {
        name: String,
        image: String,
        price: Number,
        id: Number
    },
    methods: {
        del() {
            this.triggerEvent("del", { id: this.properties.id }, {})
        }
    },

})