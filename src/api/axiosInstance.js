import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

// Token'ı header'a eklemek için
export const setAuthToken = (token) => {
  axiosInstance.defaults.headers.common["Authorization"] = token;
};

// Token'ı header'dan silmek için
export const clearAuthToken = () => {
  delete axiosInstance.defaults.headers.common["Authorization"];
};

export default axiosInstance;