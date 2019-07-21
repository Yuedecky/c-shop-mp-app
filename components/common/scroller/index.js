Component({
    properties: {
        avatar: String,
        name: String,
        desc: String,
        code: String
    },
    data: {

    },
    methods: {
        rowTab: function () {
            this.triggerEvent('tapRow', { code: this.properties.code }, {})
        }
    }
})