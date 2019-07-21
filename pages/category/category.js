Page({
    data: {
        navLeftHeight: 0,
        headerBar: {
            image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2878064701,1281201202&fm=27&gp=0.jpg',
            target: '/pages/raider/index'
        },
        tabs: [
            {
                name: '手机',
                id: 12
            },
            {
                name: '电脑',
                id: 13
            },
            {
                name: '平板',
                id: 14
            },
            {
                name: '配件',
                id: 16
            }
        ],
        items: [
            {
                text: '所有品牌',
                id: 0
            },
            {
                text: '苹果',
                id: 1002
            },
            {
                text: '华为',
                id: 1023
            },
            {
                text: "小米",
                id: 1024
            },
            {
                text: '荣耀',
                id: 1234
            },
            {
                text: '魅族',
                id: 1245
            },
            {
                text: 'OPPO',
                id: 1256
            },
            {
                text: 'VIVO',
                id: 2345
            }
        ],
        current: 0
    },

    onClickNav({ detail = {} }) {
        this.setData({
            mainActiveIndex: detail.index || 0
        });
    },

    onClickItem({ detail = {} }) {
        this.setData({
            activeId: detail.id
        });
    },
    onLoad: function () {
        // 获取系统信息
        const res = wx.getSystemInfoSync();
        const device = new RegExp("iOS");
        const result = device.test(res.system);
        let tmp = 140;
        let h = res.windowHeight - res.windowWidth / 750 * 116 - tmp;
        this.setData({
            navLeftHeight: h,
        });
        console.log('navLeftHeight:', this.data.navLeftHeight)
    },

    brandTap: function (e) {
        const code = e.detail.code;
        this.setData({
            current: code
        })
    },
    tabClick: function (e) {
        const id = this.data.tabs[e.detail.index].id
        this.setData({
            items: []
        })
    }
})