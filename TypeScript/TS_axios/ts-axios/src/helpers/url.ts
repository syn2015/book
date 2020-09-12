// 导入util工具函数
import { isDate, isPlainObject } from './util'

// encode()
function encode(val: string): string {
  // encodeRRIComponent()
  // i 区分大小写
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const parts: string[] = []
  // params的所有属性
  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values = []
    // 当val时数组时
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      // val不是数组时，统一为数组
      values = [val]
    }
    values.forEach(val => {
      // 类型判断
      if (isDate(val)) {
        //
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        // string变JSON字符串
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  // & 连接的形式
  let serializedParams = parts.join('&')
  // #hash方法
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    // 拼接 ，当有？地时候，&拼接，否则添加？并拼接
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}
