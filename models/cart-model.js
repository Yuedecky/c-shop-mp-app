import {
    Http
} from '../utils/http.js';

class CartModel extends Http {



    addCampare(goodsId) {
        return this.request({
            url: 'choose/cart/add',
            method: 'POST',
            data: {
                goodsId,
                count: 1
            }
        })
    }

    listCarts() {
        return this.request({
            url: 'choose/cart/all',
            method: 'GET'
        })
    }
}
export { CartModel }