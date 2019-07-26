Component({
    properties: {
        shop: Object,
    },
    data: {
    },
    methods: {
        click(){
            this.triggerEvent('click',{id:this.properties.shop.id},{})
        }
    }
})