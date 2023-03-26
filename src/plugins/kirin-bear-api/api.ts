import axios from "axios";
import type {AxiosInstance, AxiosRequestConfig, AxiosError} from "axios";

// набор опшионов по работе с плагином
interface Options {
    tokenName: string,
    baseUrl: string
}
// базовые опции по работе с плагином
const options: Options = {
    tokenName: 'akb-token',
    baseUrl: import.meta.env.VITE_KIRIN_BEAR_API_URL
}

const axiosWrapper: AxiosInstance = axios.create({
    baseURL: options.baseUrl,
});

// в каждый реквест прокидываем токен
axiosWrapper.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = getToken();

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// на каждый ответ, проверяем ошибку авторизации

axiosWrapper.interceptors.response.use(
    (response) => {
        console.log('api response');
        console.log(response);
        return response;
    },
    (error: AxiosError) => {
        console.log('api error');
        console.log(error.response);
        if (error.response && error.response.status === 401) {
            // получаем токен
            const token = getToken();
            console.log('Ошбивка авторизации, попробуем обновить токен');
            // TODO: тут надо обновить токен
        }
        return Promise.reject(error);
    }
);

/**
 * Метод сохранения посещения страницы
 *
 * @param page
 * @param referer
 */
function saveVisit(page: string, referer: string): void {
    axios
        .post(options.baseUrl+'/api/v1/visit', {
            referer: referer,
            page: page,
        })
        .then(() => {});
}

/**
 * Метод авторизации по логину и паролю
 */
function auth(email: string, password: string): void {
    axios.post(options.baseUrl+'/auth/jwt/login', {
        email: email,
        password: password,
    })
    .then((response) => {
        localStorage.setItem(options.tokenName, response.data.access_token || '');
        window.location.pathname = '/user/about';
    });
}

/**
 * Метод получения токена
 */
function getToken(): string {
    return localStorage.getItem(options.tokenName) || '';
}

// зададим общий тип нашего плагина
interface Api {
    readonly axios: AxiosInstance,
    saveVisit: (page: string, referer: string) => void,
    auth: (email: string, password: string) => void,
    getToken: () => string,
}

const api: Api = {
    axios: axiosWrapper,
    saveVisit: saveVisit,
    auth: auth,
    getToken: getToken,
}

export default api;
