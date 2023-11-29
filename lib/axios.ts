import axios from "axios";
import { CLIENT_URL } from "./environment";

const axiosInstance = axios.create({
  baseURL: CLIENT_URL,
});

export default axiosInstance;
