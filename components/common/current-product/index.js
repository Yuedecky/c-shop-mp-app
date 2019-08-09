Component({
    properties: {
        goods: Object,
        delBtn: Boolean
    },
    data: {

    },
    methods: {
        onDetail() {
            this.triggerEvent("click", { id: this.properties.goods.id }, {})
        },
        del() {
            this.triggerEvent('del', { id: this.properties.goods.id }, {})
        }
    }
})