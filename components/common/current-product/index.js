Component({
    properties: {
        goods: Object,
    },
    data: {

    },
    methods: {
        onDetail() {
            this.triggerEvent("click", { id: this.properties.goods.modelId }, {})
        }
    }
})