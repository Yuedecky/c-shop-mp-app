import {
    Http
} from '../utils/http.js';

class CommentModel extends Http {


    listComments(goodsId, pageNum, pageSize) {
        return this.request({
            url: 'goods/comment/list',
            method: 'POST',
            data: {
                goodsId,
                pageNum,
                pageSize
            }
        })
    }
}
export { CommentModel }