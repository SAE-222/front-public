const prod = "production" === process.env.NODE_ENV;

const URL = prod
  ? process.env.NEXT_PUBLIC_API_URL
  : "http://localhost:8393/api";

export default URL;
