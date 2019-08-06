Component({
    properties: {
        tabs: {
            type: Array,
            observer: function (val) {
            }
        }
    },
    data: {
        active: 0
    },
    lifetimes: {
        attached: function () {
        }
    },
    methods: {
        tabClick(e) {
            const index = e.detail.index;
            this.triggerEvent("click", { id: this.properties.tabs[index].id }, {})
        }
    }
})