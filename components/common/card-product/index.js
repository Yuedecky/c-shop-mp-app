// components/book/normal/book-normal.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        product: Object,
        show: {
            type: Boolean,
            value: false,
            observer: function (val) {
                console.log(val)
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        title: String,
        author: String,
        img: String
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTap: function (event) {
            this.triggerEvent('click', {
                pid: this.properties.product.id
            }, {})
            wx.navigateTo({
                url: '../../pages/product-dedtail/product-tail?pid=' + this.properties.product.id,
            })
        }
    }
})
