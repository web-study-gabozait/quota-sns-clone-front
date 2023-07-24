import {CONFIG} from "@/config";
import axios, {AxiosRequestConfig} from "axios";
import {requestInterceptor} from "./requestInterceptor";

export const apiHost = CONFIG.API_HOST;

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: apiHost,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
};

const apiClient = axios.create(axiosRequestConfig);

apiClient.interceptors.request.use(requestInterceptor, (err) => err);

export default apiClient;
