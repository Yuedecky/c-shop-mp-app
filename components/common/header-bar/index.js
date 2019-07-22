Component({
    properties: {
        image: String,
        target: String
    },
    data: {

    },
    methods: {
        onTap: function () {
            this.triggerEvent("click", {}, {})
        }
    }
})