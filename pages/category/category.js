import { CategoryModel } from '../../models/category-model';
import { BrandModel } from '../../models/brand-model';
const brandModel = new BrandModel();
let categoryModel = new CategoryModel();
Page({
    data: {
        navLeftHeight: 0,
        headerBar: {
            image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2878064701,1281201202&fm=27&gp=0.jpg',
            target: '/pages/raider/index'
        },
        tabs: [],
        items: [],
        current: 0,
        active: 0,
        pageNum: 1,
        pageSize: 20,
        products: []
    },


    onLoad: function () {
        let cid = 0;
        categoryModel.getAllCates().then((res) => {
            const cates = res.data
            if (cates.length > 0) {
                cid = cates[0].id;
                this.setData({
                    tabs: res.data
                })
                this.loadCategoryBrandProducts(cid)
            }
        })
    },

    brandTap(e) {
        console.log(e)
        const bid = e.detail.id;
        this.setData({
            active: bid
        })
        this.loadBrandProducts(bid)
    },

    tabClick(e) {
        const id = e.detail.id
        this.loadCategoryBrandProducts(id)
    },

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


    onHeaderBarClick: function () {

    }
})