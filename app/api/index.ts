import { default as api } from "axios";

api.defaults.baseURL = process.env.EXPO_PUBLIC_API_URL;

export default api;
