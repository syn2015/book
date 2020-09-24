import{AxiosRequestConfi} from './types'
export default function xhr(config:AxiosRequestConfi):void{
    const {data=null,url,method='get'}=config
    const request=new XMLHttpRequest()
    request.open(method.toUpperCase(),url,true)
    request.send(data)
}