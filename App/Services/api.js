import axios from "axios";

const axiosApiInstance = axios.create();

axiosApiInstance.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

axiosApiInstance.interceptors.request.use(
  async (config) => {
    // Add custom config in interceptors
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
