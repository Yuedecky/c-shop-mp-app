Component({
    properties: {
        shop: Object
    },
    methods: {
        tapDetail: function (e) {
            this.triggerEvent("detail", { id: this.properties.id }, {})
        }
    }
})