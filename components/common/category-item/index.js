import { BrandModel } from '../../../models/brand-model';
const brandModel = new BrandModel();
Component({
    properties: {
        needSearchBar: Boolean,
        image: String,
        tabs: Array,
        active: Number,
        items: Array,
        products: Array,
        activeHeaderCode: Number,
    },
    data: {
        navLeftHeight: 0,
        current: 0,
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
            const id = e.detail.id;
            this.triggerEvent('brandTap', { id: id }, {})
        },
        onClick() {
            wx.navigateTo({
                url: "/pages/search/search"
            })
        },
        tabClick: function (e) {
            const id = e.detail.id
            this.triggerEvent('tabClick', { id: id }, {})
        },
    }
})