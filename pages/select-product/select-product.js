import { CartModel } from '../../models/cart-model';
const cartModel = new CartModel();
Page({
    data: {
        navLeftHeight: 0,
        headerBar: {
            image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2878064701,1281201202&fm=27&gp=0.jpg',
            target: '/pages/raider/index'
        },
        tabs: [


        ],
        items: [

        ],
        current: 0
    },


    onLoad: function () {

    },

    onSelectedProduct(e) {
        const id = e.detail.id;
        wx.navigateBack({
            delta: 1
        })
        var pages = getCurrentPages();
        var prePage = pages[pages.length - 2]
        let compares = prePage.data.compares;
        cartModel.addCampare(id).then(res => {
            compares.push(id);
            prePage.setData({
                compares
            })
        })

    }

})