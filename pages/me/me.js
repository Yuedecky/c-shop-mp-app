Page({
    data: {
        avatar: "https://img3.mukewang.com/5333a24400017ccd02000200-40-40.jpg",
        name: "broad",

    },
    onLoad: function () {

    },

    onTabItemTap(item) {
        console.log(item)
        const code = wx.getStorageSync('code');
        if (code) {

        } else {
            wx.navigateTo({
                url: '/pages/login/login',
                success: (result) => {

                },
                fail: () => { },
                complete: () => { }
            });
        }
    }

})