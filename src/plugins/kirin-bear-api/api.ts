import axios from "axios";
import type {AxiosInstance, AxiosRequestConfig, AxiosError} from "axios";
import {Visit} from "@/plugins/kirin-bear-api/services/visit";
import {Finance} from "@/plugins/kirin-bear-api/services/finance";

// набор опшионов по работе с плагином
interface Options {
    tokenName: string,
    expiresInName: string,
    baseUrl: string,
    pathToLogin: string,
    pathAfterLogin: string,
    timeToRefreshToken: number
}
// базовые опции по работе с плагином
const options: Options = {
    tokenName: 'akb-token',
    expiresInName: 'akb-expires-in',
    baseUrl: import.meta.env.VITE_KIRIN_BEAR_API_URL,
    pathToLogin: '/login', // пусто на страницу авторизации
    pathAfterLogin: '/user/about', // после авторизации - куда перенаправлять
    timeToRefreshToken: 120, // указывается в секундах
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
        //if (needRefresh()) {
        //    refresh();
        //}
        return response;
    },
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            localStorage.removeItem(options.tokenName);
            goToLogin();
        }
        //if (needRefresh()) {
        //    refresh();
        //}
        return Promise.reject(error);
    }
);

/**
 * Метод обновления токена
 */
function refresh(): void {
    axios.post(options.baseUrl+'/auth/jwt/refresh')
        .then(response => {
            updateTokenInLocalStorage(response.data.access_token || '', response.data.expires_in);
        })
        .catch(() => {
            // если ошибка при рефреше - просим заново авторизоваться, это значит что токен протух
            localStorage.removeItem(options.tokenName);

            goToLogin();
        });
}

/**
 * Нужно обновлять токен тогда, когда до его истечения осталось меньше 2 минут
 */
function needRefresh(): Boolean {
    const expiresIn: number = Number.parseInt(localStorage.getItem(options.expiresInName) || '');
    console.log(expiresIn);
    return expiresIn > 0 && expiresIn - Date.now() / 1000 < options.timeToRefreshToken;
}

function goToLogin(): void {
    if (window.location.pathname !== options.pathToLogin) {
        window.location.pathname = options.pathToLogin;
    }
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
        updateTokenInLocalStorage(response.data.access_token || '', response.data.expires_in);
        window.location.pathname = options.pathAfterLogin;
    });
}

/**
 * Метод обновления токена в localStorage
 * @param token
 * @param expiresIn
 */
function updateTokenInLocalStorage(token: string, expiresIn: number): void {
    const nowTime: Number = Number((Date.now()/1000));

    localStorage.setItem(options.tokenName, token);
    localStorage.setItem(options.expiresInName, String(nowTime.valueOf() + expiresIn));
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
    auth: (email: string, password: string) => void,
    getToken: () => string,
    visit: Visit,
    finance: Finance
}

const api: Api = {
    axios: axiosWrapper,
    auth: auth,
    getToken: getToken,
    visit: new Visit(axiosWrapper),
    finance: new Finance(axiosWrapper)
}

export default api;
