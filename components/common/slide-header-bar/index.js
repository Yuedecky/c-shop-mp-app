Component({
    properties: {
        active: Number, //哪个下表处于 active
        tabs: {
            type: Array,
            observer: function (val) {
                console.log(val)
            }
        }
    },
    data: {

    },
    methods: {}
})