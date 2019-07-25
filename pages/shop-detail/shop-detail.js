Page({
    data: {
        shop: {
            name: '上海唐镇阳关天地店',
            photo: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3356767536,2626121078&fm=173&app=25&f=JPEG?w=640&h=404&s=8FAB4C85DC9BBADA509D800B0300F0D1',
            date: '10:00-22:00',
            address: '上海市浦东新区高科东路777号唐镇阳光天地B层服务台正前方80米处',
            phone: '02180111030',
            serviceList: [
                {
                    id: 23,
                    name: '旧机回收',
                    desc: '手机 笔记本 平板 摄像摄影 智能数码'
                },
                {
                    id: 24,
                    name: '以旧换新',
                    desc: '旧机抵扣 购买新机平均6折起'
                }
            ],
            offers: [
                {
                    id: 24,
                    status: 0,
                    tagImage: '/assets/images/sale.png',
                    title: '配件88折优惠',
                    desc: '2019年07月1日',
                    endDate: '2019年08月31日',
                    btnName: '领取'
                },
                {
                    id: 23,
                    status: 0,
                    tagImage: '/assets/images/sale.png',
                    title: '配件88折优惠',
                    desc: '2019年07月1日',
                    endDate: '2019年08月31日',
                    btnName: '领取'
                }
            ],
            services: [{
                id: 23,
                status: 0,
                tagImage: '/assets/images/sale.png',
                title: '就机会书',
                desc: '手机 笔记本 平板 摄像摄影 智能数码',
                btnName: '去回收'
            },
            {
                id: 24,
                status: 0,
                tagImage: '/assets/images/sale.png',
                title: '以旧换新',
                desc: '救济抵扣 购买新机 平均6折扣起',
                btnName: '去换新'
            }]
        }
    },
    onLoad: function () {


    },
    onShow() {

    },
    onReady() {

    }
})