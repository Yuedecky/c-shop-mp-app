Component({
    properties: {
        toBeActivateTotal: String,
        total: String,
    },
    data: {

    },
    methods: {
        onViewActivate(){
            this.triggerEvent("view",{},{})
        }
    }
})