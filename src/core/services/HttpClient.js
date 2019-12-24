import axios from "axios";
// import { logger } from "./AppLogger";
import appConfig from "../../config/app-config";

/**
 * Axios basic configuration
 * Some general configuration can be added like timeout, headers, params etc. More details can be found on https://github.com/axios/axios
 */
const config = {
    baseURL: appConfig.api.BASE_URL,
};

/**
 * Creating the instance of Axios
 * It is because, in large scale application we may need to consume APIs from more than single server,
 * So, may need to create multiple http client with different config
 * Only this client will be used rather than axios in the application
 */
const httpClient = axios.create(config);

const loggerInterceptor = (configuration) => {
    /** Add logging here */
    return configuration;
};

/** Adding the request interceptors */
httpClient.interceptors.request.use(
    (configuration) => {

        const jwtToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhbnZoIiwicm9sZSI6MjExMCwiaWF0IjoxNTc1OTY1Njg3fQ.bjxBgf7oTIc3-RBWA8K9KKj_HuTajYzmB1s9O_1FftU';

        const contentType = 'application/json';

        const headers = {
            'Accept': contentType,
            'Authorization': jwtToken,
        };

        configuration.headers = headers;

        return configuration;
    },
    (error) => {
        return Promise.reject(error);
    }
);

httpClient.interceptors.request.use(loggerInterceptor);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // Response error
        return Promise.reject(error);
    },
);

/**
 *
 * @param {*} url
 * @param {*} requestBody
 */
export const sendPost = async (url, requestBody) => {

    const response = await httpClient.post(url, requestBody);

    const { data } = response;

    return data;
};

/**
 *
 * @param {*} url
 */
export const sendGet = async (url) => {

    const response = await httpClient.get(url);

    const { data } = response;

    return data;
};

/**
 *
 * @param {*} url
 * @param {*} requestBody
 */
export const sendDelete = async (url, requestBody) => {

    const response = await httpClient.delete(url, requestBody);

    const { data } = response;

    return data;
};

/**
 *
 * @param {*} url
 * @param {*} requestBody
 */
export const sendPut = async (url, requestBody) => {

    const response = await httpClient.put(url, requestBody);

    const { data } = response;

    return data;
};