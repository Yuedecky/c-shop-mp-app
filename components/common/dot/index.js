Component({
    properties: {
        showDraw: {
            type: Boolean,
        }
    },
    methods: {
        click(e) {
            this.triggerEvent('click', {}, {})
        }
    },
})