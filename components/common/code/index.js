Component({
    properties: {
        qrCode: String,
        codeText: String
    },
    data: {
        shareCodeUrl: "./images/share.png",
        saveCodeUrl: "./images/save.png"
    },
    methods: {
        shareCode: function () {
            this.triggerEvent('share', {}, {})
        },
        saveCode: function () {
            this.triggerEvent('save', {}, {})
        },
        onTapRaider: function () {
            this.triggerEvent('raider', {}, {})
        }
    }
})