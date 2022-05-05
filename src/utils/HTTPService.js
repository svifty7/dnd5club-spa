import axios from 'axios';

export default class HTTPService {
    constructor() {
        this.axios = axios.create({
            baseURL: `${ process.env.VUE_APP_API_URL }/api/v1`
        });

        this.rawAxios = axios.create({
            baseURL: process.env.VUE_APP_API_URL
        });
    }

    async post(url, data) {
        return this.axios({
            url,
            data,
            method: 'post',
        })
    }

    async get(url, params) {
        return this.axios({
            url,
            params,
            method: 'get',
        })
    }

    async rawGet(url, params) {
        return this.rawAxios({
            url,
            params,
            method: 'get',
        })
    }
}
