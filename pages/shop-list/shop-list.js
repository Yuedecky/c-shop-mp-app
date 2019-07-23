Page({
    data: {
        active: 0,
        tabs: [
            {
                name: '附近(81)',
                id: 12
            },
            {
                name: '杨浦区(21)',
                id: 13
            },
            {
                name: '闵行区(12)',
                id: 14
            },
            {
                name: '徐汇区(10)',
                id: 16
            },
            {
                name: '长宁区(23)',
                id: 24
            },
            {
                name: '浦东新区(26)',
                id: 26
            }
        ],
        shops: [{
            id: 1230,
            neareast: true,
            distance: '2.3KM',
            name: '上海常态广场店',
            address: "上海市浦东新区金科路2889号长泰官场B1层GF区（河马先生一楼扶梯下往左20米）",
            labels: [
                "回收",
                "依旧欢心",
                "维修"
            ]
        },
        {
            id: 1233,
            neareast: true,
            distance: '2.3KM',
            name: '上海常态广场店',
            address: "上海市浦东新区金科路2889号长泰官场B1层GF区（河马先生一楼扶梯下往左20米）",
            labels: [
                "回收",
                "依旧欢心",
                "维修"
            ]
        }]
    },

    onLoad() {

    }
})