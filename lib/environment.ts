const prod = "production" === process.env.NODE_ENV;

const CLIENT_URL = prod
  ? process.env.NEXT_PUBLIC_API_URL
  : "http://localhost:8393/api";

const BACK_URL = prod ? process.env.SERVER_SIDE_API_URL : "http://localhost:8393/api";

export { CLIENT_URL, BACK_URL }
