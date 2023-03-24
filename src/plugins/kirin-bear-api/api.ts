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

const apiWrapper: AxiosInstance = axios.create({
    baseURL: options.baseUrl,
});

// в каждый реквест прокидываем токен
apiWrapper.interceptors.request.use(
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
apiWrapper.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response && error.response.status === 401) {
            // получаем токен
            const token = getToken();

            // TODO: тут надо обновить токен
        }
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
    readonly wrapper: AxiosInstance,
    saveVisit: (page: string, referer: string) => void,
    auth: (email: string, password: string) => void,
    getToken: () => string,
}

const api: Api = {
    wrapper: apiWrapper,
    saveVisit: saveVisit,
    auth: auth,
    getToken: getToken,
}

export default api;
