import { default as api } from "axios";

api.defaults.baseURL = import.meta.env.VITE_URL_API;

export default api;
