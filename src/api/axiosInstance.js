import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Cache-Control": "no-cache"
  },
  responseType: "json",
  timeout: 10000
});

//Token'ı header'a ekleme
export const setAuthToken = (token) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

//Token'ı header'dan silme
export const clearAuthToken = () => {
  delete axiosInstance.defaults.headers.common["Authorization"];
};

export default axiosInstance;