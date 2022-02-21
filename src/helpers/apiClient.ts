import axios, { AxiosRequestConfig } from 'axios';

const apiClient = () => {
    const API_URL = 'http://localhost:3400/api/v1'

    const axiosInstance = axios.create({
        baseURL: API_URL,
        responseType: 'json'
    });

    return axiosInstance;
}

export default apiClient;