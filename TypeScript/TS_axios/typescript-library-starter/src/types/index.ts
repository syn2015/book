// 公共类型文件
export type Method='get'|'GET'
|'delete'|'Delete'
|'head'|'HEAD'
|'options'|'OPTIONS'
|'post'|'POST'
|'put'|'PUT'
|'patch'|'PATCH'
export interface AxiosRequestConfi{
    url:string
    method?:Method
    data?:any
    param?:any

}