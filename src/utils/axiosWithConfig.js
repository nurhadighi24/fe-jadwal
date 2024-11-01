import axios from "axios";

let bearerToken = "";
let baseUrl = "";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token, backendUrl, apiKey) => {
  baseUrl = backendUrl;
  bearerToken = token;
  axiosWithConfig.defaults.headers["x-api-key"] = apiKey;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = baseUrl;
  axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;

  return axiosConfig;
});

export default axiosWithConfig;
