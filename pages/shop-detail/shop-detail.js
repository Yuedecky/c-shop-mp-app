Page({
    data: {
        shop: {
            name: '上海唐镇阳关天地店',
            photo: '',
            openTime: '10:00-22:00',
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
            offer:[
                {
                    tag: '折',
                    name: '配件88折优惠',
                    fromDate: '2019年07月1日',
                    endDate: '2019年08月31日'
                }
            ]
        }
    },
    onLoad: function () {

    },
    onShow() {

    },
    onReady() {

    }
})