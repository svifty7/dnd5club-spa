import axios, { AxiosInstance } from 'axios';

export default class HTTPService {
    private readonly axios: AxiosInstance = axios.create({
        baseURL: `${ process.env.VUE_APP_API_URL }/api/v1`
    });

    public async post(url: string, data: any) {
        return this.axios({
            url,
            data,
            method: 'post',
        })
    }

    public async get(url: string, params?: any) {
        return this.axios({
            url,
            params,
            method: 'get',
        })
    }
}
