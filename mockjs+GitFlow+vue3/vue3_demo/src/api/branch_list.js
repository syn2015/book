import { createAPI } from '../utils/request'
export const list = (data) => createAPI('/api/getprodlist', 'get', data)
