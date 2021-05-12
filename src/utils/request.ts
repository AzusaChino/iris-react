import axios from "axios";

const request = axios.create({
  baseURL: process.env.BASE_URL || "http://127.0.0.1:8080",
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    return Promise.resolve(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
