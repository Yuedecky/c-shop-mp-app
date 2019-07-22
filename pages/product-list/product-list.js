Page({
    data: {
        headerBar: {
            image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2878064701,1281201202&fm=27&gp=0.jpg',
            target: ""
        },
        products: [{
            name: 'iphoneX',
            tags: [
                '64G', '4.7英寸', '1200W'
            ],
            tag: '热卖',
            gifts: [
                '免费贴膜', '赠手机壳', '免费教程',
            ],
            price: '2345.23',
            rating: '87%',
            image: 'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
            id: 1222
        },
        {
            name: 'iphoneX',
            tags: [
                '64G', '4.7英寸', '1200W'
            ],
            tag: '新品',
            gifts: [
                '免费贴膜', '赠手机壳', '免费教程',
            ],
            price: '2345.23',
            rating: '87%',
            image: 'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
            id: 1224
        }]
    },
    onLoad: function () {

    },

    onHeaderBarClick() {
        console.log("click")
    }
})