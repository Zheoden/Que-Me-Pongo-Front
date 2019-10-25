import { axiosService } from './axiosService';
import { AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios';


export abstract class ApiService {
    private axiosClient: AxiosInstance;

    protected constructor() {
        this.axiosClient = axiosService;
    }

    protected get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
        return this.axiosClient.get(url, config);
    }

    protected delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
        return this.axiosClient.delete(url, config);
    }

    protected post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
        return this.axiosClient.post(url, data, config);
    }

    protected put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T> {
        return this.axiosClient.put(url, data, config);
    }
}
