import type {AxiosInstance, AxiosResponse} from "axios";
export class Finance {
    readonly axiosWrapper: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosWrapper = axiosInstance;
    }

    public get(type: string): Promise<AxiosResponse<any>>|undefined {
        try {
            return this.axiosWrapper.get('/api/v1/finance/invoice-month?type='+type);
        } catch (e) {
            console.error(e)
        }
    }
}
