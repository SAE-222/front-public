import axios from "axios";
import URL from "./environment";

const axiosInstance = axios.create({
  baseURL: URL,
});

export default axiosInstance;
