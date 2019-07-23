Page({
    data: {
        headerBar: {
            image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2878064701,1281201202&fm=27&gp=0.jpg',
            target: ""
        },
        headerProduct: {
            name: 'iphoneX',
            version: "青春版",
            tag: '热卖',
            gifts: [
                '免费贴膜', '赠手机壳', '免费教程',
            ],
            price: '2345.23',
            oldPrice: "2888",
            desc: '旗舰AI感光双蛇',
            photo: 'https://i1.mifile.cn/a4/xmad_15638566942237_fezNX.jpg',
            id: 1222
        },
        products: [{
            name: 'iphoneX',
            version: "青春版",
            tag: '热卖',
            gifts: [
                '免费贴膜', '赠手机壳', '免费教程',
            ],
            price: '2345.23',
            oldPrice: "2888",
            desc: '旗舰AI感光双蛇',
            photo: 'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
            id: 1222
        },
        {
            name: 'iphoneX',
            version: "青春版",
            tag: '热卖',
            gifts: [
                '免费贴膜', '赠手机壳', '免费教程',
            ],
            price: '2345.23',
            oldPrice: "2888",
            desc: '旗舰AI感光双蛇',
            photo: 'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
            id: 1224
        },
        {
            name: 'iphoneX',
            version: "尊像版",
            tag: '新品',
            gifts: [
                '免费贴膜', '赠手机壳', '免费教程',
            ],
            oldPrice: "2344",
            price: '2345.23',
            desc: '索尼2400万自拍，超级夜景',
            photo: 'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
            id: 1224
        }]
    },
    onLoad: function () {

    },

    onHeaderBarClick() {
        console.log("click")
    }
})