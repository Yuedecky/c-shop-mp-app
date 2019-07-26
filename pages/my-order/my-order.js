Page({
    data: {
        active: 0,
        tabs: [{
            name: '已完成',
            id: 1
        }, {
            name: '进行中',
            id: 2
        }],
        orders: [
            {
                orderNo: '2018232923923232',
                status: '待提货',
                name: '张三',
                address: '随时所所所反而分反而分',
                phone: '182****2344',
                type: '1',
                products: [
                    {
                        name: 'iphoneX',
                        tags: [
                            '64G', '4.7英寸', '1200W'
                        ],
                        remarkCount: 234,
                        tag: '热卖',
                        gifts: [
                            '免费贴膜', '赠手机壳', '免费教程',
                        ],
                        price: '￥2345.23',
                        oPrice: '￥2555',
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
                        remarkCount: 234,
                        price: '￥2345.23',
                        oPrice: '￥2555',
                        rating: '87%',
                        image: 'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
                        id: 1224
                    }
                ]
            }
        ]
    },
    onReady() {

    },
    onLoad() {

    }
})