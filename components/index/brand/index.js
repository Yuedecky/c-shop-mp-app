Component({
    properties: {
        brand: Object,
        hot: Boolean
    },
    methods: {
        tap: function (e) {
            this.triggerEvent('tap', { id: this.properties.brand.id, name: this.properties.brand.name }, {})
        }
    }
})