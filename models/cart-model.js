import {
    Http
} from '../utils/http.js';

class CartModel extends Http {


    listModels() {
        return this.request({
            url: 'cart/all',
            method: 'GET',
        })
    }
}
export { CartModel }