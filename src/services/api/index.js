import api from "../../config/api";
import { getToken } from "../auth";

api.interceptors.use(async (config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;