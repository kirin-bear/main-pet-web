import axios from "axios";
import type {AxiosInstance, AxiosRequestConfig, AxiosError} from "axios";

// набор опшионов по работе с плагином
interface Options {
    tokenName: string,
    expiresInName: string,
    baseUrl: string,
    pathToLogin: string
}
// базовые опции по работе с плагином
const options: Options = {
    tokenName: 'akb-token',
    expiresInName: 'akb-expires-in',
    baseUrl: import.meta.env.VITE_KIRIN_BEAR_API_URL,
    pathToLogin: '/login' // пусто на страницу авторизации
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
        if (needRefresh()) {
            refresh();
        }
        return response;
    },
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            localStorage.removeItem(options.tokenName);
            window.location.pathname = options.pathToLogin;
        }
        if (needRefresh()) {
            refresh();
        }
        return Promise.reject(error);
    }
);

/**
 * Метод обновления токена
 */
function refresh(): void {
    axiosWrapper.post('/auth/jwt/refresh')
        .then(response => {
            const nowTime: Number = Number((Date.now()/1000));

            localStorage.setItem(options.tokenName, response.data.access_token || '');
            localStorage.setItem(options.expiresInName, String(nowTime + response.data.expires_in));
        })
        .catch(() => {
            // если ошибка при рефреше - просим заново авторизоваться, это значит что токен протух
            localStorage.removeItem(options.tokenName);
            window.location.pathname = options.pathToLogin;
        });
}

/**
 * Нужно обновлять токен тогда, когда до его истечения осталось меньше 2 минут
 */
function needRefresh(): Boolean {
    const expiresIn: number = Number.parseInt(localStorage.getItem(options.expiresInName) || '');
    return expiresIn > 0 && expiresIn - Date.now() / 1000 < 120;
}

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
        const nowTime: Number = Number((Date.now()/1000));

        localStorage.setItem(options.tokenName, response.data.access_token || '');
        localStorage.setItem(options.expiresInName, String(nowTime + response.data.expires_in));
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
