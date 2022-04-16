import axios from "axios";

const api = axios.create({ baseURL: window.Event.API_BASE_URL });

export default api;
