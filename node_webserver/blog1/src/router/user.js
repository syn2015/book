const
    login = require('../controller/user')
const {
    SuccessModel,
    ErrorModel
} = require('../module/responseModel')

//
const getCookieExpires = () => {
    const d = new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
    return d.toGMTString()
}


const handleUserRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    if (method === 'GET' && path === '/api/user/login') {
        const {
            username,
            password
        } = req.body
        const result = login(username, password);
        // if (result) {
        //     return new SuccessModel()
        // } else {
        //     return new ErrorModel('login failed')
        // }
        return result.then(data => {
            if (data.username) {
                //操作cookie
                res.setHeader('Set-Cookie', `username=${data.username};path=/;httpOnly;expires=${getCookieExpires()}`)
                return new SuccessModel()
            }
            return new ErrorModel('login failed')

        })

    }
    if (method === 'GET' && req.path === '/api/user/login-test') {
        if (req.cookie.username) {
            return Promise.resolve(new SuccessModel({
                username: req.cookie.username
            }))
        }
        return Promise.resolve(new ErrorModel(' 尚未登陆'))
    }
}
module.exports = handleUserRouter