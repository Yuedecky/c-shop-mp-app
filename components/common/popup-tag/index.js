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
        }
    },
    data: {
        affixMode: false,
        current: 0
    },
    methods: {
        clickTag(e) {
            const id = e.currentTarget.dataset.id;
            const name = e.currentTarget.dataset.name;
            this.setData({
                current: id
            })
            this.triggerEvent('click', { name, id, }, {})
        }
    }
})