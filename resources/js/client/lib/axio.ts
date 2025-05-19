import axios from "axios";

const api = axios.create({
  baseURL: "api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor para manejar errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("API Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;