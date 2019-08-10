Component({
    properties: {
        logoUrl: String,
        logoName: String,
        authTitle: String,
        authDesc: String
    },
    data: {

    },
    methods: {

        getPhoneNumber(e) {

            this.triggerEvent('getPhone', {}, {})
        },
        getUserInfo(e) {

        }
    },
})