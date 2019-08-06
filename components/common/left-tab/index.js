Component({
    properties: {
        item: Object,
        active: {
            type: Number,
            observer: function (val, old) {
                if (val === this.properties.item.id) {
                    this.setData({
                        activated: true
                    })
                }
            }
        }
    },
    data: {
        activated: false
    },
    attached() {

    },
    ready() {
        if (this.properties.active == this.properties.item.id) {
            this.setData({
                activated: true
            })
        }
    },

    data: {

    },

    methods: {
        onTap: function (e) {
            this.triggerEvent('click', { id: this.properties.item.id }, {})
        }
    }
})