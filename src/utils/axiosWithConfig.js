import axios from "axios";

let bearerToken = "";
let baseUrl = "";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token, backendUrl) => {
  baseUrl = backendUrl;
  bearerToken = token;
  axiosWithConfig.defaults.headers["x-api-key"] = import.meta.env.VITE_API_KEY;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = baseUrl;
  axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;

  return axiosConfig;
});

export default axiosWithConfig;
