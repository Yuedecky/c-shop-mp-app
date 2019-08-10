import {
    Http
} from '../utils/http.js';

class GoodsModel extends Http {
    postGoodsList({ categoryId, brandId, modelId, goodsName, status } = {}, pageNum, pageSize) {
        return this.request({
            url: 'goods/list',
            method: 'POST',
            data: {
                categoryId,
                brandId,
                modelId,
                goodsName,
                status,
                pageNum: pageNum,
                pageSize: pageSize
            }
        })
    }

    listGoodsParams(modelId) {
        return this.request({
            url: 'goods/model',
            method: 'POST',
            data: {
                modelId
            }
        })
    }

    postGoodsDetail(goodsId) {
        return this.request({
            url: 'goods/detail',
            method: 'POST',
            data: {
                goodsId
            }
        })
    }


    


}
export { GoodsModel }