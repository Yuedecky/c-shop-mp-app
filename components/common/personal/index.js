Component({
    properties: {
        avatar: String,
        name: String
    },
    data: {

    },
    methods: {
        onClieckSettings() {
            wx.navigateTo({
                url: "/pages/personal-settings/personal-settings"
            })
        }
    }
})