const HandleBlogRouter = require('./src/router/blog')
const HandleUserRouter = require('./src/router/user')
const querystring = require('querystring')


//session数据
const SESSION_DTAT = {}

const getPostData = (req, res) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })

    })
    return promise
}
const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')
    //获取path
    const url = req.url
    req.path = url.split('?')[0]
    req.query = querystring.parse(url.split('?')[1])

    //get cookie
    req.cookie = {}

    const cookieStr = req.headers.cookie || ''
    cookieStr.split(';').forEach(item => {
        if (!item) {
            return
        }
        const arr = item.split('=')
        const key = arr[0].trim()
        const val = arr[1]
        req.cookie[key] = val
    });

    //解析session
    const needSetCookie=false
    const userid = req.cookie.userid
    if (userid) {
        if (!SESSION_DTAT[userid]) {
            SESSION_DTAT[userid] = {}
        }
        req.session = SESSION_DTAT[userid]
    } else {
        needSetCookie=true
        userid = `${Date.now()}_${Math.random()}`
        SESSION_DTAT[userid] = {}
    }
    req.session = SESSION_DTAT[userid]


    console.log('req.cookie is ', req.cookie)

    getPostData(req).then(postData => {
        req.body = postData
        //blog路由
        const blogResult = HandleBlogRouter(req, res)

        // if (blogData) {
        //     res.end(
        //         JSON.stringify(blogData)
        //     )
        //     return
        // }
        if (blogResult) {

            if(needSetCookie){
                res.setHeader('Set-Cookit',`userid=${userid};path=/;httpOnly;expires=${getCookieExpires()}`)
            }
            blogResult.then(blogData => {
                res.end(
                    JSON.stringify(blogData)
                )
            })
            return
        }
        //user路由
        // const userData = HandleUserRouter(req, res)
        // if (userData) {
        //     res.end(
        //         JSON.stringify(userData)
        //     )
        //     return
        // }

        const userResult = HandleUserRouter(req, res)
        if (userResult) {
            userResult.then(userData => {
                res.end(
                    JSON.stringify(userData)
                )
            })
            return
        }

        //未命中路由，反hi404
        res.writeHead(404, {
            'Content-type': 'text/plain'
        })
        res.write('404 not found \n')
        res.end()
    })




}
module.exports = serverHandle