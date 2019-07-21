Component({
    properties: {
        pendingCash: Number,
        withDraw: Number
    },
    data: {

    },
    methods: {
        onApply: function () {
                this.triggerEvent('draw',{},{})
        }
    }
})