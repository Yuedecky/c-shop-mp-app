Component({
    properties: {
        goods: Object,
    },
    data: {

    },
    methods: {
        onDettail() {
            this.triggerEvent("click", { id: this.properties.goods.id }, {})
        }
    }
})