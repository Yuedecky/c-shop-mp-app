import { BrandModel } from '../../../models/brand-model';
import { CategoryModel } from '../../../models/category-model';
import { GoodsModel } from '../../../models/goods-model';
const goodsModel = new GoodsModel();
const categoryModel = new CategoryModel();
const brandModel = new BrandModel();
Component({
    properties: {
        needSearchBar: Boolean,
        image: String,
        tabs: Array,
        products: Array,
        activeHeaderCode: Number,
    },
    data: {
        navLeftHeight: 0,
        current: 0,
        items: [],
        active: 0,
        pageNum: 1,
        pageSize: 20,
        scrollHeight: 560,
        showBottom: false,
        versionList: [],
        memoryList: [],
        colorList: []
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
            let cid = 0;
            categoryModel.getAllCates().then((res) => {
                const cates = res.data
                if (cates.length > 0) {
                    cid = cates[0].id;
                    this.setData({
                        tabs: res.data,
                    })
                    this.loadCategoryBrandProducts(cid)
                }
            })
        },

    },
    methods: {
        onClickProduct(e) {
            const id = e.currentTarget.dataset.id
            this.showBottom(id)
        },
        showBottom(pid) {
            this.setData({
                showBottom: true
            })
            let that = this;
            goodsModel.listGoodsParams(pid).then(res => {
                const data = res.data;
                const dictList = data.list;
                const versionList = data.versionList;
                const colorList = data.colorList;
                const memoryList = data.memoryList;
                const selectedColorName = data.selected.goodsColor;
                const selectedMemoryName = data.selected.goodsMemory;
                const selectedVersionName = data.selected.goodsVersion;
                that.setData({
                    goods: data.selected,
                    dictList,
                    versionList,
                    memoryList,
                    colorList,
                    selectedColorName,
                    selectedMemoryName,
                    selectedVersionName
                })
            })

        },

        onSelected(e) {
            const id = e.detail.id;
            this.triggerEvent('selectedP', { id }, {})
        },
        /**
         * 查询品牌下的商品列表
         * @param {品牌id} bid 
         */
        loadBrandProducts(bid) {
            const pageNum = this.data.pageNum;
            const pageSize = this.data.pageSize;
            this.setData({
                products: []
            })
            brandModel.postBrandProducts(bid, pageNum, pageSize).then(res => {
                const list = res.data.list;
                const page = res.data.page;
                if (list != null && list.length > 0) {
                    this.setData({ products: list, pageNum: page.current, pageSize: page.size })
                }
            })
        },

        /**
         * 查询分类下的品牌列表
         * @param {分类id} cid 
         */
        loadCategoryBrandProducts(cid) {
            brandModel.postBrandCategories(cid).then(res => {
                const data = res.data;
                this.setData({
                    items: data
                })
                if (data != null && data.length > 0) {
                    const bid = data[0].id
                    this.setData({
                        active: bid
                    })
                    this.loadBrandProducts(bid)
                }
            })
        },

        brandTap: function (e) {
            const id = e.detail.id;
            this.setData({
                active: id
            })
            this.loadBrandProducts(id)
        },
        onClick() {
            wx.navigateTo({
                url: "/pages/search/search"
            })
        },
        tabClick: function (e) {
            const id = e.detail.id
            this.loadCategoryBrandProducts(id)
        },
    }
})