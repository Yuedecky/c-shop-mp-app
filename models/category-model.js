import {
    Http
} from '../utils/http.js';

class CategoryModel extends Http {
    getAllCates() {
        return this.request({
            url: 'category/all',
            method: 'GET'
        })
    }
}
export { CategoryModel }