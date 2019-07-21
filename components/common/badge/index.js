Component({
    properties: {
        pendingCash: Number,
        withDraw: Number
    },
    data: {
        steps: [
            {
                text: '第一步',
                desc: '描述信息'
            },
            {
                text: '第二部',
                desc: '描述信息'
            }
        ],
        visible: false
    },
    methods: {
        onApply: function () {
            console.log('apply...')
            this.triggerEvent('draw', {}, {})
        },
        applyRaider: function () {
            this.triggerEvent("raider", {}, {})
        },
        onChange: function (e) {
            const visibleVal = this.data.visible;
            this.setData({
                visible: !visibleVal
            })
        }
    }
})