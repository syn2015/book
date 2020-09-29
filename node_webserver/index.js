const http=require('http')
const querystring=require('querystring')
// const server=http.createServer((req,res)=>{
//     console.log('method',req.method)
//     const url=req.url
//     console.log('url,',url)
//     console.log('url.split("?")',url.split('?'))
//     req.query=querystring.parse(url.split('?')[1])
//     console.log('query:',req.query)
//     res.end(JSON.stringify(req.query))

// })
// const server=http.createServer((req,res)=>{
//     if(req.method==='POST'){
//         console.log('content-type：   ',req.headers['content-type'])
//         //数据流接收
//         let postData=""
//         req.on('data',chunk=>{
//             //chunk是二进制流格式
//             postData+=chunk.toString()
//         })
//         req.on('end',()=>{
//             console.log('接收完了postData:  ',postData)
//             res.end('接收完毕')
//         })
//     }
// })
const server=http.createServer((req,res)=>{
    const method=req.method
    const url=req.url
    const path=url.split('?')[0]
    const query=querystring.parse(url.split('?')[1])
    //设置返回格式json
    res.setHeader('Content-type','application/json')
    //返回的数据
    const resData={
        method,
        url,
        path,
        query
    }
    //
    if(method==='GET'){
        res.end(
            JSON.stringify(resData)
        )
    }
    //
    if(method==='POST'){
        let postData=''
        req.on('data',chunk=>{
            postData+=chunk.toString()
        })
        req.on('end',()=>{
            resData.postData=postData
            res.end(
                JSON.stringify(resData)
            )
        })
       
    }
})
server.listen(3000,()=>{
    console.log('listen to 3000')
})