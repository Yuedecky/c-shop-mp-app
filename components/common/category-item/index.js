Component({
    properties: {
        needSearchBar: Boolean,
        image: String,
        tabs: Array,
        active: Number,
        items: Array,
        activeHeaderCode: Number,
        activeLeftCode: Number,
    },
    data: {
        navLeftHeight: 0,
        current: 0
    },
    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行
            // 获取系统信息
            const res = wx.getSystemInfoSync();
            let tmp = 140;
            let h = res.windowHeight - res.windowWidth / 750 * 116 - tmp;
            this.setData({
                navLeftHeight: h,
            });
        },
    },
    methods: {


        brandTap: function (e) {
            const code = e.detail.code;
            this.setData({
                current: code
            })
        },
        tabClick: function (e) {
            const id = this.data.tabs[e.detail.index].id
            this.setData({
                items: []
            })
        },
    }
})