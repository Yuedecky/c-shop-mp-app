Component({
    properties: {
        icon: String,
        title: String,
        right: String,
        rightStyle: {
            type: String,
        }
    },
    data: {

    },
    methods: {
        clickRight() {
            this.triggerEvent("more", {}, {})
        }
    }
})