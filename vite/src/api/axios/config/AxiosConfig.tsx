import axios from "axios";

const URL = import.meta.env.VITE_DOMAIN_DB as string;

const axiosConfig = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json" },
});

export default axiosConfig;
