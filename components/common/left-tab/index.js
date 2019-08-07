Component({
    properties: {
        item: Object,
        checked: Boolean
    },
    data: {
        activated: false
    },
    attached() {

    },
    ready() {

    },

    data: {

    },

    methods: {
        onTap: function (e) {
            this.triggerEvent('click', { id: this.properties.item.id }, {})
        }
    }
})