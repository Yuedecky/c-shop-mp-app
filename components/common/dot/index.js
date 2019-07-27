Component({
    properties: {
        show: {
            type: Boolean,
            obserer(val) {
                console.log(val)
            }
        }
    },
    methods: {

    },
})