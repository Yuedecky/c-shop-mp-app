Component({
    properties: {
        text: String,
        code: Number,
        checked: Boolean,
    },
    data: {
    },
    attached() {

    },

    data: {

    },

    methods: {
        onTap: function (e) {
            this.triggerEvent('click', { code: this.properties.code }, {})
        }
    }
})