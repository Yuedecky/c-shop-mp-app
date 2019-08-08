import {
    Http
} from '../utils/http.js';

class AuthModel extends Http {

    /**
     * @param {*} param0 
     * @param {*} code 
     */
    registerUserInfo({ avatarUrl, city, country, gender, lang, nickName, province }, code) {
        return this.request({
            url: 'passport/registerInfo',
            method: 'POST',
            data: {
                code,
                avatarUrl,
                city,
                gender,
                nickName,
                province,
                country
            }
        })
    }

    /**
     * 
     * @param {手机号，微信获得} phone 
     * @param {code,来自微信} code 
     * @param {手机品牌} phoneBrand 
     * @param {手机型号} model 
     */
    registerUserPhone(phone, code, phoneBrand, model, { referer }) {
        return this.request({
            url: 'passport/registerPhone',
            method: 'POST',
            data: {
                code,
                phone,
                phoneBrand,
                model,
                referer
            }
        })
    }
}
export { AuthModel }