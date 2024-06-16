import type {AxiosInstance} from "axios";

export class Visit {

    readonly axiosWrapper: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosWrapper = axiosInstance;
    }

    public save(page: string, referer: string): void {
        this.axiosWrapper
            .post('/api/v1/visit', {
                referer: referer,
                page: page,
            })
            .then(() => {});
    }
}

