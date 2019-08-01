import HttpRequest from '@/libs/axios'
import config from '@/config' //@表示src
//
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios
