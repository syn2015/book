import { isPlainObject, deepMerge } from './util'
import { Method } from '../types'

// headers的规范化
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    //
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      // 删除小写的
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  // headers规范化
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    // headers存在且未配置Content-Type
    // headers的Content-type必须规范化，统一大小写
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
// 处理成键值对形式
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  // 根据\r\n来处理成数组
  headers.split('\r\n').forEach(line => {
    // 进一步根据：来处理成数组
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    // 组合成对象
    parsed[key] = val
  })

  return parsed
}

export function flattenHeaders(headers: any, method: Method): any {
  if (!headers) {
    return headers
  }
  headers = deepMerge(headers.common, headers[method], headers)

  const methodsToDelete = ['delete', 'get', 'head', 'options', 'post', 'put', 'patch', 'common']

  methodsToDelete.forEach(method => {
    delete headers[method]
  })

  return headers
}
