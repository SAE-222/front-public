const prod = 'production' === process.env.NODE_ENV

const URL = prod ? process.env.NEXT_PUBLIC_API_URL : 'http://localhost:3000/api'

export default URL;