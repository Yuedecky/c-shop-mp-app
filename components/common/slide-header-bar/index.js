Component({
    properties: {
        activeCode: {
            type: Number, //哪个下表处于 active
            observer: function (val) {
                console.log(val)
            }
        },
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
            // 在组件实例进入页面节点树时执行
            const indx = this.properties.tabs.findIndex((item, index, arr) => {
                return item.id === this.properties.activeCode
            })
            if (indx > -1) {
                this.setData({
                    active: indx
                })
            }
        },
    },
    methods: {
        tabClick() {
            this.triggerEvent("click", { id: this.activeCode }, {})
        }
    }
})