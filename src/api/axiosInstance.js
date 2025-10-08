import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Cache-Control": "no-cache"
  },
  responseType: "json",
  timeout: 20000
});

//Token'ı her isteğe otomatik ekleme
axiosInstance.interceptors.request.use((config) => {
const token = localStorage.getItem("token") || sessionStorage.getItem("token");

if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

//401 hatasını yakalama
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const currentPath = window.location.pathname;

    const isAuthError = status === 401;
    const isLoginPage = currentPath === "/login";
    const skipRedirectPaths = ["/settle", "/checkout", "/order"];

    if (isAuthError && !isLoginPage && !skipRedirectPaths.includes(currentPath)) {
      console.warn("Yetkisiz istek: Oturum geçersiz.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

//Login sonrası token'ı kaydetme ve header'a ekleme
export const setAuthToken = (token) => {
  localStorage.setItem("token", token);
sessionStorage.setItem("token", token);
axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

//Logout sonrası token'ı temizleme
export const clearAuthToken = () => {
  localStorage.removeItem("token");
  delete axiosInstance.defaults.headers.common["Authorization"];
};

export default axiosInstance;


