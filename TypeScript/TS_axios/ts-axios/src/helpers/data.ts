import { isPlainObject } from './util'

// 转换为json类型方便传输
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
// 在没有设置responseType的时候，服务器返回的数据为字符串类型。
// 需要进一步转换成一个JSON对象
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    // 异常处理
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
