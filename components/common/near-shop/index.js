Component({
    properties: {
        shopName: String,
        shopDistance: String,
        shopLocation: String,
        shopPhoto: String,
        shopTimes: Number
    },
    methods: {
        tap: function (e) {
            console.log('shop open:', e)
        }
    }
})