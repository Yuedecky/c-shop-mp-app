Component({
    properties: {
        tag: String,
        tags: {
            type: Array,
            value: [],
            observer: function (old, newVal, changedPath) {
                const ret = old.every((item) => {
                    return item.affix != null
                })
                if (ret) {
                    this.setData({
                        affixMode: true
                    })
                }
            }
        }
    },
    data: {
        affixMode: false,
        current: 0
    },
    methods: {
        clickRow(e) {
            const id = e.currentTarget.dataset.id;
            this.setData({
                current: id
            })
            this.triggerEvent('click', {}, {})
        },
        clickTag(e) {
            const id = e.currentTarget.dataset.id;
            this.setData({
                current: id
            })
            this.triggerEvent('click', {}, {})
        }
    }
})