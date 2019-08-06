import {
    Http
} from '../utils/http.js';

class BrandModel extends Http {
    postBrandCategories(categoryId) {
        return this.request({
            url: 'brand/category',
            method: 'POST',
            data: {
                categoryId: categoryId
            }
        })
    }

    postBrandProducts(brandId, pageNum, pageSize) {
        return this.request({
            url: 'model/brand',
            method: 'POST',
            data: {
                brandId: brandId,
                pageNum: pageNum,
                pageSize: pageSize
            }
        })
    }

    getHoBrands(){
        return this.request({
            url:'brand/hot',
            method: 'GET'
        })
    }
}
export { BrandModel }