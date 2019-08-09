Component({
    properties: {
        tag: String,
        tags: {
            type: Array,
            value: [],
            observer: function (old, newVal, changedPath) {
                const ret = old.every((item) => {
                    return item.affix !== null && item.affix !== undefined
                })
                this.setData({
                    affixMode: ret
                })
            }
        },
        current: String
    },
    data: {
        affixMode: false,
        active: false
    },
    methods: {
        clickTag(e) {
            const name = e.currentTarget.dataset.name;
            const disabled = e.currentTarget.dataset.disabled;
            if (!disabled) {
                this.setData({
                    current: name
                })
                this.triggerEvent('click', { name, }, {})
            }

        }
    }
})