import { GoodsModel } from '../../models/goods-model';
const goodsModel = new GoodsModel();
Page({
    data: {
        image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2878064701,1281201202&fm=27&gp=0.jpg',
        products: [],
        pageNum: 1,
        pageSize: 10
    },
    onLoad(options) {
        const bid = options.brandId;
        const bName = options.brandName;
        wx.setNavigationBarTitle({
            title: bName,
            success: (result) => {

            },
            fail: () => { },
            complete: () => { }
        });
        goodsModel.postGoodsList({ brandId: bid }, this.data.pageNum, this.data.pageSize).then(res => {
            const data = res.data;
            const list = data.list;
            const page = data.page;
            if (list != null && list.length > 0) {
                this.setData({
                    products: list,
                    pageNum: page.current
                })
            }
        })
    },
    onReady() {

    }
})